import { useContext } from 'react';
import { Link } from 'react-router-dom';

import mainNavClasses from './MainNavigation.module.css';
import BestContext from '../../stock/BestContext';

function MainNavigation() {

  const bestCon = useContext(BestContext);

  return (
    <header className={mainNavClasses.header}>
      <div className={mainNavClasses.logo}>Fun Events</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Events</Link> {/*"use instead <a href"*/}
          </li>
          <li>
            <Link to='/new-event'>Add New Event</Link>
          </li>
          <li>
            <Link to='/best'>The Best
            <span className ={mainNavClasses.badge}>{bestCon.numberOfBest}</span>
            </Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
