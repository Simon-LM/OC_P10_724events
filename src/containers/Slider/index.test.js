/** @format */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Slider from "./index";
// import { DataProvider } from "../../contexts/DataContext";

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

// const dataM = {
// 	focus: [
// 		{
// 			title: "World economic forum",
// 			description:
// 				"Oeuvre à la coopération entre le secteur public et le privé.",
// 			date: "2022-02-29T20:28:45.744Z",
// 			cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
// 		},
// 		{
// 			title: "World Gaming Day",
// 			description: "Evenement mondial autour du gaming",
// 			date: "2022-03-29T20:28:45.744Z",
// 			cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
// 		},
// 		{
// 			title: "World Farming Day",
// 			description: "Evenement mondial autour de la ferme",
// 			date: "2022-01-29T20:28:45.744Z",
// 			cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
// 		},
// 	],
// };
describe("When slider is created", () => {
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
	it("a list card is displayed", async () => {
		window.console.error = jest.fn();

		// Pas besoin de DataProvider ou api.loadData ici
		render(<Slider />);

		// Vérifier que les éléments sont bien affichés
		await screen.findByText("World economic forum");
		await screen.findByText("janvier");
		await screen.findByText(
			"Oeuvre à la coopération entre le secteur public et le privé."
		);
	});
	// // // // // // // // // // // // // // // // // // //
	// // // // // // // // // // // // // // // // // // //

	it("renders slider component without errors", async () => {
		window.console.error = jest.fn();
		render(<Slider />);
		// Verify that the slider is rendered
		expect(screen.getByTestId("slider")).toBeInTheDocument();
	});

	// Verifies that clicking a radio button changes the displayed card.
	it("should change displayed card when clicking radio button", async () => {
		const { getByTestId, findAllByTestId } = render(<Slider />);
		const sliderElement = getByTestId("slider");
		expect(sliderElement).toBeInTheDocument();

		const radioButtons = await findAllByTestId("slider__buttons");
		fireEvent.click(radioButtons[1]);
		await waitFor(() =>
			expect(
				sliderElement.querySelector(".SlideCard--display")
			).toBeInTheDocument()
		);
	});
	// });

	// // // // // // // // // // // // // // // // // // //
	// // // // // // //  ACESSIBILITY // // // // // // //
	// // // // // // // // // // // // // // // // // //

	it("should have an alt attribute on all images", () => {
		window.console.error = jest.fn();
		render(<Slider />);
		const images = screen.getAllByRole("img");
		images.forEach((img) => {
			expect(img).toHaveAttribute("alt");
			expect(img.getAttribute("alt")).not.toBe("");
		});
	});

	it("should have aria-labels for the radio buttons", () => {
		render(<Slider />);

		const radioButtons = screen.getAllByTestId("slider__buttons");
		radioButtons.forEach((button) => {
			expect(button).toHaveAttribute("aria-label");
			expect(button.getAttribute("aria-label")).not.toBe("");
		});
	});

	it("should have correct roles for interactive elements", () => {
		render(<Slider />);

		const radioButtons = screen.getAllByRole("radio");
		expect(radioButtons.length).toBeGreaterThan(0);

		radioButtons.forEach((button) => {
			expect(button).toBeInTheDocument();
		});
	});

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
});
