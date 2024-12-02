/** @format */

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./index";

describe("When Events is created", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("a list of event card is displayed", async () => {
		render(<Form />);
		await screen.findByText("Email");
		await screen.findByText("Nom");
		await screen.findByText("Prénom");
		await screen.findByText("Personel / Entreprise");
	});

	it("the success message is displayed upon successful submission", async () => {
		const onSuccessMock = jest.fn();
		const onErrorMock = jest.fn();
		render(<Form onSuccess={onSuccessMock} onError={onErrorMock} />);

		fireEvent.change(screen.getByTestId("name"), { target: { value: "John" } });
		fireEvent.change(screen.getByTestId("email"), {
			target: { value: "john@example.com" },
		});
		fireEvent.click(screen.getByText("Envoyer"));

		expect(screen.getByText("En cours")).toBeDisabled();
		await waitFor(() => expect(onSuccessMock).toHaveBeenCalled());
		expect(screen.getByText("Envoyer")).toBeEnabled();
	});

	it("does not submit the form if required fields are missing", async () => {
		const onSuccessMock = jest.fn();
		const onErrorMock = jest.fn();
		render(<Form onSuccess={onSuccessMock} onError={onErrorMock} />);

		// Laisser le champ 'name' vide
		fireEvent.change(screen.getByTestId("email"), {
			target: { value: "john@example.com" },
		});
		fireEvent.click(screen.getByText("Envoyer"));

		await waitFor(() => {
			expect(onSuccessMock).not.toHaveBeenCalled();
			expect(onErrorMock).not.toHaveBeenCalled();
		});
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
