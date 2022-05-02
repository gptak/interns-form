import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { Form } from "react-final-form";
import validate from "../functions/validate";
import submit from "../functions/submit";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";

const EditIntern = () => {
  const [intern, setIntern] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIntern = async () => {
      const url = "http://localhost:3001/interns/" + id;
      axios.get(url).then((res) => {
        const data = res.data;
        const internshipStart = new Date(data.internshipStart);
        const internshipEnd = new Date(data.internshipEnd);
        const newData = {
          ...data,
          internshipStart,
          internshipEnd,
        };
        setIntern(newData);
      });
    };
    fetchIntern();
  }, [id]);

  return (
    <div>
      <NavLink to="/">Back to list </NavLink>
      <Form
        initialValues={intern}
        onSubmit={(values) => submit(values, navigate)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input name="name" type="text" label="Name" />
            <Input name="email" type="text" label="Email" />
            <Input
              name="internshipStart"
              type="date"
              label="Internship start"
            />
            <Input name="internshipEnd" type="date" label="Internship end" />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default EditIntern;
