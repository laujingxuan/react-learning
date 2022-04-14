import styles from "./AvailableMeals.module.css";
// import DUMMY_MEALS from "../dummy-meals";
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card";
import { useEffect, useState, useCallback } from "react";

const AvailableMeals = () => {
  const [dummyMeals, setDummyMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    console.log("Fetching data");
    try {
      const response = await fetch("http://localhost:8080/get");
      if (!response.ok) {
        throw new Error("Something went wrong during fetching");
      }
      const data = await response.json();
      setDummyMeals(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <Card className={styles.meals}>
      <ul>
        {dummyMeals.map((meal) => {
          return <MealItem meal={meal} key={meal.id} />;
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
