import React, { useContext, useState,useEffect } from "react";
import { mContext } from "../MainContext";
import { HiSpeakerWave } from "react-icons/hi2";
const ChoosePronouncation = ({ Pronounce }) => {
  const { question, currentQuestion, setCurrentQuestion, handleConfirm } =
    useContext(mContext);
  const value = [
    { very: ["very", "every"] },
    { could: ["could", "cloud"] },
    { does: ["dose", "does"] },
    { from: ["form", "from"] },
    { was: ["was", "saw"] },
  ];
  const [optionCheck, setOptionCheck] = useState('');
  const [storeAns, setStoreAns] = useState("");
  useEffect(() => {
  setStoreAns('')
  setOptionCheck('')
  }, [currentQuestion]);

  const handlePronounce = (data) => {
    const value1 = value[currentQuestion - 6][question[currentQuestion]][data];
    Pronounce(value1);
    if (value1 === question[currentQuestion]) {
      setStoreAns(1);
    } else {
      setStoreAns(0);
    }
    setOptionCheck(data)
  };

  // const handlePronounce = (data) => {
  //   const value1 = value[currentQuestion - 6][question[currentQuestion]][data];
  //   Pronounce(value1);
  // };
  // const handleOption = (data) => {
  //   const value1 = value[currentQuestion - 6][question[currentQuestion]][data];
    // if (value1 === question[currentQuestion]) {
    //   setStoreAns(1);
    // } else {
    //   setStoreAns(0);
    // }
    // setOptionCheck(data)
  // };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-white rounded-t-[2rem] w-full h-[4rem] flex justify-center items-center text-[2rem]">
        Choose Pronouncation
      </div>
      <div className="flex h-[20rem] w-full p-4 space-x-10">
        <div className="w-[50%] bg-gray-100 flex justify-center items-center text-[4rem] rounded-[2rem]">
          {question[currentQuestion]}
        </div>
        <div className="w-[50%] bg-green-500 rounded-[2rem] p-4 space-y-8 flex-col flex justify-center items-center">
          <div className="flex space-x-10">
            <div
              className={`${optionCheck===0?"bg-slate-700 text-white":"bg-white text-black hover:bg-gray-200"} h-[3rem] flex justify-center items-center w-[98px] hover:cursor-pointer `}
              // onClick={() => handleOption(0)}
              // onMouseEnter={() => handlePronounce(0)}
              onClick={()=>handlePronounce(0)}
            >
              LISTEN
              <HiSpeakerWave />
            </div>
            <div
              className={`${optionCheck===1?"bg-slate-700 text-white":"bg-white text-black hover:bg-gray-200"} h-[3rem] flex justify-center items-center w-[98px] hover:cursor-pointer `}
              // onClick={() => handleOption(1)}
              // onMouseEnter={() => handlePronounce(1)}
              onClick={()=>handlePronounce(1)}
            >
              LISTEN
              <HiSpeakerWave />
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 w-[200px] h-[50px]  flex justify-center text-white rounded-[1rem] hover:cursor-pointer hover:bg-blue-300 items-center font-bold text-[1.2rem]" onClick={() => handleConfirm(storeAns)}>Confirm</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChoosePronouncation;
