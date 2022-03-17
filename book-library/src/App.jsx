import LeftAside from "./components/left-aside/LeftAside";
import MainContent from "./components/main-content/MainContent";
import BookForm from "./components/BookForm/BookForm";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="app-div">
      <LeftAside />
      <Routes>
        <Route path="/booklist" element={<MainContent />} />
      </Routes>
      <Routes>
        <Route exact path="/create" element={<BookForm />} />
      </Routes>
    </div>
  );
}
export default App;
