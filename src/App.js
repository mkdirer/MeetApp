import { Route, Routes } from "react-router-dom";

import Meetups from "./view/MeetUps";
import Bests from "./view/Bests";
import NewMeetup from "./view/NewMeetUp";
import MainNavigation from "./layaout/MainNavigation";

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Meetups />} exact/>
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/best" element={<Bests />} />
      </Routes>
    </div>
  );
}

export default App;
