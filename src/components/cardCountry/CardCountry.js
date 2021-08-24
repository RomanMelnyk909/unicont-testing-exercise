import classes from "./CardCountry.module.css";

const LocationCountry = (props) => {
  return (
    <div className={classes.country}>
      <div className={classes.country_inner}>{props.name}</div>
    </div>
  );
};

export default LocationCountry;
