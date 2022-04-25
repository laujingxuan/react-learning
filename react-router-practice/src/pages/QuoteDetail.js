import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React" },
  { id: "q2", author: "Maximilian", text: "Teaching React" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <o>No quote found</o>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* two available options for path param at the center */}
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route> */}
    </>
  );
};

export default QuoteDetail;
