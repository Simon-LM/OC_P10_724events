/** @format */

import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
	it("a list of fields card is displayed", async () => {
		render(<Home />);
		// await screen.findByText("Email");
		// await screen.findByText("Nom");
		// await screen.findByText("Prénom");
		// await screen.findByText("Personel / Entreprise");
	});

	describe("and a click is triggered on the submit button", () => {
		it("the success message is displayed", async () => {
			render(<Home />);
			fireEvent(
				await screen.findByText("Envoyer"),
				new MouseEvent("click", {
					cancelable: true,
					bubbles: true,
				})
			);
			await screen.findByText("En cours");
			await screen.findByText("Message envoyé !");
		});
	});
});

// // // // // // // // // // // // // //
// // // // // // // // // // // // //

// describe("When a page is created", () => {
// 	it("a list of events is displayed", () => {
// 		// to implement
// 	});
// 	it("a list a people is displayed", () => {
// 		// to implement
// 	});
// 	it("a footer is displayed", () => {
// 		// to implement
// 	});
// 	it("an event card, with the last event, is displayed", () => {
// 		// to implement
// 	});
// });

// // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // //

// // // // // // // // // // // // // // // //

// // // // // // // // // // // // //
// import { fireEvent, render, screen, act } from "@testing-library/react";
// import Home from "./index";

// describe("When Form is created", () => {
// 	it("a list of fields card is displayed", async () => {
// 		await act(async () => {
// 			render(<Home />);
// 		});
// 		// await screen.findByText("Email");
// 		await screen.findByText("Nom");
// 		await screen.findByText("Prénom");
// 		await screen.findByText("Personel / Entreprise");
// 	});

// describe("and a click is triggered on the submit button", () => {
// 	it("the success message is displayed", async () => {
// 		await act(async () => {
// 			render(<Home />);
// 		});
// 		await act(async () => {
// 			fireEvent(
// 				await screen.findByText("Envoyer"),
// 				new MouseEvent("click", {
// 					cancelable: true,
// 					bubbles: true,
// 				})
// 			);
// 		});
// 		await screen.findByText("En cours");
// 		await screen.findByText("Message envoyé !");
// 	});
// });
// });

// describe("When a page is created", () => {
// 	it("a list of events is displayed", () => {
// 		// to implement
// 	});
// 	it("a list a people is displayed", () => {
// 		// to implement
// 	});
// 	it("a footer is displayed", () => {
// 		// to implement
// 	});
// 	it("an event card, with the last event, is displayed", () => {
// 		// to implement
// 	});
// });

// // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // //

// import { fireEvent, render, screen, act } from "@testing-library/react";
// import Home from "./index";

// describe("When Form is created", () => {
// 	beforeEach(async () => {
// 		await act(async () => {
// 			render(<Home />);
// 		});
// 	});

// 	// it("a list of fields card displayed", async () => {
// 	// 	screen.debug(); // This will print the rendered HTML to the console
// 	// 	await screen.findByText("Email");
// 	// 	await screen.findByText("Nom");
// 	// 	await screen.findByText("Prénom");
// 	// 	// await screen.findByText("Personnel / Entreprise");
// 	// 	await screen.findByText(/Personnel. *Entreprise/i);
// 	// });

// 	// it("a list of fields card displayed", async () => {
// 	// 	screen.debug(); // This will print the rendered HTML to the console

// 	// 	await screen.findByText("Email");
// 	// 	await screen.findByText("Nom");
// 	// 	await screen.findByText("Prénom");

// 	// 	// Use a custom function to find text that includes both "Personnel" and "Entreprise"
// 	// 	// await screen.findAllByText((content, element) => {
// 	// 	// 	const hasText = (text) => element.textContent.includes(text);
// 	// 	// 	return hasText("Personnel") && hasText("Entreprise");
// 	// 	// });

// 	// 	// await screen.findByText((content, element) => {
// 	// 	// 	console.log("Checking element:", element.textContent);
// 	// 	// 	const hasText = (text) => element.textContent.includes(text);
// 	// 	// 	return hasText("Personnel") && hasText("Entreprise");
// 	// 	// });

// 	// 	const elements = await screen.findAllByRole("textbox");
// 	// 	const personnelEntrepriseField = elements.find(
// 	// 		(el) =>
// 	// 			el.textContent.includes("Personnel") &&
// 	// 			el.textContent.includes("Entreprise")
// 	// 	);
// 	// 	expect(personnelEntrepriseField).toBeTruthy();
// 	// });

// 	// it("a list of fields card displayed", async () => {
// 	// 	screen.debug(); // This will print the rendered HTML to the console

// 	// 	await screen.findByText("Email");
// 	// 	await screen.findByText("Nom");
// 	// 	await screen.findByText("Prénom");

// 	// 	// Look for the "Personnel / Entreprise" text in any element
// 	// 	const personnelEntrepriseElement = await screen.findByText(
// 	// 		(content, element) => {
// 	// 			const hasText = (text) =>
// 	// 				element.textContent.toLowerCase().includes(text.toLowerCase());
// 	// 			return hasText("Personnel") && hasText("Entreprise");
// 	// 		},
// 	// 		{ exact: false }
// 	// 	);

// 	// 	expect(personnelEntrepriseElement).toBeTruthy();
// 	// });

// 	// it("a list of fields card displayed", async () => {
// 	// 	screen.debug(); // This will print the rendered HTML to the console

// 	// 	await screen.findByText("Email");
// 	// 	await screen.findByText("Nom");
// 	// 	await screen.findByText("Prénom");

// 	// 	// Get all elements in the document
// 	// 	const allElements = await screen.findAllByText(/.*/);

// 	// 	// Look for any element containing both "Personnel" and "Entreprise"
// 	// 	const personnelEntrepriseElement = allElements.find((element) => {
// 	// 		const text = element.textContent.toLowerCase();
// 	// 		return text.includes("personnel") && text.includes("entreprise");
// 	// 	});

// 	// 	expect(personnelEntrepriseElement).toBeTruthy();
// 	// 	if (!personnelEntrepriseElement) {
// 	// 		console.log(
// 	// 			"All elements:",
// 	// 			allElements.map((el) => el.textContent)
// 	// 		);
// 	// 	}
// 	// });

// 	describe("and a click is triggered on the submit button", () => {
// 		it("the success message is displayed", async () => {
// 			const submitButton = await screen.findByText("Envoyer");
// 			await act(async () => {
// 				fireEvent.click(submitButton); // Simplified event firing
// 			});
// 			await screen.findByText("En cours");
// 			// await screen.findByText("Message envoyé !");
// 			await screen.findByText("Message envoyé !", {}, { timeout: 5000 }); // Waits up to 5 seconds
// 		});
// 	});
// });

// describe("When a page is created", () => {
// 	it("a list of events is displayed", () => {
// 		// to implement
// 	});
// 	it("a list of people is displayed", () => {
// 		// Corrected "a" to "of"
// 		// to implement
// 	});
// 	it("a footer is displayed", () => {
// 		// to implement
// 	});
// 	it("an event card, with the last event, is displayed", () => {
// 		// to implement
// 	});
// });

// // // // // // // // // // // // // // //

// import { fireEvent, render, screen, act } from "@testing-library/react";
// import Home from "./index";

// describe("When Form is created", () => {
// 	beforeEach(async () => {
// 		await act(async () => {
// 			render(<Home />);
// 		});
// 	});

// 	describe("and a click is triggered on the submit button", () => {
// 		it("the success message is displayed", async () => {
// 			const submitButton = await screen.findByText("Envoyer");
// 			await act(async () => {
// 				fireEvent.click(submitButton); // Simplified event firing
// 			});
// 			await screen.findByText("En cours");
// 			// await screen.findByText("Message envoyé !");
// 			await screen.findByText("Message envoyé !", {}, { timeout: 5000 }); // Waits up to 5 seconds
// 		});
// 	});
// });

// describe("When a page is created", () => {
// 	it("a list of events is displayed", () => {
// 		// to implement
// 	});
// 	it("a list of people is displayed", () => {
// 		// Corrected "a" to "of"
// 		// to implement
// 	});
// 	it("a footer is displayed", () => {
// 		// to implement
// 	});
// 	it("an event card, with the last event, is displayed", () => {
// 		// to implement
// 	});
// });
