import classes from "./CardDescription.module.css";
import OneBed from "../prices/OneBed";
import TwooBed from "../prices/TwooBed";
import Hostel from "../prices/Hostel";

const CardDescription = () => {
  return (
    <div className={classes.description}>
      <div className={classes.description_inner}>
        <OneBed price={14} />
        <TwooBed price={22} />
        <Hostel price={17} />
      </div>
    </div>
  );
};

export default CardDescription;
