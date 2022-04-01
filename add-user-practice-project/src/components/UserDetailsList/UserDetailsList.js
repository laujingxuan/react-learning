import styles from "./UserDetailsList.module.css";
import Card from "../UI/Card";

const UserDetailsList = (props) => {
  const removeHandler = (userId) => {
    props.onDeleteUser(userId);
  };
  return (
      <div>      <div className={styles.title}>
      <h3>User List</h3>
    </div>
    <Card className={styles.users}>


      <ul>
        {props.users.map((user) => (
          <li
            key={user.id}
            onClick={(e) => {
              removeHandler(user.id);
            }}
          >
            {user.details}
          </li>
        ))}
      </ul>
    </Card>
    </div>
  );
};

export default UserDetailsList;
