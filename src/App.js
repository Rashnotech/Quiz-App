import { useState } from "react";
import Quiz from "./Component/quiz";
import New from "./Component/start";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  function handleStart() {
    setStartQuiz((state) => !state);
  }
  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center">
      {startQuiz ? <Quiz /> : <New handleStart={handleStart} />}
    </div>
  );
}

export default App;
