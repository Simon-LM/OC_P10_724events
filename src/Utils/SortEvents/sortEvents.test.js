/** @format */

// src/utils/sortEvents.test.js

import sortEventsByDateDesc from "./sortEvents";

describe("sortEventsByDateDesc", () => {
	it("devrait trier les événements par date décroissante", () => {
		const events = [
			{ id: 1, date: "2023-09-01T10:00:00Z" },
			{ id: 2, date: "2023-10-01T10:00:00Z" },
			{ id: 3, date: "2023-08-01T10:00:00Z" },
		];

		const sorted = sortEventsByDateDesc(events);

		expect(sorted).toEqual([
			{ id: 2, date: "2023-10-01T10:00:00Z" },
			{ id: 1, date: "2023-09-01T10:00:00Z" },
			{ id: 3, date: "2023-08-01T10:00:00Z" },
		]);
	});

	it("ne modifie pas le tableau d'origine", () => {
		const events = [
			{ id: 1, date: "2023-09-01T10:00:00Z" },
			{ id: 2, date: "2023-10-01T10:00:00Z" },
		];

		const eventsCopy = [...events];
		sortEventsByDateDesc(events);

		expect(events).toEqual(eventsCopy);
	});

	it("retourne un tableau vide si l'entrée est vide", () => {
		const events = [];
		const sorted = sortEventsByDateDesc(events);
		expect(sorted).toEqual([]);
	});

	it("retourne un tableau avec un seul événement", () => {
		const events = [{ id: 1, date: "2023-09-01T10:00:00Z" }];
		const sorted = sortEventsByDateDesc(events);
		expect(sorted).toEqual([{ id: 1, date: "2023-09-01T10:00:00Z" }]);
	});

	it("trie correctement les événements avec des dates identiques", () => {
		const events = [
			{ id: 1, date: "2023-09-01T10:00:00Z" },
			{ id: 2, date: "2023-09-01T10:00:00Z" },
			{ id: 3, date: "2023-08-01T10:00:00Z" },
		];

		const sorted = sortEventsByDateDesc(events);

		expect(sorted).toEqual([
			{ id: 1, date: "2023-09-01T10:00:00Z" },
			{ id: 2, date: "2023-09-01T10:00:00Z" },
			{ id: 3, date: "2023-08-01T10:00:00Z" },
		]);
	});

	it("gère les dates invalides en les plaçant à la fin", () => {
		const events = [
			{ id: 1, date: "invalid-date" },
			{ id: 2, date: "2023-10-01T10:00:00Z" },
			{ id: 3, date: "2023-08-01T10:00:00Z" },
		];

		const sorted = sortEventsByDateDesc(events);

		expect(sorted).toEqual([
			{ id: 2, date: "2023-10-01T10:00:00Z" },
			{ id: 3, date: "2023-08-01T10:00:00Z" },
			{ id: 1, date: "invalid-date" },
		]);
	});

	it("retourne un tableau vide si l'entrée est undefined", () => {
		const sorted = sortEventsByDateDesc(undefined);
		expect(sorted).toEqual([]);
	});

	it("retourne un tableau vide si l'entrée est null", () => {
		const sorted = sortEventsByDateDesc(null);
		expect(sorted).toEqual([]);
	});

	it("ignore les éléments sans la propriété date", () => {
		const events = [
			{ id: 1, date: "2023-09-01T10:00:00Z" },
			{ id: 2 }, // Pas de date
			{ id: 3, date: "2023-08-01T10:00:00Z" },
		];

		const sorted = sortEventsByDateDesc(events);

		expect(sorted).toEqual([
			{ id: 1, date: "2023-09-01T10:00:00Z" },
			{ id: 3, date: "2023-08-01T10:00:00Z" },
			{ id: 2 },
		]);
	});
});
