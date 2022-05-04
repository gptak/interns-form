import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "react-final-form";
import validate from "../functions/validate";
import submit from "../functions/submit";
import Input from "../components/Input";
import { ReactComponent as Back } from "../svgs/arrow-left.svg";
import "../scss/EditIntern.scss";

const EditIntern = () => {
  const [intern, setIntern] = useState({
    name: "",
    email: "",
    internshipStart: null,
    internshipEnd: null,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIntern = async () => {
      const url = `http://localhost:3001/interns/${id}`;
      axios.get(url).then((response) => {
        const { data } = response;
        const { name, email, id } = data;
        const internshipStart = new Date(data.internshipStart);
        const internshipEnd = new Date(data.internshipEnd);
        const newData = {
          name,
          email,
          id,
          internshipStart,
          internshipEnd,
        };
        setIntern(newData);
      });
    };
    fetchIntern();
  }, [id]);

  return (
    <main className="edit_intern">
      <NavLink className="edit_intern-backlink" to="/">
        <Back />
        <span>Back to list</span>
      </NavLink>
      <div className="edit_intern-container">
        <h2 className="edit_intern-title">Edit</h2>
        <Form
          initialValues={intern}
          onSubmit={(values) => submit(values, navigate)}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="edit_intern-form">
                <Input
                  name="name"
                  type="text"
                  label="Name *"
                  className={{ size: "big" }}
                />
                <Input
                  name="email"
                  type="text"
                  label="Email *"
                  className={{ size: "big" }}
                />
                <Input
                  name="internshipStart"
                  type="date"
                  label="Internship start *"
                  className={{ type: "date" }}
                />
                <Input
                  name="internshipEnd"
                  type="date"
                  label="Internship end *"
                  className={{ type: "date" }}
                />
              </div>
              <button className="edit_intern-submit_button" type="submit">
                Submit
              </button>
            </form>
          )}
        />
      </div>
    </main>
  );
};

export default EditIntern;
