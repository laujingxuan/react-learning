import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    sendRequest(quoteData);
    //useHistory hook allows us to navigate to the other page when certain action is performed
    //.push: Pushes a new entry onto the history stack (user is able to go back to the page with back button)
    //.replace: Replaces the current entry on the history stack (user is not able to go back to the page with back button)
    history.push("/quotes");
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
