/** @format */

// const Field = ({
// 	type = FIELD_TYPES.INPUT_TEXT, // Default type
// 	label,
// 	name,
// 	placeholder,
// 	...rest // Spread operator to capture other props like "type" and "required"
// }) => {
// 	let component;
// 	switch (type) {
// 		case FIELD_TYPES.TEXTAREA:
// 			component = (
// 				<textarea
// 					name={name}
// 					placeholder={placeholder}
// 					data-testid="field-testid"
// 					{...rest} // Spread props to include "required", "rows", etc.
// 				/>
// 			);
// 			break;
// 		default:
// 			// The default case now handles all input types
// 			component = (
// 				<input
// 					type={type} // This will now correctly use the type passed via rest (e.g., "email")
// 					name={name}
// 					placeholder={placeholder}
// 					data-testid="field-testid"
// 					{...rest} // Spread props to include "required", "maxlength", etc.
// 				/>
// 			);
// 	}
// 	return (
// 		<div className="inputField">
// 			<span>{label}</span>
// 			{component}
// 		</div>
// 	);
// };

// // // // // // // // // // // // // // // // // // // // // // // // //

// import { useState, useCallback } from "react";
// import PropTypes from "prop-types";
// import Field from "./Field"; // Assuming you have a Field component
// import Select from "./Select"; // Assuming you have a Select component
// import Button, { BUTTON_TYPES } from "./Button"; // Assuming you have a Button component

// const mockContactApi = () =>
// 	new Promise((resolve) => {
// 		setTimeout(resolve, 500);
// 	});

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

// Composant Field

// import PropTypes from "prop-types";
// import "./style.scss";

// export const FIELD_TYPES = {
//     INPUT_TEXT: 1,
//     TEXTAREA: 2,
//     EMAIL: 3,
// };

// const Field = ({
//     type = FIELD_TYPES.INPUT_TEXT,
//     label,
//     name,
//     placeholder,
//     id, // Add id to the destructured props
//     ...rest
// }) => {
//     let component;

//     switch (type) {
//         case FIELD_TYPES.TEXTAREA:
//             component = (
//                 <textarea
//                     name={name}
//                     placeholder={placeholder}
//                     data-testid="field-testid"
//                     aria-labelledby={id} // Correct usage of aria-labelledby
//                     {...rest}
//                 />
//             );
//             break;
//         case FIELD_TYPES.INPUT_TEXT:
//         case FIELD_TYPES.EMAIL: // Add
//         default:
//             component = (
//                 <input
//                     type={type === FIELD_TYPES.EMAIL ? "email" : "text"} // Ensure correct type for input
//                     name={name}
//                     placeholder={placeholder}
//                     data-testid="field-testid"
//                     aria-labelledby={id} // Correct usage of aria-labelledby
//                     {...rest}
//                 />
//             );
//     }

//     return (
//         <div className="inputField">
//             <span id={id}>{label}</span> {/* Ensure id matches aria-labelledby */}
//             {component}
//         </div>
//     );
// };

// Field.propTypes = {
//     type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
//     name: PropTypes.string,
//     label: PropTypes.string,
//     placeholder: PropTypes.string,
//     id: PropTypes.string.isRequired, // Ensure id is required
// };

// Field.defaultProps = {
//     label: "",
//     placeholder: "",
//     type: FIELD_TYPES.INPUT_TEXT,
//     name: "field-name",
// };

// export default Field;

// const Form = ({ onSuccess, onError }) => {
//     const [sending, setSending] = useState(false);
//     const sendContact = useCallback(
//         async (evt) => {
//             evt.preventDefault();
//             setSending(true);
//             try {
//                 await mockContactApi();
//                 setSending(false);
//                 onSuccess();
//             } catch (err) {
//                 setSending(false);
//                 onError(err);
//             }
//         },
//         [onSuccess, onError]
//     );

//     return (
//         <form onSubmit={sendContact}>
//             <div className="row">
//                 <div className="col">
//                     <Field
//                         id="name-field"
//                         placeholder="Votre nom"
//                         label="Nom"
//                         data-testid="name"
//                         required
//                     />
//                     <Field
//                         id="prenom-field"
//                         placeholder="Votre prénom"
//                         label="Prénom"
//                     />
//                     <Select
//                         name="typeSelection"
//                         selection={["Personel", "Entreprise"]}
//                         onChange={() => null}
//                         label="Personel / Entreprise"
//                         type="large"
//                         required
//                         titleEmpty
//                     />
//                     <Field
//                         id="email-field"
//                         type={FIELD_TYPES.EMAIL} // Correct usage of type for email
//                         placeholder="Votre email"
//                         label="Email"
//                         data-testid="email"
//                         required
//                     />
//                     <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
//                         {sending ? "En cours" : "Envoyer"}
//                     </Button>
//                 </div>
//                 <div className="col">
//                     <Field
//                         id="message-field"
//                         placeholder="message"
//                         label="Message"
//                         data-testid="message"
//                         type={FIELD_TYPES.TEXTAREA}
//                         required
//                     />
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default Form;
