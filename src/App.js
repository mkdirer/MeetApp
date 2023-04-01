import { Route, Routes } from "react-router-dom";

import Events from "./view/Events";
import Bests from "./view/Bests";
import NewEvent from "./view/NewEvent";
import Design from "./components/layaout/Design";

function App() {
  return (
      <Design>
        <Routes>
          <Route path="/" element={<Events />} exact/>
          <Route path="/new-event" element={<NewEvent />} />
          <Route path="/best" element={<Bests />} />
        </Routes>
      </Design>
  );
}

export default App;
