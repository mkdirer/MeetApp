import { Route, Routes } from "react-router-dom";

import Meetups from "./view/MeetUps";
import Bests from "./view/Bests";
import NewMeetup from "./view/NewMeetUp";
import Design from "./components/layaout/Design";

function App() {
  return (
      <Design>
        <Routes>
          <Route path="/" element={<Meetups />} exact/>
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/best" element={<Bests />} />
        </Routes>
      </Design>
  );
}

export default App;
