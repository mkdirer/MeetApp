import { Link } from 'react-router-dom';

import moduleclasses from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <header>
      <div>Fun Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>MeetUps</Link> {/*"use instead <a href"*/}
          </li>
          <li>
            <Link to='/new-meetup'>Add New MeetUp</Link>
          </li>
          <li>
            <Link to='/best'>The Best</Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
