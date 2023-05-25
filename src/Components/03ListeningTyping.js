import React, { useContext, useState } from "react";
import { mContext } from "../MainContext";
import { HiSpeakerWave } from "react-icons/hi2";
const ListeningTyping = ({ Pronounce }) => {
  const { question, currentQuestion, setCurrentQuestion, handleConfirm } =
    useContext(mContext);
  const [inputValue, setInputValue] = useState({
    val12: "",
    val13: "",
    val14: "",
    val15: "",
    val16: "",
  });
  const handleChange =(event)=>{
    setInputValue(prevVal=>({
      ...prevVal,[`val${currentQuestion+1}`]:event.target.value
    }))
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-white rounded-t-[2rem] w-full h-[4rem] flex justify-center items-center text-[2rem]">LISTENING AND TYPING TEST</div>
      <div className="flex h-[20rem] w-full p-4 space-x-10">
        <div className="w-[50%] hover:cursor-pointer bg-gray-100 flex justify-center items-center text-[4rem] rounded-[2rem]" onClick={() => Pronounce(`${question[currentQuestion]}`)}>
          <HiSpeakerWave />
        </div>
        <div className="w-[50%] space-y-6 bg-green-500 rounded-[2rem] p-4 flex-col flex justify-center items-center">
          <input
            className="bg-white w-[200px] p-4 text-center h-[2.5rem] flex justify-center items-center text-[1.5rem]"
            type="text"
            value={inputValue[`val${currentQuestion + 1}`]}
            name={`val${currentQuestion + 1} `}
            onChange={handleChange}
          />
        <div><button className="bg-blue-500 w-[200px] h-[50px]  flex justify-center text-white rounded-[1rem] hover:cursor-pointer hover:bg-blue-300 items-center font-bold text-[1.2rem]" onClick={()=>handleConfirm(inputValue[`val${currentQuestion+1}`])}>Confirm</button></div>
        </div>
    
      </div>
    </div>
  );
};

export default ListeningTyping;
