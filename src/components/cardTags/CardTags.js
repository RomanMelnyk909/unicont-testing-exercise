import classes from "./CardTags.module.css";
import CardTagsItem from "./CardTagsItem";

const CardTags = () => {
  const tagsData = [
    "Гостинницы",
    "Квартиры",
    "Хостелы",
    "Дома посуточно",
    "Комнаты посуточно",
    "Дома для отпуска",
    "Курортные готели",
    "Все варианты",
  ];

  return (
    <div className={classes.tags}>
      {tagsData.map((tag, index) => {
        return <CardTagsItem itemData={tag} key={index} />;
      })}
    </div>
  );
};

export default CardTags;
