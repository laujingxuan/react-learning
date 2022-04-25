import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    //useHistory hook allows us to navigate to the other page when certain action is performed
    //.push: Pushes a new entry onto the history stack (user is able to go back to the page with back button)
    //.replace: Replaces the current entry on the history stack (user is not able to go back to the page with back button)
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
