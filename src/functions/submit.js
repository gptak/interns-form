import axios from "axios";

const submit = (values, navigate) => {
  const url = `http://localhost:3001/interns/${values.id}`;
  axios.put(url, values).then(() => navigate("/"));
};

export default submit;
