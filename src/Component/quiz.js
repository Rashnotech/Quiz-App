import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Top from "../image/blob.png";
import Bottom from "../image/blobs.png";
import Question from "./Question";
export default function Quiz() {
  const [correct, setCorrect] = useState(0);
  const [checked, setChecked] = useState(false);
  const [questionz, setQuestion] = useState([]);
  const [start, setStart] = useState(0);
  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  function handleChoice(id, value) {
    setQuestion((prevState) => {
      return prevState.map((quizz) => {
        return quizz.id === id
          ? { ...quizz, selected: value, checked: true }
          : quizz;
      });
    });
    scores(id, value);
  }
  function handleAnswer() {
    setChecked((prev) => !prev);
  }
  function handleStart() {
    setStart((prev) => prev + 1);
    setChecked((prev) => !prev);
    setCorrect(0);
  }
  function scores(identify, values) {
    questionz.map((prev) => {
      if (prev.id === identify && prev.correct == values) {
        setCorrect((prev) => prev + 1);
      }
    });
  }
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => {
        const newArray = [];
        data.results.map((quizz) => {
          return newArray.push({
            id: nanoid(),
            quiz: quizz.question,
            answers: shuffle([
              ...quizz.incorrect_answers,
              quizz.correct_answer,
            ]),
            checked: false,
            selected: "",
            correct: quizz.correct_answer,
          });
        });
        setQuestion(newArray);
      });
  }, [start]);
  return (
    <div className="container px-16 py-4 overflow-x-hidden mx-auto bg-[#F5F7FB] w-[550px] relative ">
      <img src={Top} alt="" className="absolute right-0 top-0 w-10 h-10" />
      {questionz.length == 0
        ? "Loading"
        : questionz.map((quizzes) => (
            <Question
              key={quizzes.id}
              question={quizzes.quiz}
              answers={quizzes.answers}
              id={quizzes.id}
              handleChoice={handleChoice}
              selection={quizzes.selected}
              correct={quizzes.correct}
              checked={checked}
            />
          ))}

      <div className="flex items-center font-bold text-[#293264] justify-center w-full p-2">
        {checked ? `You scored ${correct}/5 correct scores` : ""}
        {questionz.length == 0 ? (
          ""
        ) : (
          <button
            onClick={checked ? handleStart : handleAnswer}
            className="rounded-md px-4 py-2 text-slate-50 w-1/2 bg-[#4D5B9E] hover:ease-in-out duration-150 hover:bg-[#4D5B9E]/90"
          >
            {checked ? "Play Again" : "Check answers"}
          </button>
        )}
      </div>
      <img src={Bottom} alt="" className="absolute bottom-0 left-0 w-10 h-10" />
    </div>
  );
}
