import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../UI/Spinner/Spinner";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
      const response = await axios.get("http://localhost:3001/meals");

      if (!(response.status === 200)) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.data.meals;
      setMeals(responseData);
      setIsLoading(false);
    }

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <h2>{httpError}</h2>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
