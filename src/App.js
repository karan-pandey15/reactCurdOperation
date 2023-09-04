import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./component/Create";
import Read from "./component/Read";
import Update from "./component/Update";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
