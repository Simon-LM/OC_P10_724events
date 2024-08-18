/** @format */

// import { render, screen } from "@testing-library/react";
// import Slider from "./index";
// // import { DataProvider } from "../../contexts/DataContext";
// // , fireEvent, waitFor
// jest.mock("../../contexts/DataContext", () => ({
// 	useData: () => ({
// 		data: {
// 			focus: [
// 				{
// 					id: 1,
// 					title: "World economic forum",
// 					description:
// 						"Oeuvre à la coopération entre le secteur public et le privé.",
// 					date: "2022-02-29T20:28:45.744Z",
// 					cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
// 				},
// 				{
// 					id: 2,
// 					title: "World Gaming Day",
// 					description: "Evenement mondial autour du gaming",
// 					date: "2022-03-29T20:28:45.744Z",
// 					cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
// 				},
// 				{
// 					id: 3,
// 					title: "World Farming Day",
// 					description: "Evenement mondial autour de la ferme",
// 					date: "2022-01-29T20:28:45.744Z",
// 					cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
// 				},
// 			],
// 		},
// 	}),
// }));

// describe("When slider is created", () => {
// // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // //
// it("a list card is displayed", async () => {
// 	window.console.error = jest.fn();
// 	api.loadData = jest.fn().mockReturnValue(dataM);
// 	render(
// 		<DataProvider>
// 			<Slider />
// 		</DataProvider>
// 	);
// 	await screen.findByText("World economic forum");
// 	await screen.findByText("janvier");
// 	await screen.findByText(
// 		"Oeuvre à la coopération entre le secteur public et le privé."
// 	);
// });
// // // // // // // // // // // // // // // // // // // // // // // //
// it("a list card is displayed", async () => {
// 	window.console.error = jest.fn();
// 	// Pas besoin de DataProvider ou api.loadData ici
// 	render(<Slider />);
// 	// Vérifier que les éléments sont bien affichés
// 	await screen.findByText("World economic forum");
// 	await screen.findByText("janvier");
// 	await screen.findByText(
// 		"Oeuvre à la coopération entre le secteur public et le privé."
// 	);
// });
// // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // //
// it("renders slider component without errors", async () => {
// 	window.console.error = jest.fn();
// 	render(<Slider />);
// 	// Verify that the slider is rendered
// 	expect(screen.getByTestId("slider")).toBeInTheDocument();
// });
// Verifies that clicking a radio button changes the displayed card.
// it("should change displayed card when clicking radio button", async () => {
// 	const { getByTestId, findAllByTestId } = render(<Slider />);
// 	const sliderElement = getByTestId("slider");
// 	expect(sliderElement).toBeInTheDocument();
// 	const radioButtons = await findAllByTestId("slider__buttons");
// 	fireEvent.click(radioButtons[1]);
// 	await waitFor(() =>
// 		expect(
// 			sliderElement.querySelector(".SlideCard--display")
// 		).toBeInTheDocument()
// 	);
// });
// });
// // // // // // // // // // // // // // // // // // //
// // // // // // //  ACESSIBILITY // // // // // // //
// // // // // // // // // // // // // // // // // //
// a
// it("should have aria-labels for the radio buttons", () => {
// 	window.console.error = jest.fn();
// 	render(<Slider />);
// 	const radioButtons = screen.getAllByTestId("slider__buttons");
// 	radioButtons.forEach((button) => {
// 		expect(button).toHaveAttribute("aria-label");
// 		expect(button.getAttribute("aria-label")).not.toBe("");
// 	});
// });
// it("should have correct roles for interactive elements", () => {
// 	window.console.error = jest.fn();
// 	render(<Slider />);
// 	const radioButtons = screen.getAllByRole("button");
// 	expect(radioButtons.length).toBeGreaterThan(0);
// 	radioButtons.forEach((button) => {
// 		expect(button).toBeInTheDocument();
// 	});
// });
// it("should allow keyboard navigation through the radio buttons", async () => {
// 	render(<Slider />);
// 	const radioButtons = screen.getAllByTestId("slider__buttons");
// 	expect(radioButtons.length).toBeGreaterThan(0);
// 	radioButtons.forEach((button, index) => {
// 		fireEvent.keyDown(button, { key: "Tab" });
// 		expect(button).toHaveFocus();
// 		if (index < radioButtons.length - 1) {
// 			fireEvent.keyDown(button, { key: "ArrowRight" });
// 			expect(radioButtons[index + 1]).toHaveFocus();
// 		}
// 	});
// });
// it("should visually indicate focus on radio buttons", () => {
// 	render(<Slider />);
// 	const radioButtons = screen.getAllByTestId("slider__buttons");
// 	fireEvent.focus(radioButtons[0]);
// 	expect(radioButtons[0]).toHaveClass("focus-visible"); // Assuming a class is added for focused elements
// });
// });

// // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // // //
// // // // // // // // // // // // // //

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Slider from "./index";

// Mocking the useData hook
jest.mock("../../contexts/DataContext", () => ({
	useData: () => ({
		data: {
			focus: [
				{
					id: 1,
					title: "World economic forum",
					description:
						"Oeuvre à la coopération entre le secteur public et le privé.",
					date: "2022-02-29T20:28:45.744Z",
					cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
				},
				{
					id: 2,
					title: "World Gaming Day",
					description: "Evenement mondial autour du gaming",
					date: "2022-03-29T20:28:45.744Z",
					cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
				},
				{
					id: 3,
					title: "World Farming Day",
					description: "Evenement mondial autour de la ferme",
					date: "2022-01-29T20:28:45.744Z",
					cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
				},
			],
		},
	}),
}));

describe("Slider Component", () => {
	// Verify that the slider is displayed and the content is rendered correctly
	it("should display a list card with correct content", async () => {
		window.console.error = jest.fn();
		render(<Slider />);

		// Check for content of the first slide
		await screen.findByText("World economic forum");
		await screen.findByText("janvier"); // Assuming `getMonth` converts correctly
		await screen.findByText(
			"Oeuvre à la coopération entre le secteur public et le privé."
		);
	});

	// Check that the slider renders without errors
	it("renders slider component without errors", async () => {
		window.console.error = jest.fn();
		render(<Slider />);

		expect(screen.getByTestId("slider")).toBeInTheDocument();
	});

	// Verify that clicking a pagination button changes the displayed card
	it("should change displayed card when clicking pagination button", async () => {
		render(<Slider />);

		const sliderElement = screen.getByTestId("slider");
		expect(sliderElement).toBeInTheDocument();

		const paginationButtons = await screen.findAllByTestId("slider__buttons");
		fireEvent.click(paginationButtons[2]);
		await waitFor(() =>
			expect(
				sliderElement.querySelector(".SlideCard--display")
			).toHaveTextContent("World Gaming Day")
		);
	});

	// Accessibility test: Check that all images have an alt attribute
	it("should have an alt attribute on all images", () => {
		render(<Slider />);

		const images = screen.getAllByRole("img");
		images.forEach((img) => {
			expect(img).toHaveAttribute("alt");
			expect(img.getAttribute("alt")).not.toBe("");
		});
	});

	// Accessibility test: Check that buttons have aria-labels
	it("should have aria-labels for the pagination buttons", () => {
		render(<Slider />);

		const paginationButtons = screen.getAllByTestId("slider__buttons");
		paginationButtons.forEach((button) => {
			expect(button).toHaveAttribute("aria-label");
			expect(button.getAttribute("aria-label")).not.toBe("");
		});
	});

	// Check for correct roles in the interactive elements
	it("should have correct roles for interactive elements", () => {
		render(<Slider />);

		const paginationButtons = screen.getAllByRole("button");
		expect(paginationButtons.length).toBeGreaterThan(0);

		paginationButtons.forEach((button) => {
			expect(button).toBeInTheDocument();
		});
	});

	test("should apply 'focus-visible' class when a button receives focus", () => {
		render(<Slider />);

		// Obtenir tous les boutons de pagination
		const radioButtons = screen.getAllByTestId("slider__buttons");

		// Simuler le focus sur le premier bouton
		fireEvent.focus(radioButtons[0]);

		// Vérifier que le premier bouton a la classe 'focus-visible'
		expect(radioButtons[0]).toHaveClass("focusVisible");

		// Simuler le focus sur le deuxième bouton
		fireEvent.focus(radioButtons[1]);

		// Vérifier que le deuxième bouton a la classe 'focus-visible'
		expect(radioButtons[1]).toHaveClass("focusVisible");

		// Optionnel : vérifier que le premier bouton n'a plus la classe 'focus-visible'
		expect(radioButtons[0]).not.toHaveClass("focusVisible");
	});
	it("should allow keyboard navigation and apply focus-visible class on buttons", async () => {
		render(<Slider />);

		const paginationButtons = screen.getAllByTestId("slider__buttons");
		expect(paginationButtons.length).toBeGreaterThan(0);

		// Focus on the first button
		fireEvent.focus(paginationButtons[0]);
		expect(paginationButtons[0]).toHaveClass("focusVisible");

		// Simulate navigation through the buttons
		paginationButtons.forEach((button, index) => {
			if (index < paginationButtons.length - 1) {
				fireEvent.keyDown(button, { key: "Tab" });
				fireEvent.blur(button);
				fireEvent.focus(paginationButtons[index + 1]);
				expect(paginationButtons[index + 1]).toHaveClass("focusVisible");
			}
		});
		fireEvent.keyUp(paginationButtons[paginationButtons.length - 1], {
			key: "Maj+Tab",
		});
		fireEvent.blur(paginationButtons[paginationButtons.length - 1]);
		fireEvent.focus(paginationButtons[0]);
		expect(paginationButtons[0]).toHaveClass("focusVisible");
	});
});
