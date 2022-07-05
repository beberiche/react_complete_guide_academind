import { useParams, Route } from "react-router-dom";
import React from "react";
import Comment from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Quotes Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`comments`}>
        <Comment></Comment>
      </Route>
    </>
  );
};

export default QuoteDetail;
