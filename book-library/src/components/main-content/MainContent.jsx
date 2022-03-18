import React, { useState } from "react";
import "../main-content/mainContent.scss";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "../main-header/MainHeader";
import { FaSortAmountUp } from "react-icons/fa";


const MainContent = (props) => {
  const [editMode, setEditMode] = useState(0);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [sortMode, setSortMode] = useState(false);

  const hanleNameInput = (event) => {
    setName(event.target.value);
  };
  const hanleAuthorInput = (event) => {
    setAuthor(event.target.value);
  };
  const hanlePriceInput = (event) => {
    setPrice(event.target.value);
  };
  let bookList = [];

  const editModeHandler = (id) => {
    console.log(id);
    if (editMode === id) {
      setEditMode(0);
    } else {
      setEditMode(id);
    }
  };

  const books = useSelector((state) => state?.todos);
  const dispatch = useDispatch();
  // 
  const onDelete = (id) => {
    const book = books.filter((book) => book.id === id);
    (() =>
      dispatch({
        type: "REMOVE",
        value: book[0].id,
      }))();
  };

  const onEdit = (id) => {
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
    setName("");
    setAuthor("");
    setPrice("");
  };
  bookList = books.filter((book) => {
    if (props.searchItem == "") {
      return book;
    } else if (
      book.name?.toLowerCase().includes(props.searchItem?.toLowerCase())
    ) {
      return book;
    }
  });
  if (sortMode) {
    bookList = books.sort(function (a, b) {
      var A = a.name;
      var B = b.name;
      return A > B ? 1 : -1;
    });
  }
  return (
    <main className="book__list">
      <MainHeader search={props.search} />
      <section className="main-section">
        <div className="main-section__header">
          <h4>Books</h4>
          <div className="main-section__header__right-side">
            <p onClick={() => setSortMode(!sortMode)}>
              <FaSortAmountUp />
              Sort
            </p>
          </div>
        </div>
        <div className="header__content d-flex">
          <h3>Name</h3>
          <h3 id="author">Author</h3>
          <h3 style={{ position: "relative", left: "-30px" }}>Price</h3>
        </div>
        <div>
          <ul className="booklist">
            {bookList.map((book) => (
              <ul className="booklist">
                <li className="d-flex">
                  {editMode === book.id ? (
                    <>
                      <div className="table-content">
                        <input
                          onChange={hanleNameInput}
                          defaultValue={book.name}
                        />
                        <input
                          onChange={hanleAuthorInput}
                          defaultValue={book.author}
                        />
                        <input
                          onChange={hanlePriceInput}
                          defaultValue={book.price}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="table-content">
                        <p>{book.name}</p>
                        <p>{book.author}</p>
                        <p>{book.price}</p>
                      </div>
                    </>
                  )}
                  <div className="buttons">
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
                  </div>
                </li>
              </ul>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
