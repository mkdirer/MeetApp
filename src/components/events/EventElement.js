import { useContext } from 'react';

import Tile from '../interface/Tile';
import eventElementClasses from "./EventElement.module.css";
import BestContext from '../../stock/BestContext';

function EventElement(props) {

  const bestCon = useContext(BestContext);
  
  const elementIsBestie = bestCon.elementIsBest(props.id);

  function toggleBestEventStatusHandler() {
    if(elementIsBestie)
    {
      bestCon.removeBest(props.id);
    }else{
      bestCon.addBest({
        id: props.id,
        brief: props.brief,
        photo: props.photo,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={eventElementClasses.element}>
      <Tile>
        <div className={eventElementClasses.photo}>
          <img src={props.photo} alt={props.brief} />
        </div>
        <div className={eventElementClasses.content}>
          <h3>{props.brief}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={eventElementClasses.actions}>
          <button onClick = {toggleBestEventStatusHandler}>{elementIsBestie ? 'Remove form the best': 'To best'}</button>
        </div>
      </Tile>
    </li>
  );
}

export default EventElement;

