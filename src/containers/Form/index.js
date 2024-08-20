/** @format */

import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

const mockContactApi = () =>
	new Promise((resolve) => {
		setTimeout(resolve, 500);
	});

const Form = ({ onSuccess, onError }) => {
	const [sending, setSending] = useState(false);
	const sendContact = useCallback(
		async (evt) => {
			evt.preventDefault();
			setSending(true);
			// We try to call mockContactApi
			try {
				await mockContactApi();
				setSending(false);
				onSuccess(); // Add
			} catch (err) {
				setSending(false);
				onError(err);
			}
		},
		[onSuccess, onError]
	);
	return (
		<form onSubmit={sendContact}>
			<div className="row">
				<div className="col">
					<Field
						id="name-field"
						placeholder="Votre nom"
						label="Nom"
						data-testid="name"
						required
					/>
					<Field id="prenom-field" placeholder="Votre prénom" label="Prénom" />
					<Select
						name="typeSelection"
						selection={["Personel", "Entreprise"]}
						onChange={() => null}
						// onChange={(e) => setSelectedType(e.target.value)}
						label="Personel / Entreprise"
						type="large"
						required
						titleEmpty
					/>
					<Field
						id="email-field"
						// type="email"
						type={FIELD_TYPES.EMAIL} // Correct usage of type for email
						placeholder="Votre email"
						label="Email"
						data-testid="email"
						required
					/>
					<Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
						{sending ? "En cours" : "Envoyer"}
					</Button>
				</div>
				<div className="col">
					<Field
						id="message-field"
						placeholder="message"
						label="Message"
						data-testid="message"
						type={FIELD_TYPES.TEXTAREA}
						required
					/>
				</div>
			</div>
		</form>
	);
};

Form.propTypes = {
	onError: PropTypes.func,
	onSuccess: PropTypes.func,
};

Form.defaultProps = {
	onError: () => null,
	onSuccess: () => null,
};

export default Form;

// // // // // // // // // // // // // // // // // // //

// const Form = ({ onSuccess, onError }) => {
// 	const [sending, setSending] = useState(false);
// 	const [selectedType, setSelectedType] = useState(""); // New state for select
// 	const [formError, setFormError] = useState(""); // State to handle form errors

// 	const sendContact = useCallback(
// 		async (evt) => {
// 			evt.preventDefault();

// 			// Reset error state
// 			setFormError("");

// 			// Validation for select field
// 			if (!selectedType) {
// 				setFormError("Veuillez sélectionner une option.");
// 				return;
// 			}

// 			setSending(true);
// 			try {
// 				await mockContactApi();
// 				setSending(false);
// 				onSuccess();
// 			} catch (err) {
// 				setSending(false);
// 				onError(err);
// 			}
// 		},
// 		[onSuccess, onError, selectedType] // Add selectedType to dependencies
// 	);

// 	return (
// 		<form onSubmit={sendContact}>
// 			<div className="row">
// 				<div className="col">
// 					<Field
// 						placeholder="Votre nom"
// 						label="Nom"
// 						data-testid="name"
// 						required
// 					/>
// 					<Field placeholder="Votre prénom" label="Prénom" />
// 					<Select
// 						name="typeSelection"
// 						selection={["Personel", "Entreprise"]}
// 						onChange={(e) => setSelectedType(e.target.value)} // Update state on change
// 						label="Personel / Entreprise"
// 						type="large"
// 						titleEmpty
// 					/>
// 					{formError && (
// 						<div style={{ color: "red", marginBottom: "10px" }}>
// 							{formError}
// 						</div>
// 					)}
// 					<Field
// 						type="email"
// 						placeholder="Votre email"
// 						label="Email"
// 						data-testid="email"
// 						required
// 					/>
// 					<Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
// 						{sending ? "En cours" : "Envoyer"}
// 					</Button>
// 				</div>
// 				<div className="col">
// 					<Field
// 						placeholder="message"
// 						label="Message"
// 						data-testid="message"
// 						type={FIELD_TYPES.TEXTAREA}
// 						required
// 					/>
// 				</div>
// 			</div>
// 		</form>
// 	);
// };

// Form.propTypes = {
// 	onError: PropTypes.func,
// 	onSuccess: PropTypes.func,
// };

// Form.defaultProps = {
// 	onError: () => null,
// 	onSuccess: () => null,
// };

// export default Form;
