import "./App.css";
import { Route, Routes } from "react-router-dom";

import Form from "./pages/Form";
import Edit from "./components/Edit";
import List from "./pages/List";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
