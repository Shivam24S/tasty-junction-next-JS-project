import MealsGrid from "@/component/meals/meals-grid";
import classes from "./page.module.css";

import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

// setting component based MetaData
export const metadata = {
  title: "all meals",
  description: "Delicious meals, shared by a food-loving community.",
};

async function MealsData() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself.ts is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>{" "}
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals....</p>}
        >
          <MealsData />
        </Suspense>
      </main>
    </>
  );
}
