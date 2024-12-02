/** @format */

import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";
import useSortedEvents from "../../Hooks/UseSortedEvents/useSortedEvents";
import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
	const { sortedEvents, error } = useSortedEvents();
	const [type, setType] = useState();
	const [currentPage, setCurrentPage] = useState(1);

	// Filter events by selected type.
	const filteredEvents = (
		(!type
			? sortedEvents
			: sortedEvents.filter((event) => event.type === type)) || []
	) // Filter events by selected type
		.filter((event, index) => {
			if (
				(currentPage - 1) * PER_PAGE <= index &&
				PER_PAGE * currentPage > index
			) {
				return true;
			}
			return false;
		});

	const changeType = (evtType) => {
		setCurrentPage(1);
		setType(evtType);
	};
	const pageNumber = Math.floor((filteredEvents?.length || 0) / PER_PAGE) + 1;
	const typeList = new Set(sortedEvents.map((event) => event.type));
	return (
		<>
			{error && <div>An error occured</div>}
			{sortedEvents.length === 0 ? (
				"loading"
			) : (
				<>
					<h3 className="SelectTitle">Catégories</h3>
					<Select
						name="eventType" // Add a name
						selection={Array.from(typeList)}
						onChange={(value) => (value ? changeType(value) : changeType(null))}
					/>
					<div id="events" className="ListContainer">
						{filteredEvents.map((event) => (
							<Modal key={event.id} Content={<ModalEvent event={event} />}>
								{({ setIsOpened }) => (
									<EventCard
										onClick={() => setIsOpened(true)}
										imageSrc={event.cover}
										title={event.title}
										date={new Date(event.date)}
										label={event.type}
									/>
								)}
							</Modal>
						))}
					</div>
					<div className="Pagination">
						{[...Array(pageNumber || 0)].map((_, n) => (
							// eslint-disable-next-line react/no-array-index-key
							<a key={n} href="#events" onClick={() => setCurrentPage(n + 1)}>
								{n + 1}
							</a>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default EventList;
