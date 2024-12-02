/** @format */

import { render, screen } from "@testing-library/react";
import Home from "./index";
import useSortedEvents from "../../Hooks/UseSortedEvents/useSortedEvents";

// Mock du hook useSortedEvents
jest.mock("../../Hooks/UseSortedEvents/useSortedEvents", () => ({
	__esModule: true,
	default: jest.fn(),
}));

describe("When Form is created", () => {
	beforeEach(() => {
		// Configuration par défaut du mock
		useSortedEvents.mockReturnValue({
			sortedEvents: [
				{
					id: 1,
					title: "Last Event",
					date: "2023-09-01T10:00:00Z",
					type: "Type A",
					cover: "cover1.jpg",
				},
			],
			error: null,
		});
	});

	it("a list of fields card is displayed", async () => {
		render(<Home />);

		await screen.findByText("Email");
		await screen.findByText("Nom");
		await screen.findByText("Prénom");
		await screen.findByText("Personel / Entreprise");
	});
});

describe("When a page is created", () => {
	it("a list of events is displayed", async () => {
		useSortedEvents.mockReturnValue({
			sortedEvents: [
				{
					id: 1,
					title: "Event Test",
					date: "2023-09-01T10:00:00Z",
					type: "Type A",
					cover: "cover1.jpg",
				},
			],
			error: null,
		});

		render(<Home />);

		// Utiliser findByRole pour cibler spécifiquement le titre h2
		const eventsTitle = await screen.findByRole("heading", {
			name: "Nos réalisations",
			level: 2,
		});
		expect(eventsTitle).toBeInTheDocument();
	});

	it("a list of people is displayed", async () => {
		useSortedEvents.mockReturnValue({
			sortedEvents: [
				{
					id: 1,
					title: "Event Test",
					date: "2023-09-01T10:00:00Z",
					type: "Type A",
					cover: "cover1.jpg",
				},
			],
			error: null,
		});

		render(<Home />);

		const peopleTitle = await screen.findByRole("heading", {
			name: "Notre équipe",
			level: 2,
		});
		expect(peopleTitle).toBeInTheDocument();

		const samiraElement = await screen.findByText("Samira");
		expect(samiraElement).toBeInTheDocument();
	});

	it("a footer is displayed", async () => {
		useSortedEvents.mockReturnValue({
			sortedEvents: [
				{
					id: 1,
					title: "Event Test",
					date: "2023-09-01T10:00:00Z",
					type: "Type A",
					cover: "cover1.jpg",
				},
			],
			error: null,
		});

		render(<Home />);

		const contactTitle = await screen.findByRole("heading", {
			name: "Contactez-nous",
			level: 3,
		});
		expect(contactTitle).toBeInTheDocument();

		const phoneNumber = await screen.findByText("01 23 45 67 89");
		expect(phoneNumber).toBeInTheDocument();
	});

	it("an event card with the last event is displayed", async () => {
		const lastEvent = {
			id: 1,
			title: "Last Event",
			date: "2023-09-01T10:00:00Z",
			type: "Type A",
			cover: "cover1.jpg",
		};

		useSortedEvents.mockReturnValue({
			sortedEvents: [lastEvent],
			error: null,
		});

		render(<Home />);

		const lastEventTitle = await screen.findByRole("heading", {
			name: "Notre dernière prestation",
			level: 3,
		});
		expect(lastEventTitle).toBeInTheDocument();

		// Utiliser getAllByText et vérifier le premier élément
		const eventTitles = await screen.findAllByText("Last Event");
		expect(eventTitles[0]).toBeInTheDocument();
	});

	it("displays loading state when no events", () => {
		useSortedEvents.mockReturnValue({
			sortedEvents: [],
			error: null,
		});

		render(<Home />);
		expect(screen.getByText("Chargement...")).toBeInTheDocument();
	});

	it("displays error message when error occurs", () => {
		useSortedEvents.mockReturnValue({
			sortedEvents: [],
			error: new Error("Test error"),
		});

		render(<Home />);
		expect(screen.getByText(/Une erreur s'est produite/)).toBeInTheDocument();
	});
});
