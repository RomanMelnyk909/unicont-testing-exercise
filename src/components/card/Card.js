import classes from "./Card.module.css";
import CardCity from "../cardCity/CardCity";
import CardCountry from "../cardCountry/CardCountry";
import CardDescription from "../cardDescription/CardDescription";
import CardImage from "../cardImage/CardImage";
import CardTags from "../cardTags/CardTags";

const CityCard = () => {
  return (
    <div className={classes.city}>
      <CardCity name="Киев" />
      <CardCountry name="Украина" />
      <CardImage />
      <CardDescription />
      <CardTags />
    </div>
  );
};

export default CityCard;
