import { Route } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* this route will only be evaluated/available when welcome page is rendered */}
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
