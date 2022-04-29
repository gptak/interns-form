import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const EditIntern = () => {
  const [intern, setIntern] = useState({
    name: "",
    email: "",
    internshipStart: "",
    internshipEnd: "",
  });
  const { id } = useParams();

  useEffect(() => {
    console.log(`I want to get intern with id: ${id}!`);
    const fetchIntern = async () => {
      const response = await fetch(`http://localhost:3001/interns/${id}`);
      const intern = await response.json();
      setIntern(intern);
    };
    fetchIntern();
  }, [id]);

  const handleValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setIntern({
      ...intern,
      [name]: value,
    });
  };

  return (
    <div>
      <NavLink to="/">Back to list </NavLink>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={intern.name}
          onChange={handleValue}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={intern.email}
          onChange={handleValue}
        />
        <label>Internship start</label>
        <input
          type="text"
          name="internshipStart"
          value={intern.internshipStart}
          onChange={handleValue}
        />
        <label>Internship end</label>
        <input
          type="text"
          name="internshipEnd"
          value={intern.internshipEnd}
          onChange={handleValue}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EditIntern;
