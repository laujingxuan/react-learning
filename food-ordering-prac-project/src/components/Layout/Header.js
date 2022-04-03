import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartClick={props.onCartClick}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
