import { useContext } from "react";

import BestContext from "../stock/BestContext";
import EventsContainer from "../components/events/EventsContainer";

function Bests() {
  const bestCon = useContext(BestContext);

  let content;

  if (bestCon.numberOfBest === 0) {
    content = <p>You haven't added any best events yet. Would you like to start adding some now?</p>;
  } else {
    content = <EventsContainer event={bestCon.bests} />;
  }
  console.log(bestCon);
  return (
    <section>
      <h1>My Best Events</h1>
      {content}
    </section>
  );
}

export default Bests;
