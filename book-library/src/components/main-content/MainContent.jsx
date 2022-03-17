import React, { useState } from "react";
import "../main-content/mainContent.scss";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "../main-header/MainHeader";
import { FaSortAmountUp } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
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
      <MainHeader/>
      <section className="main-section">
      <div className="main-section__header">
        <h4>
          Books
        </h4>
        <div className="main-section__header__right-side">
          <p>
          <FaSortAmountUp/>
            Sort
          </p>
          <p>
          <RiFilter2Fill/>
            Filter
          </p>
        </div>
      </div>
      <div className="header__content d-flex">
        <h3>Name</h3>
        <h3 id="author">Author</h3>
        <h3 style={{position: "relative", left:"-30px"}}>Price</h3>
      </div>
      <div>
        <ul className="booklist">
          {
            // books.filter((val) => {
            //   if(searchTerm == ""){
            //     return val;
            //   }
            //   else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            //     return val;
            //   }
            // }).map((val, key) => {
            //   return (
            //     <ul className="booklist">
            //                       <li className="d-flex">
            //     {editMode === book.id ? (
            //       <>
            //         <div className="table-content">
            //               <input 
            //                 onChange={hanleNameInput} 
            //                 defaultValue={book.name} 
            //               />
            //               <input
            //                 onChange={hanleAuthorInput}
            //                 defaultValue={book.author}
            //               />
            //               <input
            //                 onChange={hanlePriceInput}
            //                 defaultValue={book.price}
            //               />
            //         </div>
            //       </>
            //     ) : (
            //       <>
            //       <div className="table-content">
            //           <p>{book.name}</p>
            //           <p>{book.author}</p>
            //           <p>{book.price}</p>
            //       </div>
            //       </>
            //     )}
            //       <div className="buttons">
            //           {editMode !== book.id ? (
            //           <button
            //             onClick={() => editModeHandler(book.id)}
            //             className="btn btn-warning"
            //           >
            //             Edit
            //           </button>
            //         ) : (
            //           <button
            //             onClick={() => onEdit(book.id)}
            //             className="btn btn-warning"
            //           >
            //             Save
            //           </button>
            //         )}
            //         <button
            //           onClick={() => onDelete(book.id)}
            //           className="btn btn-danger"
            //         >
            //           Delete
            //         </button>
            //       </div>
            //   </li>
            //     </ul>
            //   )
            // })
          }

          {books?.map((book) => (
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
          ))}
        </ul>
      </div>
      </section>
    </main>
  );
};

export default MainContent;
