import React from "react";
import "../left-aside/leftaside.scss";
import { ImBooks } from "react-icons/im";
import { CgAddR } from "react-icons/cg";
import { Link } from "react-router-dom";

const LeftAside = () => {
  return (
    <aside className="left-aside">
      <h2 className="left-aside__name">Mubariz Mayilzada</h2>
      <ul className="left-aside__list">
        <li>
          <Link to={`/booklist`}>
            <ImBooks />
            Kitablar
          </Link>
        </li>
        <li>
          <Link to={`/create`}>
            <CgAddR />
            Əlavə et
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftAside;
