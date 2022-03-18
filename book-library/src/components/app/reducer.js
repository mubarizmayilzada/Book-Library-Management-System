const inititalState = {
  todos: [
    {
      id: Math.ceil(Math.random() * 100),
      name: "Atomic Habits",
      author: "James Clark",
      price: "70$",
    },
    {
      id: Math.ceil(Math.random() * 100),
      name: "Rich dad Poor dad",
      author: "Robert Kiyosaki",
      price: "45$",
    },
    {
      id: Math.ceil(Math.random() * 100),
      name: "Harry Potter",
      author: "JK Rowling",
      price: "100$",
    },
    {
      id: Math.ceil(Math.random() * 100),
      name: "Tabacco Wives",
      author: "Adele Myers",
      price: "25$",
    },
    {
      id: Math.ceil(Math.random() * 100),
      name: "Night House",
      author: "Leigh Bardugo",
      price: "13$",
    },
  ],
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.value],
      };
    case "REMOVE":
      var x = state.todos.filter((item) => item.id !== action.value);
      return {
        ...state,
        todos: x,
      };
    case "EDIT":
      let foundBook = state.todos.filter((x) => x.id === action.value.id);
      var itemIndex = state.todos.findIndex((i) => i.id === action.value.id);
      let updatedTodo = {
        name:
          action.value.book.name.length > 0
            ? action.value.book.name
            : foundBook[0].name,
        author:
          action.value.book.author.length > 0
            ? action.value.book.author
            : foundBook[0].author,
        price:
          action.value.book.price.length > 0
            ? action.value.book.price
            : foundBook[0].price, 
      };
      let updatedTodos = [...state.todos];
      updatedTodos[itemIndex] = updatedTodo;
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

export default reducer;
