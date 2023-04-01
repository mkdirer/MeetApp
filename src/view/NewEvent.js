import { useNavigate } from 'react-router-dom';
import AddNewEventForm from "../components/events/AddNewEventForm";


function NewEvent() {

  const navigate = useNavigate();

  function addEventHendler(eventData) {
    fetch(
      "https://react-event-app-1bcab-default-rtdb.europe-west1.firebasedatabase.app/event.json",
      {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <section>
      <h1>Create New Event</h1>
      <AddNewEventForm collectedEventData={addEventHendler} />
    </section>
  );
}

export default NewEvent;
