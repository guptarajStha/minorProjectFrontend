import React, { useContext } from "react";
import { mContext } from "../MainContext";
import SpellLetter from "../Components/01SpellLetter";
import ChoosePronouncation from "../Components/02ChoosePronouncation";
import ListeningTyping from "../Components/03ListeningTyping";
import { useSpeechRecognition } from "react-speech-recognition";
const Test = () => {
  const { resetTranscript } = useSpeechRecognition();
  const {
    question,
    currentQuestion,
    setCurrentQuestion,
    answer,
    setCheckConfirm,
  } = useContext(mContext);
  const Pronounce = (value) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(value);
    synth.speak(utterance);
  };
  const handleNext = () => {
    if (currentQuestion < 16) {
      if (answer[`Q${currentQuestion + 1}`] !== "") {
        setCurrentQuestion((prevValue) => prevValue + 1);
      } else {
        if (currentQuestion < 6) {
          Pronounce("Please, Spell each letter");
          resetTranscript()
        } else if (currentQuestion < 11) {
          Pronounce("Please,Select Option");
        } else {
          Pronounce("Please, Input the word");
        }
      }
    }
    setCheckConfirm(0);
  };
  const handleSubmit = () => {
    if (answer[`Q${currentQuestion + 1}`] !== "") {
      alert("submitted");
    } else {
      Pronounce("Please, Input the word");
    }
  };
  return (
    <div className="h-[60vh] rounded-[2rem] w-[70vw] bg-green-200 flex-col">
      {currentQuestion < question.length ? (
        <div>
          {currentQuestion < 6 ? (
            <SpellLetter />
          ) : (
            <div>
              {currentQuestion < 11 ? (
                <ChoosePronouncation Pronounce={Pronounce} />
              ) : (
                <ListeningTyping Pronounce={Pronounce} />
              )}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      <div>
        {/* {currentQuestion} */}
        {/* <div>
          <button onClick={handleConfirm}>Confirm</button>
        </div> */}
        <div className="flex justify-center items-center">
          {currentQuestion >= 15 ? (
            <button
              className="bg-blue-500 w-[300px] h-[60px] flex justify-center text-white rounded-[2rem] hover:cursor-pointer hover:bg-blue-300 items-center font-bold text-[2rem]"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-blue-500 w-[300px] h-[60px] flex justify-center text-white rounded-[2rem] hover:cursor-pointer hover:bg-blue-300 items-center font-bold text-[2rem]"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
