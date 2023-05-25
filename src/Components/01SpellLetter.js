import React, { useContext,useEffect } from "react";
import { mContext } from "../MainContext";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const SpellLetter = () => {
  const { question, currentQuestion, answer,setCurrentQuestion, handleConfirm,checkConfirm ,setCheckConfirm,setAnswer} =
    useContext(mContext);
  const {
    listening,
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  useEffect(() => {
    resetTranscript();
  }, [currentQuestion, resetTranscript, checkConfirm]);
  if (!browserSupportsSpeechRecognition) {
    return <span>Does not Support Speech Recognition</span>;
  }
 
  const handleReset=()=>{
    resetTranscript()
    setCheckConfirm(0)
    setAnswer(prevAnswer=>({
      ...prevAnswer,[`Q${currentQuestion+1}`]:''
    }))
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-white rounded-t-[2rem] w-full h-[4rem] flex justify-center items-center text-[2rem]">
        SPELL EACH LETTER
      </div>
      <div className="flex h-[20rem] w-full p-4 space-x-10">
        <div className="w-[50%] bg-gray-100 flex justify-center items-center text-[4rem] rounded-[2rem]">
          {question[currentQuestion]}
        </div>
        <div className="w-[50%] bg-green-500 rounded-[2rem] p-4 flex-col flex justify-center items-center">
          <div className="flex flex-col space-y-4">
            <button
              className="bg-blue-500 w-[200px] h-[50px] flex justify-center text-white rounded-[1rem] hover:cursor-pointer hover:bg-blue-300 items-center font-bold text-[1.2rem]"
              onClick={SpeechRecognition.startListening}
            >
              Start Listening
            </button>
            <div className="bg-white w-[200px]  h-[2.5rem] flex justify-center items-center text-[1.5rem]">
              {transcript}
              {checkConfirm ===1? answer[`Q${currentQuestion + 1}`]:""} 
            </div>
        <div className="flex space-x-4">

            <button
              className="bg-blue-500 w-[98px] h-[50px] flex justify-center text-white rounded-[1rem] hover:cursor-pointer hover:bg-blue-300 items-center font-bold text-[1.2rem]"
              onClick={() => handleConfirm(transcript)}
            >
              Confirm
            </button>

            <button
              className="bg-blue-500 w-[98px] h-[50px] flex justify-center text-white rounded-[1rem] hover:cursor-pointer hover:bg-blue-300 items-center font-bold text-[1.2rem]"
              onClick={handleReset}
            >
              Reset
            </button>
        </div>
          </div>
          {/* <div>
            <div className="bg-white">{transcript}</div>
            <div>
              <button onClick={() => handleConfirm(transcript)}>Confirm</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SpellLetter;
