import MeetUpContainer from '../components/meetups/MeetUpsContainer';

const ALL_METTUPS  = [
  {
    id: 'city1',
    brief: 'First event',
    photo:
      './photos/kamil-gliwinski-xcPw1-5OHTk-unsplash.jpg',
    address: 'plac Defilad 1, 00-901 Warszawa',
    description:
      'Get ready to experience something extraordinary! Join us for the most epic meetup yet, where the fun never stops! Do not miss out on this incredible opportunity to connect with like-minded individuals and create unforgettable memories. Trust us, you will not regret it!',
  },
  {
    id: 'city2',
    brief: 'Second event',
    photo:
    '../components/photos/swallpaperaccess_com_sydney.jpg',
    address: 'Bennelong Point, Sydney NSW 2000, Australia',
    description:
      'Get ready for round two of awesomeness! We are back with another incredible meetup that you will not want to miss. From exciting activities to engaging discussions, this event is guaranteed to be a blast. Do not miss out on the opportunity to meet new people, learn new things, and have a great time. Mark your calendars now and get ready for an unforgettable experience!',
  },
]; 
function Meetups() {
    return <section>
      <h1>My meetups</h1>
      <ul>
      {ALL_METTUPS.map((event) => {
        return <li key={event.id}>
        {event.brief}
        </li>;
      })}
      </ul>
      <MeetUpContainer event = {ALL_METTUPS} />
    </section>
  }
  
  export default Meetups;