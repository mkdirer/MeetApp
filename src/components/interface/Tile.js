import tileClasses from "./Tile.module.css";

function Tile(props) {
  return (<div className={tileClasses.tile}>{props.children}</div>);
}

export default Tile;
