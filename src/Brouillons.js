/** @format */

// import { useEffect, useState, useRef, useMemo } from "react";
// import { useData } from "../../contexts/DataContext";
// import { getMonth } from "../../helpers/Date";
// import "./style.scss";

// const Slider = () => {
// 	const { data } = useData();
// 	const byDateDesc = useMemo(
// 		() =>
// 			data?.focus?.sort((evtA, evtB) =>
// 				new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
// 			) || [],
// 		[data]
// 	);

// 	const [index, setIndex] = useState(0);
// 	const timeoutRef = useRef(null);
// 	const radioRefs = useRef([]);

// 	const nextCard = () => {
// 		if (timeoutRef.current) {
// 			clearTimeout(timeoutRef.current);
// 		}
// 		if (byDateDesc.length > 0) {
// 			timeoutRef.current = setTimeout(() => {
// 				setIndex((prevIndex) => (prevIndex + 1) % byDateDesc.length);
// 			}, 5000);
// 		}
// 	};

// 	const handleRadioChange = (idx) => {
// 		if (timeoutRef.current) {
// 			clearTimeout(timeoutRef.current);
// 		}
// 		setIndex(idx);
// 	};

// 	useEffect(() => {
// 		if (byDateDesc.length > 0) {
// 			nextCard();
// 		}
// 		return () => {
// 			if (timeoutRef.current) {
// 				clearTimeout(timeoutRef.current);
// 			}
// 		};
// 	}, [index, byDateDesc.length]);

// 	useEffect(() => {
// 		// Assure que le bouton radio correspondant est focus après chaque changement
// 		if (radioRefs.current[index]) {
// 			radioRefs.current[index].focus();
// 		}
// 	}, [index]);

// 	return (
// 		<div className="SlideCardList" data-testid="slider">
// 			{byDateDesc.map((event, idx) => (
// 				<div
// 					key={event.title || idx}
// 					className={`SlideCard SlideCard--${
// 						index === idx ? "display" : "hide"
// 					}`}
// 					data-testid="slide-card">
// 					<img src={event.cover} alt={event.title} />
// 					<div className="SlideCard__descriptionContainer">
// 						<div className="SlideCard__description">
// 							<h3>{event.title}</h3>
// 							<p>{event.description}</p>
// 							<div>{getMonth(new Date(event.date))}</div>
// 						</div>
// 					</div>
// 				</div>
// 			))}

// 			{byDateDesc.length > 0 && (
// 				<div className="SlideCard__paginationContainer">
// 					<div className="SlideCard__pagination" role="radiogroup">
// 						{byDateDesc.map((event, idx) => (
// 							<input
// 								data-testid="slider__buttons"
// 								key={event.id}
// 								type="radio"
// 								name="radio-button"
// 								onChange={() => handleRadioChange(idx)}
// 								checked={index === idx}
// 								aria-checked={index === idx}
// 								// role="radio"
// 								ref={(el) => {
// 									radioRefs.current[idx] = el;
// 								}}
// 							/>
// 						))}
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default Slider;

// Explications :
// Boucle de génération des boutons radio : Les boutons radio sont générés dynamiquement dans une boucle .map(), ce qui garantit qu'ils sont tous correctement rendus et ordonnés dans le DOM.

// Références (refs) pour les boutons radio : Chaque bouton radio a une référence (ref) associée qui est stockée dans radioRefs.current. Cela permet de contrôler le focus après chaque changement de carte.

// Focus géré par useEffect : Après chaque changement de carte (après chaque mise à jour de index), l'effet useEffect assure que le bouton radio approprié reçoit le focus, ce qui devrait permettre une navigation fluide avec le clavier.

// role="radiogroup" et role="radio" : Ces attributs ARIA améliorent l'accessibilité en structurant correctement le groupe de boutons radio.

// Points de vérification :
// Navigation par clavier : Assurez-vous que vous pouvez naviguer entre les boutons radio en utilisant la touche Tab.
// Focus : Le focus devrait être automatiquement déplacé sur le bouton radio sélectionné après chaque changement de carte.
// Temps de transition : Si vous souhaitez tester avec un temps de transition plus court (par exemple, 4 secondes), ajustez la valeur dans setTimeout() pour voir si cela affecte la navigation et le focus.
// Avec ces ajustements, la navigation au clavier devrait être plus fiable, et vous pourrez tester son fonctionnement en jouant avec le composant dans le navigateur. Si cela ne fonctionne toujours pas, il pourrait être utile de déboguer avec des outils comme React DevTools pour vérifier l'état du composant et les références des éléments lors des mises à jour.

// // // // // // // // // // // // //
// // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // //

// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import Slider from "./index";

// // Mocking the useData hook
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

// describe("Slider Component", () => {
// 	// Verify that the slider is displayed and the content is rendered correctly
// 	it("should display a list card with correct content", async () => {
// 		window.console.error = jest.fn();
// 		render(<Slider />);

// 		// Check for content of the first slide
// 		await screen.findByText("World economic forum");
// 		await screen.findByText("janvier"); // Assuming `getMonth` converts correctly
// 		await screen.findByText(
// 			"Oeuvre à la coopération entre le secteur public et le privé."
// 		);
// 	});

// 	// Check that the slider renders without errors
// 	it("renders slider component without errors", async () => {
// 		window.console.error = jest.fn();
// 		render(<Slider />);

// 		expect(screen.getByTestId("slider")).toBeInTheDocument();
// 	});

// 	// Verify that clicking a pagination button changes the displayed card
// 	it("should change displayed card when clicking pagination button", async () => {
// 		render(<Slider />);

// 		const sliderElement = screen.getByTestId("slider");
// 		expect(sliderElement).toBeInTheDocument();

// 		const paginationButtons = await screen.findAllByTestId("slider__buttons");
// 		fireEvent.click(paginationButtons[1]);
// 		await waitFor(() =>
// 			expect(
// 				sliderElement.querySelector(".SlideCard--display h3")
// 			).toHaveTextContent("World Gaming Day")
// 		);
// 	});

// 	// Accessibility test: Check that all images have an alt attribute
// 	it("should have an alt attribute on all images", () => {
// 		render(<Slider />);

// 		const images = screen.getAllByRole("img");
// 		images.forEach((img) => {
// 			expect(img).toHaveAttribute("alt");
// 			expect(img.getAttribute("alt")).not.toBe("");
// 		});
// 	});

// 	// Accessibility test: Check that buttons have aria-labels
// 	it("should have aria-labels for the pagination buttons", () => {
// 		render(<Slider />);

// 		const paginationButtons = screen.getAllByTestId("slider__buttons");
// 		paginationButtons.forEach((button) => {
// 			expect(button).toHaveAttribute("aria-label");
// 			expect(button.getAttribute("aria-label")).not.toBe("");
// 		});
// 	});

// 	// Check for correct roles in the interactive elements
// 	it("should have correct roles for interactive elements", () => {
// 		render(<Slider />);

// 		const paginationButtons = screen.getAllByRole("button");
// 		expect(paginationButtons.length).toBeGreaterThan(0);

// 		paginationButtons.forEach((button) => {
// 			expect(button).toBeInTheDocument();
// 		});
// 	});

// 	// Accessibility test: Verify keyboard navigation between pagination buttons
// 	it("should allow keyboard navigation through the pagination buttons", async () => {
// 		render(<Slider />);

// 		const paginationButtons = screen.getAllByTestId("slider__buttons");
// 		expect(paginationButtons.length).toBeGreaterThan(0);

// 		fireEvent.focus(paginationButtons[0]);
// 		expect(paginationButtons[0]).toHaveFocus();

// 		fireEvent.keyDown(paginationButtons[0], { key: "ArrowRight" });
// 		expect(paginationButtons[1]).toHaveFocus();

// 		fireEvent.keyDown(paginationButtons[1], { key: "ArrowRight" });
// 		expect(paginationButtons[2]).toHaveFocus();

// 		fireEvent.keyDown(paginationButtons[2], { key: "ArrowRight" });
// 		expect(paginationButtons[0]).toHaveFocus(); // Loop back to the first button
// 	});

// 	// Check for focus indication on pagination buttons
// 	it("should visually indicate focus on pagination buttons", () => {
// 		render(<Slider />);

// 		const paginationButtons = screen.getAllByTestId("slider__buttons");
// 		fireEvent.focus(paginationButtons[0]);
// 		expect(paginationButtons[0]).toHaveClass("focus-visible"); // Assuming a class is added for focused elements
// 	});
// });
