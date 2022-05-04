const validate = ({ name, email, internshipStart, internshipEnd }) => {
  const errors = {};

  const emailRegExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (!name) {
    errors.name = "Required";
  }
  if (!emailRegExp.test(email)) {
    errors.email = "Email adress is not valid!";
  }
  if (!email) {
    errors.email = "Required";
  }

  if (Date.parse(internshipStart) >= Date.parse(internshipEnd)) {
    errors.internshipEnd =
      "The end date must be later than the beginning date!";
  }

  if (!internshipStart) {
    errors.internshipStart = "Required";
  }
  if (!internshipEnd) {
    errors.internshipEnd = "Required";
  }
  return errors;
};

export default validate;
