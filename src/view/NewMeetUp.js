import { useNavigate } from 'react-router-dom';
import AddNewMeetUpForm from "../components/meetups/AddNewMeetUpForm";


function NewMeetup() {

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
      <AddNewMeetUpForm collectedEventData={addEventHendler} />
    </section>
  );
}

export default NewMeetup;
