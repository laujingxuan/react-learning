import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  //useLocation give us access to a location object which has information about the currently loaded page/URL
  //useHistory gives us access to the history object that allows us to change and manage URL
  const location = useLocation();
  const history = useHistory();

  //help us to get the queryParams
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  //sorting is triggered based on the query params in the url
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  //help to update the url whenever the button is clicked
  const changeSortingHandler = () => {
    // two options
    // history.push({
    //   pathname: location.pathname,
    //   search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    // });
    history.push(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
