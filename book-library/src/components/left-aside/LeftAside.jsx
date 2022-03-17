import React from "react";
import "../left-aside/leftaside.scss";
import { ImBooks } from "react-icons/im";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const LeftAside = () => {
  return (
    <aside className="left-aside">
      <h2 className="left-aside__name">
        <RiCheckboxBlankLine color="white"/> 
        <span>
          AZİNTELECOM
        </span>
      </h2>
      <ul className="left-aside__list">
        <li>
          <Link to={`/booklist`}>
            <ImBooks size={20} color="#ccc"/>
            <span>
            Kitablar
            </span>
          </Link>
        </li>
        <li>
          <Link to={`/create`}>
            <AiOutlinePlusCircle size={20} color="#ccc"/>
            <span>
            Əlavə et
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftAside;
