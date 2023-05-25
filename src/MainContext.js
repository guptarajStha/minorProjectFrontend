import React, { useState, useContext, createContext, Children } from "react";
// import App from "./App";
import Test from "./Pages/Test";
import App from "./App";

export const mContext = createContext();
const MainContext = () => {
  const question = [
    "bedbug",
    "adverb",
    "newmew",
    "forbid",
    "liquor",
    "universe",
    "very",
    "could",
    "does",
    "from",
    "was",
    "school",
    "lion",
    "help",
    "hospital",
    "wednesday",
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer,setAnswer]=useState({
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: "",
    Q7: "",
    Q8: "",
    Q9: "",
    Q10: "",
    Q11: "",
    Q12: "",
    Q13: "",
    Q14: "",
    Q15: "",
    Q16: "",
  })
  const [checkConfirm, setCheckConfirm] = useState(0);
  const handleConfirm=(value)=>{
      if(currentQuestion<6){
        const removeDot = value.replace(/\./g,"");
        const removeSpaces = removeDot.replace(/\s/g,"")
        setAnswer(prevAnswer=>({
          ...prevAnswer,[`Q${currentQuestion+1}`]:removeSpaces.toLowerCase()
        }))
        setCheckConfirm(1)
      }
      else if(currentQuestion<11){
        setAnswer(prevAnswer=>({...prevAnswer,[`Q${currentQuestion+1}`]:value}))
      }
      else{
        if(value===question[currentQuestion]){
          setAnswer((prevAnswer) => ({
            ...prevAnswer,
            [`Q${currentQuestion + 1}`]: '1',
          }));
        }
        else{
          setAnswer((prevAnswer) => ({
            ...prevAnswer,
            [`Q${currentQuestion + 1}`]: '0',
          }));
        }
      }
  }
  return <div>
    <mContext.Provider value={{question,currentQuestion,setCurrentQuestion,answer,setAnswer,handleConfirm,checkConfirm,setCheckConfirm}}>
        <App />
    </mContext.Provider>
  </div>;
};

export default MainContext;
