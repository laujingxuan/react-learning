import useHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const createdTask = { id: taskText, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "http://localhost:8080/post",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: taskText },
      },
      //pre-configure the function. The second argument you pass to bind will
      //then be the first argument received by that to be called function
      //by doing so, the applyData(data) data parameter will be passed as second
      //parameter in the function
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
