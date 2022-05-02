import { Field } from "react-final-form";
import format from "date-fns/format";

function Input({ name, type, label }) {
  const dateFormat = (value) => {
    if (value instanceof Date) {
      return format(value, "yyyy-MM-dd");
    }
    return value;
  };

  const dateParse = (value, name) => {
    if (name === "internshipStart" || name === "internshipEnd") {
      return new Date(value);
    }
    return value;
  };

  return (
    <Field name={name} format={dateFormat} parse={dateParse}>
      {({ input, meta }) => (
        <div>
          <label>{label}</label>
          <input {...input} type={type} />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

export default Input;
