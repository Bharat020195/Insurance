import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import { GoDotFill } from "react-icons/go";
import "../app/globals.css";
import Select from "react-select";
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";

const Vehicle = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [initial, SetInitial] = useState(true);
  const [incident, SetIncident] = useState();
  const [questions, SetQuestions] = useState();
  const [Review, Setreview] = useState();
  const [Questions2, SetQuestions2] = useState();
  const [Questions3, SetQuestions3] = useState();
  const [Questions4, SetQuestions4] = useState();
  const [Questions5, SetQuestions5] = useState();
  const [Questions6, SetQuestions6] = useState();
  const [Questions7, SetQuestions7] = useState();
  const [Questions8, SetQuestions8] = useState();

  const options = [
    { label: "Maruti" },
    { label: "Ford" },
    { label: "Hyundai" },
    { label: "TaTa" },
    { label: "Toyoto" },
    { label: "BMW" },
    { label: "Benz" },
    { label: "Chevrolet" },
    { label: "Mistubushi" },
    { label: "Mahindra" },
    { label: "Honda" },
    { label: "Renault" },
    { label: "Skoda" },
    { label: "MG" },
    { label: "Kia" },
  ];

  const Years = [
    { label: "2010" },
    { label: "2011" },
    { label: "2012" },
    { label: "2013" },
    { label: "2014" },
    { label: "2015" },
    { label: "2016" },
    { label: "2017" },
    { label: "2018" },
    { label: "2019" },
    { label: "2020" },
    { label: "2021" },
    { label: "2022" },
    { label: "2023" },
    { label: "2024" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      outline: "none",
      textDecoration: "none",
      border: "none",
    }),
  };

  const handleIncident = () => {
    SetInitial(false);
    SetIncident(true);
  };

  const handleQuestions = () => {
    SetInitial(false);
    SetIncident(false);
    SetQuestions(true);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleQuestions2 = () => {
    SetQuestions(false);
    SetQuestions2(true);
  };

  const handleQuestions3 = () => {
    SetQuestions(false);
    SetQuestions2(false);
    SetQuestions3(true)
  }
  const handleQuestions4 = () => {
    SetQuestions(false);
    SetQuestions2(false);
    SetQuestions3(false)
    SetQuestions4(true)
  }
  const handleQuestions5 = () => {
    SetQuestions(false);
    SetQuestions2(false);
    SetQuestions3(false)
    SetQuestions4(false)
    SetQuestions5(true)
  }
  const handleQuestions6 = () => {
    SetQuestions(false);
    SetQuestions2(false);
    SetQuestions3(false)
    SetQuestions4(false)
    SetQuestions5(false)
    SetQuestions6(true)
  }
  const handleQuestions7 = () => {
    SetQuestions(false);
    SetQuestions2(false);
    SetQuestions3(false)
    SetQuestions4(false)
    SetQuestions5(false)
    SetQuestions6(false)
    SetQuestions7(true);
  }
  const handleQuestions8 = () => {
    SetQuestions(false);
    SetQuestions2(false);
    SetQuestions3(false)
    SetQuestions4(false)
    SetQuestions5(false)
    SetQuestions6(false)
    SetQuestions7(false);
    SetQuestions8(true)
  }
  return (
    <div className="relative w-full min-h-screen bg-sky-50">
      <div>
        <Header1 />
      </div>
      <div>
        <Header2 />
      </div>
      <div className="absolute w-[82%] mr-4 my-4 right-0 flex flex-col p-10 bg-white h-full space-y-20">
        <div className="text-3xl font-semibold underline decoration-sky-400 underline-offset-8 decoration-[6px]">
          Add New Claim
        </div>
        <div className="flex justify-evenly items-center cursor-pointer">
          <div className="space-y-6">
            <div className="flex items-center">
              <GoDotFill
                size={30}
                className="text-white bg-sky-400 rounded-full"
              />
              <div className="h-1 w-44 bg-sky-400"></div>
            </div>
            <div className="text-xl  left-10 text-sky-400">
              Initial/Vehicle Info
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center ">
              <GoDotFill
                size={30}
                className="text-white bg-sky-400 rounded-full"
              />
              <div className="h-1 w-44 bg-sky-400"></div>
            </div>
            <div className="text-xl text-sky-400">Incident/Driver Info</div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center ">
              <GoDotFill
                size={30}
                className="text-white bg-sky-400 rounded-full"
              />
              <div className="h-1 w-44 bg-sky-400"></div>
            </div>
            <div className="text-xl text-sky-400">Series of Questions</div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <GoDotFill
                size={30}
                className="text-white bg-sky-400 rounded-full"
              />
              <div className="h-1 w-44 bg-sky-400"></div>
            </div>
            <div className="text-xl  text-sky-400">Review</div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center ">
              <GoDotFill
                size={30}
                className="text-white bg-sky-400 rounded-full"
              />
            </div>
            <div className="text-xl text-sky-400">Submission</div>
          </div>
        </div>
        {initial && (
          <div>
            <div className="space-y-10">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Initial Information
              </div>
              <div className="space-y-10">
                <div className="flex gap-10 justify-between">
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <FaCarSide size={30} className="text-sky-400" />
                    <Select
                      placeholder="Vehicle Make"
                      options={options}
                      className="w-64"
                      styles={customStyles}
                    />
                  </div>
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <FaCarSide size={30} className="text-sky-400" />
                    <Select
                      placeholder="Vehicle Model"
                      options={Years}
                      className="w-64"
                      styles={customStyles}
                    />
                  </div>
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <FaLocationDot size={30} className="text-sky-400" />
                    <input
                      placeholder="Location"
                      className="w-64 outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-16">
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <MdDateRange size={30} className="text-sky-400" />
                    <input
                      placeholder="Date"
                      type="date"
                      className="w-64 outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <MdAccessTimeFilled size={30} className="text-sky-400" />
                    <input
                      placeholder="Time"
                      type="time"
                      className="w-64 outline-none"
                    />
                  </div>
                </div>
              </div>
              <button
                className="bg-sky-400 w-56 h-14 text-white rounded-xl right-10 absolute"
                onClick={handleIncident}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {incident && (
          <div>
            <div className="space-y-10">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Incident Information
              </div>
              <div className="space-y-10">
                <div className="flex gap-10 justify-between">
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <IoPerson size={30} className="text-sky-400" />
                    <input
                      placeholder="Driver Name"
                      options={options}
                      className="w-64"
                      styles={customStyles}
                    />
                  </div>
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <CiCreditCard1 size={30} className="text-sky-400" />
                    <input
                      placeholder="License Number"
                      options={Years}
                      className="w-64"
                      styles={customStyles}
                    />
                  </div>
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <FaLocationDot size={30} className="text-sky-400" />
                    <input
                      placeholder="Location"
                      className="w-64 outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-16">
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <MdDateRange size={30} className="text-sky-400" />
                    <input
                      placeholder="Date of Birth"
                      type="date"
                      className="w-64 outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2 shadow-lg w-80 rounded-xl h-16 p-4 ">
                    <MdAccessTimeFilled size={30} className="text-sky-400" />
                    <input
                      placeholder="Age"
                      type="time"
                      className="w-64 outline-none"
                    />
                  </div>
                </div>
              </div>
              <button
                className="bg-sky-400 w-56 h-14 text-white rounded-xl right-10 absolute"
                onClick={handleQuestions}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {questions && (
          <div className="space-y-10">
            <div className="flex justify-between">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Questions 1
              </div>
              <div className="text-[10px] text-gray-400 border p-2 h-8 rounded-2xl">
                Questions- 1/8
              </div>
            </div>

            <div>
              <div>Is the Driver under 18 years Age? </div>
              <div className="space-x-10">
                <input
                  type="radio"
                  value="Yes"
                  checked={selectedOption === "Yes"}
                  onChange={handleOptionChange}
                />
                Yes
                <input
                  type="radio"
                  value="No"
                  checked={selectedOption === "No"}
                  onChange={handleOptionChange}
                />
                No
              </div>
              <div
                className="bg-sky-400 absolute right-10 bottom-40 w-56 h-14 rounded-xl flex text-white justify-center "
                onClick={handleQuestions2}
              >
                <button>Next</button>
              </div>
            </div>
          </div>
        )}
        {Questions2 && (
          <div className="space-y-10">
            <div className="flex justify-between">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Questions 2
              </div>
              <div className="text-[10px] text-gray-400 border p-2 h-8 rounded-2xl">
                Questions- 2/8
              </div>
             
            </div>
            <div className="space-y-10"> 
                <div>Is the Vehicle Drivable?</div>
                <div className="space-y-4">
                <div> <input type='checkbox' /> Yes, it is drivable</div>
                <div> <input type='checkbox' /> No, it is not drivable</div>
                </div>
              </div>
              <div
                className="bg-sky-400 absolute right-10 bottom-40 w-56 h-14 rounded-xl flex text-white justify-center "
                onClick={handleQuestions3}
              >
                <button>Next</button>
              </div>
          </div>
        )}
    

      {Questions3 && (
          <div className="space-y-10">
            <div className="flex justify-between">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Questions 3
              </div>
              <div className="text-[10px] text-gray-400 border p-2 h-8 rounded-2xl">
                Questions- 3/8
              </div>
             
            </div>
            <div className="space-y-10"> 
                <div>Is the Vehicle Drivable?</div>
                <div className="space-y-4">
                <div> <input type='checkbox' /> Yes, it is drivable</div>
                <div> <input type='checkbox' /> No, it is not drivable</div>
                </div>
              </div>
              <div
                className="bg-sky-400 absolute right-10 bottom-40 w-56 h-14 rounded-xl flex text-white justify-center "
                onClick={handleQuestions4}
              >
                <button>Next</button>
              </div>
          </div>
        )}
        
        {Questions4 && (
          <div className="space-y-10">
            <div className="flex justify-between">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Questions 4
              </div>
              <div className="text-[10px] text-gray-400 border p-2 h-8 rounded-2xl">
                Questions- 4/8
              </div>
             
            </div>
            <div className="space-y-10"> 
                <div>Is the Vehicle Drivable?</div>
                <div className="space-y-4">
                <div> <input type='checkbox' /> Yes, it is drivable</div>
                <div> <input type='checkbox' /> No, it is not drivable</div>
                </div>
              </div>
              <div
                className="bg-sky-400 absolute right-10 bottom-40 w-56 h-14 rounded-xl flex text-white justify-center "
                onClick={handleQuestions5}
              >
                <button>Next</button>
              </div>
          </div>
        )}

{Questions5 && (
          <div className="space-y-10">
            <div className="flex justify-between">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Questions 5
              </div>
              <div className="text-[10px] text-gray-400 border p-2 h-8 rounded-2xl">
                Questions- 5/8
              </div>
             
            </div>
            <div className="space-y-10"> 
                <div>Is the Vehicle Drivable?</div>
                <div className="space-y-4">
                <div> <input type='checkbox' /> Yes, it is drivable</div>
                <div> <input type='checkbox' /> No, it is not drivable</div>
                </div>
              </div>
              <div
                className="bg-sky-400 absolute right-10 bottom-40 w-56 h-14 rounded-xl flex text-white justify-center "
                onClick={handleQuestions6}
              >
                <button>Next</button>
              </div>
          </div>
        )}

{Questions6 && (
          <div className="space-y-10">
            <div className="flex justify-between">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Questions 6
              </div>
              <div className="text-[10px] text-gray-400 border p-2 h-8 rounded-2xl">
                Questions- 6/8
              </div>
             
            </div>
            <div className="space-y-10"> 
                <div>Is the Vehicle Drivable?</div>
                <div className="space-y-4">
                <div> <input type='checkbox' /> Yes, it is drivable</div>
                <div> <input type='checkbox' /> No, it is not drivable</div>
                </div>
              </div>
              <div
                className="bg-sky-400 absolute right-10 bottom-40 w-56 h-14 rounded-xl flex text-white justify-center "
                onClick={handleQuestions7}
              >
                <button>Next</button>
              </div>
          </div>
        )}

{Questions7 && (
          <div className="space-y-10">
            <div className="flex justify-between">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Questions 7
              </div>
              <div className="text-[10px] text-gray-400 border p-2 h-8 rounded-2xl">
                Questions- 7/8
              </div>
             
            </div>
            <div className="space-y-10"> 
                <div>Is the Vehicle Drivable?</div>
                <div className="space-y-4">
                <div> <input type='checkbox' /> Yes, it is drivable</div>
                <div> <input type='checkbox' /> No, it is not drivable</div>
                </div>
              </div>
              <div
                className="bg-sky-400 absolute right-10 bottom-40 w-56 h-14 rounded-xl flex text-white justify-center "
                onClick={handleQuestions8}
              >
                <button>Next</button>
              </div>
          </div>
        )}

{Questions8 && (
          <div className="space-y-10">
            <div className="flex justify-between">
              <div className="text-3xl underline decoration-sky-400 underline-offset-8">
                Questions 8
              </div>
              <div className="text-[10px] text-gray-400 border p-2 h-8 rounded-2xl">
                Questions- 8/8
              </div>
             
            </div>
            <div className="space-y-10"> 
                <div>Is the Vehicle Drivable?</div>
                <div className="space-y-4">
                <div> <input type='checkbox' /> Yes, it is drivable</div>
                <div> <input type='checkbox' /> No, it is not drivable</div>
                </div>
              </div>
              <div
                className="bg-sky-400 absolute right-10 bottom-40 w-56 h-14 rounded-xl flex text-white justify-center "
              >
                <button>Next</button>
              </div>
          </div>
        )}
    </div>
    </div>
  );
};

export default Vehicle;
