import classes from "./CardCity.module.css";

const CardCity = (props) => {
  return <div className={classes.city}>{props.name}</div>;
};

export default CardCity;
