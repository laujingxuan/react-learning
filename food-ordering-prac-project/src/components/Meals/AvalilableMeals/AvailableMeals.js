import styles from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../dummy-meals";
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card";

const AvailableMeals = () => {
  return (
    <Card className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem meal={meal} key={meal.id} />;
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
