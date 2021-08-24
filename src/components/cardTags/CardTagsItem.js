import classes from "./CardTags.module.css";
const OptionItem = (props) => {
  return <div className={classes.tag}>{props.itemData}</div>;
};

export default OptionItem;
