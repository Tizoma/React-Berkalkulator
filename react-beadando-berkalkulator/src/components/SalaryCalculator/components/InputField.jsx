import PropTypes from "prop-types";
export function InputField({ header, type, name, placeHolder, label, value, setter }) {
	return (
		<>
			<h3 className="text-neutral-700">{header}</h3>
			<div className="ui input">
				<input type={type} name={name} id={name} placeholder={placeHolder} value={value} onChange={e => setter(e.target.value)}></input>
			</div>
			<div className="text-zinc-500">
				<label htmlFor={name}>{label} </label>
			</div>
		</>
	);
}
InputField.propTypes = {
	header: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	placeHolder: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	setter: PropTypes.func,
};
