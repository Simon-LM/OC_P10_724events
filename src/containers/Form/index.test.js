/** @format */

import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";
// import { findByTestId } from "@testing-library/dom";

describe("When Events is created", () => {
	it("a list of event card is displayed", async () => {
		render(<Form />);
		await screen.findByText("Email");
		await screen.findByText("Nom");
		await screen.findByText("Prénom");
		await screen.findByText("Personel / Entreprise");
	});

	describe("and a click is triggered on the submit button", () => {
		it("the success action is called", async () => {
			const onSuccess = jest.fn();
			render(<Form onSuccess={onSuccess} />);
			fireEvent(
				await screen.findByTestId("button-test-id"),
				new MouseEvent("click", {
					cancelable: true,
					bubbles: true,
				})
			);
			await screen.findByText("En cours");
			await screen.findByText("Envoyer");
			expect(onSuccess).toHaveBeenCalled();
		});
	});
	// Ensure required fields are name, email, and message
	it("should have the required attribute on the email field", () => {
		const { getByTestId } = render(<Form />);

		const nameField = getByTestId("name");
		expect(nameField).toHaveAttribute("required");
		const emailField = getByTestId("email");
		expect(emailField).toHaveAttribute("required");
		const messageField = getByTestId("message");
		expect(messageField).toHaveAttribute("required");
	});
});
