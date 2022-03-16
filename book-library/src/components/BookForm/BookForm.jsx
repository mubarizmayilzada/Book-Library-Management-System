import React, { useState } from "react";
import "../BookForm/BookForm.scss";
import { useDispatch } from "react-redux";

const BookForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const hanleNameInput = (event) => {
    setName(event.target.value);
  };
  const hanleAuthorInput = (event) => {
    setAuthor(event.target.value);
  };
  const hanlePriceInput = (event) => {
    setPrice(event.target.value);
  };
  const onSumbit = (event) => {
    event.preventDefault();
    (() =>
      dispatch({
        type: "ADD",
        value: {
          id: Math.ceil(Math.random() * 100),
          name: name,
          author: author,
          price: price,
        },
      }))();
      setName('')
      setAuthor('')
      setPrice('')
  };

  return (
    <main>
      <div className="book__form">
        <form action="">
          <div className="form-control-c">
            <label className="col-3" htmlFor="">
              Name
            </label>
            <input value={name} onChange={hanleNameInput} className="col-7" type="text" />
          </div>
          <div className="form-control-c">
            <label className="col-3" htmlFor="">
              Author
            </label>
            <input value={author} onChange={hanleAuthorInput} className="col-7" type="text" />
          </div>
          <div className="form-control-c">
            <label className="col-3" htmlFor="">
              Price
            </label>
            <input value={price} onChange={hanlePriceInput} className="col-7" type="number" />
          </div>
          <button onClick={onSumbit} type="submit" className="btn btn-success">
            Create
          </button>
        </form>
      </div>
    </main>
  );
};

export default BookForm;
