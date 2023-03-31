import meetUpElementClasses from './MeetUpElement.module.css'

function MeetUpElement(props) {
  return (
    <li className={meetUpElementClasses.element}>
      <div className={meetUpElementClasses.photo}>
        <img src={props.photo} alt={props.brief} />
      </div>
      <div className={meetUpElementClasses.connect}>
        <h3>{props.breif}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={meetUpElementClasses.actions}>
        <button>Save Best</button>
      </div>
    </li>
  );
}

export default MeetUpElement;
