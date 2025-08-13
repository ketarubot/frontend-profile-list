import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import cardData from "./data/cardData";
import Home from "./pages/Home";
import ProfileLayout from "./pages/ProfileLayout";
import ProfileList from "./components/ProfileList";
import ProfileForm from "./components/ProfileForm";
import ProfileModify from "./components/ProfileModify";

function App() {
  const [profiles, setProfiles] = useState(cardData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/profile" element={<ProfileLayout data={profiles} setData={setProfiles} />}>
          <Route path="list" element={<ProfileList />} />
          <Route path="form" element={<ProfileForm />} />
          <Route path="modify/:id" element={<ProfileModify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
