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
      onSubmitToastr();
  };
  const onSubmitToastr = () => {
    const toastr = document.getElementById('toastr');
    toastr.classList.remove('none-booklist');
    toastr.classList.add('success-booklist');

    setTimeout(() => {
      // toastr.style = 'opacity: 0';
      toastr.classList.remove('success-booklist');
      toastr.classList.add('none-booklist');
    }, 3000);
  };




  return (
    <section className="create-book-section">
      <div className="book__form">
        <h2>
          Create book
        </h2>
        <form action="">
          <div className="form-control-c">
            <label htmlFor="name-input">
              Name:
            </label>
            <input id="name-input" value={name} onChange={hanleNameInput} className="col-7" type="text" />
          </div>
          <div className="form-control-c">
            <label htmlFor="author-input">
              Author:
            </label>
            <input id="author-input" value={author} onChange={hanleAuthorInput} className="col-7" type="text" />
          </div>
          <div className="form-control-c">
            <label htmlFor="price-input">
              Price:
            </label>
            <input id="price-input" value={price} onChange={hanlePriceInput} className="col-7" type="number" />
          </div>
          <button onClick={onSumbit} type="submit" className="btn btn-success">
            Create
          </button>
        <h3 id="toastr" className="none-booklist">
          Book list created
        </h3>
        </form>
      </div>
    </section>
  );
};

export default BookForm;
