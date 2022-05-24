import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React" },
  { id: "q2", author: "Maximilian", text: "Teaching React" },
];

const QuoteDetail = () => {
  //give us an object with information on the current url like path
  const match = useRouteMatch();
  const params = useParams();

  // const { quoteId } = params;
  // const {
  //   sendRequest,
  //   status,
  //   data: loadedQuote,
  //   error,
  // } = useHttp(getSingleQuote, true);

  // useEffect(() => {
  //   sendRequest(quoteId);
  // }, [sendRequest, quoteId]);

  //actually this code related to DUMMY Quotes can be removed if we are really connecting to a db through useHttp
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  // if (status === "pending") {
  //   return (
  //     <div className="centered">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <p className="centered focused">{error}</p>;
  // }

  // if (!loadedQuote.text){
  //   return <p>No quote found</p>;
  // }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* two available options for path param at the center */}
      {/* <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
