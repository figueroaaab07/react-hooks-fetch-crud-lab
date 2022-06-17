import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion}) {
  const questionsDisplay = questions.map((question) => <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} />);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsDisplay}</ul>
    </section>
  );
}

export default QuestionList;
