/** @format */

// hooks/useSortedEvents.js

import { useMemo } from "react";
import sortEventsByDateDesc from "../../Utils/SortEvents/sortEvents";
import { useData } from "../../contexts/DataContext";

/**
 * Hook personnalisé pour obtenir les événements triés par date décroissante.
 *
 * @returns {Object} - Contient les événements triés et les éventuelles erreurs.
 */
const useSortedEvents = () => {
	const { data, error } = useData();

	const sortedEvents = useMemo(
		() => sortEventsByDateDesc(data?.events || []),
		[data]
	);

	return { sortedEvents, error };
};

export default useSortedEvents;
