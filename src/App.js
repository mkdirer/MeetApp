import { Route, Routes } from "react-router-dom";

import Meetups from "./view/MeetUps";
import Bests from "./view/Bests";
import NewMeetup from "./view/NewMeetUp";

function App() {
  return (
    <div>
      <h1>Witaj</h1>
      <Routes>
        <Route path="/" element={<Meetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/best" element={<Bests />} />
      </Routes>
    </div>
  );
}

export default App;
