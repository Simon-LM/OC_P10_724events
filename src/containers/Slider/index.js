/** @format */

import { useEffect, useState, useRef, useMemo } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
	const { data } = useData();
	const byDateDesc = useMemo(
		() =>
			data?.focus?.sort((evtA, evtB) =>
				new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
			) || [],
		[data]
	);

	const [index, setIndex] = useState(0);
	const [focusedIndex, setFocusedIndex] = useState(null);
	const timeoutRef = useRef(null);
	const radioRefs = useRef([]);

	const nextCard = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		if (byDateDesc.length > 0) {
			timeoutRef.current = setTimeout(() => {
				setIndex((prevIndex) => (prevIndex + 1) % byDateDesc.length);
			}, 5000);
		}
	};

	const handleRadioChange = (idx) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setIndex(idx);
	};

	const handleFocus = (idx) => {
		setFocusedIndex(idx);
	};

	const handleBlur = () => {
		setFocusedIndex(null);
	};

	useEffect(() => {
		if (byDateDesc.length > 0) {
			nextCard();
		}
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [index, byDateDesc.length]);

	return (
		<div className="SlideCardList" data-testid="slider">
			{byDateDesc.map((event, idx) => (
				<div
					key={event.title || idx}
					className={`SlideCard SlideCard--${
						index === idx ? "display" : "hide"
					}`}
					data-testid="slide-card">
					<img src={event.cover} alt="{event.title" />
					<div className="SlideCard__descriptionContainer">
						<div className="SlideCard__description">
							<h3>{event.title}</h3>
							<p>{event.description}</p>
							<div>{getMonth(new Date(event.date))}</div>
						</div>
					</div>
				</div>
			))}
			{byDateDesc.length > 0 && (
				<div className="SlideCard__paginationContainer">
					<div
						className="SlideCard__pagination"
						role="group"
						aria-label="Slide controls">
						{byDateDesc.map((event, idx) => (
							<button
								className={`SlideCard__paginationButton ${
									focusedIndex === idx ? "focusVisible" : ""
								}`}
								data-testid="slider__buttons"
								key={event.id}
								type="button"
								onClick={() => handleRadioChange(idx)}
								onFocus={() => handleFocus(idx)}
								onBlur={handleBlur}
								aria-pressed={index === idx}
								tabIndex={0}
								aria-label={`Slide ${idx + 1}`}
								ref={(el) => {
									radioRefs.current[idx] = el;
								}}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Slider;
