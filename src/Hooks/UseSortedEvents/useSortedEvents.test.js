/** @format */

// src/hooks/__tests__/useSortedEvents.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import useSortedEvents from "./useSortedEvents";
import { useData } from "../../contexts/DataContext";
// Mock de useData
jest.mock("../../contexts/DataContext", () => ({
	useData: jest.fn(),
}));

// Composant de test qui utilise le hook
const TestComponent = () => {
	const { sortedEvents, error } = useSortedEvents();

	if (error) {
		return <div>Erreur: {error.message}</div>;
	}

	if (!sortedEvents) {
		return <div>Chargement...</div>;
	}

	return (
		<ul data-testid="events-list">
			{sortedEvents.map((event) => (
				<li key={event.id}>
					{event.title} - {event.date}
				</li>
			))}
		</ul>
	);
};

describe("useSortedEvents", () => {
	it("trie les événements par date décroissante", () => {
		const mockEvents = [
			{ id: 1, title: "Event 1", date: "2023-09-01T10:00:00Z" },
			{ id: 2, title: "Event 2", date: "2023-10-01T10:00:00Z" },
			{ id: 3, title: "Event 3", date: "2023-08-01T10:00:00Z" },
		];

		useData.mockReturnValue({
			data: { events: mockEvents },
			error: null,
		});

		render(<TestComponent />);

		const listItems = screen.getAllByRole("listitem");
		expect(listItems).toHaveLength(3);
		expect(listItems[0]).toHaveTextContent("Event 2 - 2023-10-01T10:00:00Z");
		expect(listItems[1]).toHaveTextContent("Event 1 - 2023-09-01T10:00:00Z");
		expect(listItems[2]).toHaveTextContent("Event 3 - 2023-08-01T10:00:00Z");
	});

	it("gère les erreurs", () => {
		useData.mockReturnValue({
			data: null,
			error: new Error("Erreur de chargement"),
		});

		render(<TestComponent />);

		expect(
			screen.getByText(/Erreur: Erreur de chargement/i)
		).toBeInTheDocument();
	});

	it("retourne un tableau vide si l'entrée est undefined", () => {
		useData.mockReturnValue({
			data: undefined,
			error: null,
		});

		render(<TestComponent />);

		expect(screen.queryByTestId("events-list")).toBeInTheDocument();
		expect(screen.getByTestId("events-list").children).toHaveLength(0);
	});

	it("retourne un tableau vide si l'entrée est null", () => {
		useData.mockReturnValue({
			data: null,
			error: null,
		});

		render(<TestComponent />);

		expect(screen.queryByTestId("events-list")).toBeInTheDocument();
		expect(screen.getByTestId("events-list").children).toHaveLength(0);
	});

	it("ignore les éléments sans la propriété date", () => {
		const mockEvents = [
			{ id: 1, title: "Event 1", date: "2023-09-01T10:00:00Z" },
			{ id: 2, title: "Event 2" }, // Pas de date
			{ id: 3, title: "Event 3", date: "2023-08-01T10:00:00Z" },
		];

		useData.mockReturnValue({
			data: { events: mockEvents },
			error: null,
		});

		render(<TestComponent />);

		const listItems = screen.getAllByRole("listitem");
		expect(listItems).toHaveLength(3);
		expect(listItems[0]).toHaveTextContent("Event 1 - 2023-09-01T10:00:00Z");
		expect(listItems[1]).toHaveTextContent("Event 3 - 2023-08-01T10:00:00Z");
		expect(listItems[2]).toHaveTextContent("Event 2");
	});
});
