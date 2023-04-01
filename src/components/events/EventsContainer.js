import EventElement from './EventElement';
import eventContainerClasses from './EventsContainer.module.css';

function EventContainer(props) 
{
    return <ul className={eventContainerClasses.container}>
    {props.event.map(event => <EventElement key={event.id} id={event.id} photo={event.photo} brief={event.brief} address={event.address} description={event.description}/>)} {/*better event={event}*/}
    </ul>
}

export default EventContainer;