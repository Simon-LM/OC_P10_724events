/** @format */

import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
	it("a list of fields card is displayed", async () => {
		render(<Home />);
		await screen.findByText("Email");
		await screen.findByText("Nom");
		await screen.findByText("Prénom");
		await screen.findByText("Personel / Entreprise");
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

// // // // // // // // // // // // // // //

// import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// test('When Form is created and a click is triggered on the submit button, the success message is displayed', async () => {
//   render(<Form />);

//   // Simulez le clic sur le bouton de soumission
//   fireEvent.click(screen.getByRole('button', { name: /submit/i }));

//   // Attendez que le texte "En cours" apparaisse
//   await screen.findByText("En cours");

//   // Attendez que le message de succès appar avec une requête plus flexible
//   await waitFor(() => {
//     expect(screen.getByText((content, element) => {
//       return element.textContent.includes('Message envoyé');
//     })).toBeInTheDocument();
//   }, { timeout: 5000 }); // Augmentez le timeout si nécessaire
// });

// // // // // // // // // // // // //

describe("When a page is created", () => {
	it("a list of events is displayed", () => {
		// to implement
	});
	it("a list a people is displayed", () => {
		// to implement
	});
	it("a footer is displayed", () => {
		// to implement
	});
	it("an event card, with the last event, is displayed", () => {
		// to implement
	});
});
