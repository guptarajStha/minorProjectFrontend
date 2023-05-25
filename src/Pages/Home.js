import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-[60vh] rounded-[2rem] w-[70vw] bg-green-200 p-10 flex justify-center items-center">
      <div className="flex-col">
        <div>Description</div>
        <div className="bg-blue-500 w-[200px] h-[50px] flex justify-center text-white rounded-[1rem] hover:cursor-pointer hover:bg-blue-300 items-center">
          <Link className="w-full h-full flex justify-center items-center" to={"/test/"}>Take Test</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
