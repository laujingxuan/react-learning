import styles from "./UserForm.module.css";
import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const UserForm = (props) => {
  const nameInputRef = useRef();

  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);
  const [showError, setShowError] = useState(false);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value)
    if (userName.trim().length > 0 && +age >= 0) {
      const temp = { details: userName + " (" + age + " years old)" };
      props.onAddUser(temp);
      setUserName("");
      setAge(0);
    } else {
      setShowError(true);
    }
  };

  const clickButtonHandler = () => {
    setShowError(false);
  };

  return (
    <Wrapper>
      {showError && (
        <ErrorModal
          title="An error occured"
          message="Something went wrong"
          onClickButtonHandler={clickButtonHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <div>
            <div>
              <label>Username</label>
              <input
                type="text"
                value={userName}
                onChange={userNameChangeHandler}
                ref={nameInputRef}
              />
            </div>
            <div>
              <label>Age (years)</label>
              <input
                type="number"
                step="1"
                value={age}
                onChange={ageChangeHandler}
              />
            </div>
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
