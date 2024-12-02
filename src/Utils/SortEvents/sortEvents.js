/**
 * Trie les événements par date décroissante.
 *
 * @format
 * @param {Array} events - Liste des événements à trier.
 * @returns {Array} - Événements triés.
 */

// const sortEventsByDateDesc = (events) =>
// 	[...events].sort((a, b) => new Date(b.date) - new Date(a.date));

// export default sortEventsByDateDesc;

const sortEventsByDateDesc = (events) => {
	if (!Array.isArray(events)) return [];

	return [...events].sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		const validA = !Number.isNaN(dateA.getTime());
		const validB = !Number.isNaN(dateB.getTime());

		if (validA && validB) {
			return dateB - dateA; // Dates valides, tri décroissant
		}
		if (validA) {
			return -1; // a est valide, b ne l'est pas, a vient avant
		}
		if (validB) {
			return 1; // b est valide, a ne l'est pas, b vient avant
		}
		return 0; // Aucune des deux dates n'est valide, ordre inchangé
	});
};

export default sortEventsByDateDesc;
