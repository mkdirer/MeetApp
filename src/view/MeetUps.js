import {useState, useEffect} from 'react';

import MeetUpContainer from '../components/meetups/MeetUpsContainer';


const MOCK_EVENTS  = [
  {
    id: 'city1',
    brief: 'First event',
    photo:
    'photos/kamil-gliwinski-xcPw1-5OHTk-unsplash.png',
    address: 'plac Defilad 1, 00-901 Warszawa',
    description:
      'Get ready to experience something extraordinary! Join us for the most epic meetup yet, where the fun never stops! Do not miss out on this incredible opportunity to connect with like-minded individuals and create unforgettable memories. Trust us, you will not regret it!',
  },
  {
    id: 'city2',
    brief: 'Second event',
    photo:
    'photos/swallpaperaccess_com_sydney.png',
    address: 'Bennelong Point, Sydney NSW 2000, Australia',
    description:
      'Get ready for round two of awesomeness! We are back with another incredible meetup that you will not want to miss. From exciting activities to engaging discussions, this event is guaranteed to be a blast. Do not miss out on the opportunity to meet new people, learn new things, and have a great time. Mark your calendars now and get ready for an unforgettable experience!',
  },
]; 
function Meetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [lodedeEvents, setLoadedEvents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-event-app-1bcab-default-rtdb.europe-west1.firebasedatabase.app/event.json").then(response => {
    return response.json();
  }).then(data => {
    {
      /*We have object not a data that why we need convert data form firebase*/ 
    }
    const events = [];

    for(const key in data)
    {
      const event = {
        id: key,
        ...data[key]
      };

      events.push(event);
    }

    setIsLoading(false);
    setLoadedEvents(data);
  });
  }, [isLoading]);

  if (isLoading)
  {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    )
  }

    return <section>
      <h1>My meetups</h1>
      <MeetUpContainer event = {MOCK_EVENTS} />
      <MeetUpContainer event = {setLoadedEvents} />
    </section>
  }
  
  export default Meetups;