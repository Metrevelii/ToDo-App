import React, { Fragment } from "react";
// import Header from "../src/components/header/Header";

export default function Home() {
  return (
    <Fragment>
      <header className="bg-primaryBlue w-full flex justify-center items-center py-2.5">
        <h1 className="text-xl text-primaryWhite">To Do Application</h1>
      </header>
      <main className="w-10/12 flex justify-center items-center flex-col mt-20 m-auto">
        <header className="bg-darkGrayishBlue rounded w-full flex justify-center items-center py-3">
          <div className="w-3/12 flex justify-center items-center flex-col">
            <div>Icon</div>
            <p className="font-light text-2xl text-primaryWhite uppercase">My Tasks</p>
          </div>
        </header>
        <div className="w-full mt-2 px-2">
          <div>
            <nav className="">
              <div className="w-full flex justify-between items-center">
                <input placeholder="Type here to add new task item.." type="text" arial-label="description" className="w-full"></input>
                <button className="flex justify-center items-center p-2">OK</button>
              </div>
            </nav>
            <ul className="w-full mt-6 bg-primaryWhite">
              <li>
                <div className="flex justify-around items-center">
                  <div className="flex justify-center items-center w-8 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer"></input>
                  </div>
                  <div className="w-8/12 flex justify-start items-center">
                    <input placeholder="Edit todo item.." type="text" value="Task"></input>
                  </div>
                  <div className="flex justify-center items-center cursor-pointer">
                    <button>Delete</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

    </Fragment>
  );
}
