var he = require("he");
export default function Question({
  question,
  answers,
  id,
  handleChoice,
  selection,
  correct,
  checked,
}) {
  return (
    <div className="space-y-4 border-b border-slate-300 pb-4">
      <h2 className="text-[#293264] font-semibold">{he.decode(question)}</h2>
      <div>
        <div className="grid grid-flow-col gap-4 w-full">
          {answers.map((answer, index) => (
            <button
              onClick={() => handleChoice(id, answer)}
              key={index}
              id={id}
              className={
                checked &&
                answers.some((item) => item == correct) &&
                correct == answer
                  ? "bg-[#94D7A2] text-[#293264] shadow-inner px-2 cursor-pointer text-xs text-center rounded-md"
                  : checked && selection != correct && selection == answer
                  ? "bg-[#F8BCBC] text-[#293264] shadow-inner px-2 cursor-pointer text-xs text-center rounded-md"
                  : selection === answer
                  ? "bg-[#D6DBF5] text-[#293264] shadow-inner px-2 cursor-pointer text-xs text-center rounded-md"
                  : "border border-[#4D5B9E] shadow-inner px-2 cursor-pointer text-xs text-center rounded-md"
              }
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

//
