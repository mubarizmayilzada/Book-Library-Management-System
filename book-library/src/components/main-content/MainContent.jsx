import React, { useState } from "react";
import "../main-content/mainContent.scss";
import { useSelector, useDispatch } from "react-redux";
const MainContent = () => {
  const [editMode, setEditMode] = useState(0);
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

  const editModeHandler = (id) => {
    if (editMode === id) {
      console.log(editMode === id);
      setEditMode(0);
    } else {
      setEditMode(id);
    }
  };

  const books = useSelector((state) => state?.todos);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    const book = books.filter((book) => book.id === id);
    console.log(book[0].id);
    (() =>
      dispatch({
        type: "REMOVE",
        value: book[0].id,
      }))();
  };

  const onEdit = (id) => {
    const book = books.filter((book) => book.id === id);
    (() =>
      dispatch({
        type: "EDIT",
        value: {
          id: id,
          book: {
            name: name,
            author: author,
            price: price,
          },
        },
      }))();
    setEditMode(0);
  };
  return (
    <main className="book__list">
      <div className="header__content d-flex">
        <h3 className="col-4">Name</h3>
        <h3 className="col-4">Author</h3>
        <h3 className="col-4">Price</h3>
      </div>
      <div>
        <ul className="booklist">
          {books?.map((book) => (
            <li className="d-flex">
              {editMode === book.id ? (
                <>
                  <div className="col-4">
                    <input onChange={hanleNameInput} defaultValue={book.name} />
                  </div>
                  <div className="col-4">
                    <input
                      onChange={hanleAuthorInput}
                      defaultValue={book.author}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      onChange={hanlePriceInput}
                      defaultValue={book.price}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-4">
                    <p>{book.name}</p>
                  </div>
                  <div className="col-4">
                    <p>{book.author}</p>
                  </div>
                  <div className="col-2">
                    <p>{book.price}</p>
                  </div>
                </>
              )}
              {editMode !== book.id ? (
                <button
                  onClick={() => editModeHandler(book.id)}
                  className="btn btn-warning"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={() => onEdit(book.id)}
                  className="btn btn-warning"
                >
                  Save
                </button>
              )}
              <button
                onClick={() => onDelete(book.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MainContent;
