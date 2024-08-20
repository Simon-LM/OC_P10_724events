/** @format */

import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
	INPUT_TEXT: 1,
	TEXTAREA: 2,
	EMAIL: 3, // Add
};

const Field = ({
	type = FIELD_TYPES.INPUT_TEXT,
	label,
	name,
	placeholder,
	id, // Add id to the destructured props
	...rest
}) => {
	let component;

	switch (type) {
		case FIELD_TYPES.TEXTAREA:
			component = (
				<textarea
					name={name}
					placeholder={placeholder}
					data-testid="field-testid"
					aria-labelledby={id}
					{...rest} // Spread props to include "required", "rows", etc.
				/>
			);
			break;
		case FIELD_TYPES.INPUT_TEXT:
		case FIELD_TYPES.EMAIL: // Add
		default:
			// The default case now handles all input types
			component = (
				<input
					// type={type} // This will now correctly use the type passed via rest (e.g., "email")
					type={type === FIELD_TYPES.EMAIL ? "email" : "text"} // Ensure correct type for input
					name={name}
					placeholder={placeholder}
					data-testid="field-testid"
					aria-labelledby={id}
					{...rest} // Spread props to include "required", "maxlength", etc.
				/>
			);
	}

	return (
		<div className="inputField">
			<span id={id}>{label}</span>
			{component}
		</div>
	);
};

Field.propTypes = {
	type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
	// type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	id: PropTypes.string.isRequired, // Ensure id is required
};
Field.defaultProps = {
	label: "",
	placeholder: "",
	type: FIELD_TYPES.INPUT_TEXT,
	name: "field-name",
};

export default Field;
