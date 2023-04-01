import { useRef } from "react";
import Tile from "../interface/Tile";
import formClasses from "./AddNewMeetUpForm.module.css";
function AddNewMeetUpForm() {
  const briefRef = useRef();
  const photoRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();
  function submitHendler(event) {
    event.preventDefault();

    const submittedBrief = briefRef.current.value;
    {
      /*Please don't do that: briefRef.current.value = 'New value'; */
    }

    const submittedPhoto = photoRef.current.value;
    const submittedAddress = addressRef.current.value;
    const submittedDescription = descriptionRef.current.value;

    const eventData = {
        brief: submittedBrief,
        photo: submittedPhoto,
        address: submittedAddress,
        description: submittedDescription,
        };
        console.log(eventData); 
  }

  return (
    <Tile>
      <form className={formClasses.form} onSubmit={submitHendler}>
        <div className={formClasses.control}>
          <label htmlFor="brief">Event Title</label>
          <input type="text" required id="brief" ref={briefRef}></input>
        </div>
        <div className={formClasses.control}>
          <label htmlFor="photo">Url Event Photo</label>
          <input type="url" required id="photo" ref = {photoRef}></input>
        </div>
        <div className={formClasses.control}>
          <label htmlFor="address">Adderss</label>
          <input type="text" required id="address" ref = {addressRef}></input>
        </div>
        <div className={formClasses.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text" required row="5" ref = {descriptionRef}></textarea>
        </div>
        <div className={formClasses.actions}>
          <button>Add Event</button>
        </div>
      </form>
    </Tile>
  );
}

export default AddNewMeetUpForm;
