import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React" },
  { id: "q2", author: "Maximilian", text: "Teaching React" },
];

const AllQuotes = () => {
  // const {
  //   sendRequest,
  //   status,
  //   data: loadedQUotes,
  //   error,
  // } = useHttp(getAllQuotes, true);

  // useEffect(() => {
  //   sendRequest();
  // }, [sendRequest]);

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

  // if (status === "completed" && (!loadedQUotes || loadedQUotes.length === 0)) {
  //   return <NoQuotesFound />;
  // }
  // should rendered loadedQuotes if we really connect to a db
  // return <QuoteList quotes={loadedQUotes} />;
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
