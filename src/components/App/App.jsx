import { Route, Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import "./App.css";
import HomePages from "../../pages/HomePages/HomePages";
import ContactsPages from "../../pages/ContactsPages/ContactsPages";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/contacts" element={<ContactsPages />} />
      </Routes>
    </>
  );
}

export default App;
