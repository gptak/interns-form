import { Field } from "react-final-form";
import format from "date-fns/format";

function Input({ name, type, label, className }) {
  const dataFields = ["internshipStart", "internshipEnd"];

  const dateFormat = (value) => {
    if (value && dataFields.includes(name)) {
      return format(value, "yyyy-MM-dd");
    }
    return value;
  };

  const dateParse = (value, name) => {
    if (dataFields.includes(name)) {
      return new Date(value);
    }
    return value;
  };

  return (
    <Field name={name} format={dateFormat} parse={dateParse}>
      {({ input: { name, value, onChange }, meta: { error, touched } }) => (
        <div className={className}>
          <label className="edit_intern-item--label">{label}</label>
          <input
            className="edit_intern-item--input"
            name={name}
            value={value}
            onChange={onChange}
            type={type}
          />
          {error && touched && (
            <div className="edit_intern-item--error">{error}</div>
          )}
        </div>
      )}
    </Field>
  );
}

export default Input;
