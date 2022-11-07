import Top from "../image/blob.png";
import Bottom from "../image/blobs.png";
export default function New(props) {
  return (
    <div className="container overflow-x-hidden mx-auto bg-[#F5F7FB] h-4/5 w-[550px] relative flex flex-col justify-center items-center space-y-4">
      <img src={Top} className="absolute right-0 top-0" />
      <h2 className="text-3xl font-semibold text-[#293264]">Quiz App</h2>
      <p className="text-[#293264]">Some description if needed</p>
      <button
        onClick={props.handleStart}
        className="rounded-md px-4 py-3 bg-[#4D5B9E] text-slate-50 w-1/4 hover:ease-in-out duration-150 hover:bg-[#4D5B9E]/90"
      >
        Start quiz
      </button>
      <img src={Bottom} className="absolute bottom-0 left-0" />
    </div>
  );
}
