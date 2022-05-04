import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../scss/InternList.scss";
import { ReactComponent as EditIcon } from "../svgs/edit.svg";

const InternList = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      const url = "http://localhost:3001/interns";
      axios.get(url).then((response) => setInterns(response.data));
    };
    fetchInterns();
  }, []);

  return (
    <main className="intern_list">
      <div className="intern_list-container">
        <h2 className="intern_list-title">Participants</h2>
        {interns.map((u) => (
          <div className="intern_list-item" key={u.id}>
            {u.name}
            <NavLink className="intern_list-item--link" to={`/interns/${u.id}`}>
              <EditIcon />
              <span>Edit</span>
            </NavLink>
          </div>
        ))}
      </div>
    </main>
  );
};

export default InternList;
