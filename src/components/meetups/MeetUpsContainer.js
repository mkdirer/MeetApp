import MeetUpElement from './MeetUpElement';
import meetUpContainerClasses from './MeetUpsContainer.module.css';

function MeetUpContainer(props) 
{
    return <ul className={meetUpContainerClasses.container}>
    {props.event.map(event => <MeetUpElement key={event.id} id={event.id} photo = {event.photo} brief={event.brief} address={event.address} description={event.description}/>)} {/*better meetup={meetup}*/}
    </ul>
}

export default MeetUpContainer;