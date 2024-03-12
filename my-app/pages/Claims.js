import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiDotsVertical } from "react-icons/hi";
import { PiArrowSquareRightLight } from "react-icons/pi";
import { PiArrowSquareLeftLight } from "react-icons/pi";
import Link from "next/link";

const Claims = () => {
  const [Accepted, SetAccepted] = useState(true);
  const [Pending, SetPending] = useState();
  const [Review, SetReview] = useState();
  const [Progress, SetProgress] = useState();
  const [Completed, SetCompleted] = useState();
  const [Drafts, SetDrafts] = useState();
  const [Id, SetId] = useState([]);
  const [Accepteddata, setAcceptedData] = useState([]);
  const [Pendingdata, setPendingdata] = useState([]);
  const [Reviewdata, setReviewdata] = useState([]);
  const [Progressdata, setProgressdata] = useState([]);
  const [Completeddata, setCompleteddata] = useState([]);
  const [Draftsdata, setDraftsdata] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {
        console.error("Unable to retrieve User", error);
        window.location.href = '/'
      }
    };
    fetchData();
  }, []);


  const handleAccepted = () => {
    SetAccepted(true);
    SetPending(false);
    SetReview(false);
    SetProgress(false);
    SetCompleted(false);
    SetDrafts(false);
  };

  const handlePending = () => {
    SetAccepted(false);
    SetPending(true);
    SetReview(false);
    SetProgress(false);
    SetCompleted(false);
    SetDrafts(false);
  };

  const handleReview = () => {
    SetAccepted(false);
    SetPending(false);
    SetReview(true);
    SetProgress(false);
    SetCompleted(false);
    SetDrafts(false);
  };

  const handleProgress = () => {
    SetAccepted(false);
    SetPending(false);
    SetReview(false);
    SetProgress(true);
    SetCompleted(false);
    SetDrafts(false);
  };

  const handleCompleted = () => {
    SetAccepted(false);
    SetPending(false);
    SetReview(false);
    SetProgress(false);
    SetCompleted(true);
    SetDrafts(false);
  };

  const handleDrafts = () => {
    SetAccepted(false);
    SetPending(false);
    SetReview(false);
    SetProgress(false);
    SetCompleted(false);
    SetDrafts(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user");
        const userId = response.data.id;
        SetId(userId);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchAcceptedData = async () => {
      try {
        const User = await axios.get(
          `http://127.0.0.1:1337/api/users/${Id}?populate=accepteds.CarImage`
        );
        const UserData = User.data.accepteds;
        setAcceptedData(UserData);

      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };

    if (Id) {
      fetchAcceptedData();
    }
  }, [Id]);

  useEffect(() => {
    const fetchPeningData = async () => {
      try {
        const User = await axios.get(
          `http://127.0.0.1:1337/api/users/${Id}?populate=pendings`
        );
        const UserData = User.data.pendings;
        setPendingdata(UserData);
      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };

    if (Id) {
      fetchPeningData();
    }
  }, [Id]);


  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const User = await axios.get(
          `http://127.0.0.1:1337/api/users/${Id}?populate=reviews`
        );

        const UserData = User.data.reviews;
        setReviewdata(UserData);

      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };

    if (Id) {
      fetchReviewData();
    }
  }, [Id]);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const User = await axios.get(
          `http://127.0.0.1:1337/api/users/${Id}?populate=progresses`
        );
        const UserData = User.data.progresses;
        setProgressdata(UserData);
      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };

    if (Id) {
      fetchProgressData();
    }
  }, [Id]);

  useEffect(() => {
    const fetchCompletedData = async () => {
      try {
        const User = await axios.get(
          `http://127.0.0.1:1337/api/users/${Id}?populate=completeds`
        );
        const UserData = User.data.completeds;
        setCompleteddata(UserData);
      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };

    if (Id) {
      fetchCompletedData();
    }
  }, [Id]);

  useEffect(() => {
    const fetchDraftsData = async () => {
      try {
        const User = await axios.get(
          `http://127.0.0.1:1337/api/users/${Id}?populate=drafts`
        );
        const UserData = User.data.drafts;
        setDraftsdata(UserData);
      } catch (error) {
        console.error("Error fetching data2:", error);
      }
    };

    if (Id) {
      fetchDraftsData();
    }
  }, [Id]);
  
  if (!user) {
    return (

    <Link href='/'>Please Sign In back by clicking here</Link>
    )
  }
 


  return (

   

  
    <div className="mx-4 bg-white h-[60%] ml-64 rounded-xl shadow-xl px-10 py-4 w-[1160px] relative">
       {user && 
    <div>
     
      <div>
        
        <ul className="flex justify-between">
          <li className="text-4xl font-semibold underline decoration-4  decoration-sky-400 underline-offset-8">
            My Claims
          </li>
          <button className="bg-sky-400 w-36 h-12 rounded-xl text-white">
            New Claims
          </button>
        </ul>
      </div>
    
      <div className="mt-10 ">
        <ul className="flex justify-evenly cursor-pointer">
          <div >
            <li
              className={`text-gray-400 ${
                Accepted &&
                "underline decoration-sky-400 underline-offset-8 text-black decoration-4"
              }`}
              onClick={handleAccepted}
            >
              Accepted
            </li>
            {Accepted && Accepteddata && (
              <div className="grid grid-cols-2 grid-rows-2 absolute gap-4 w-[100%] h-[400px] left-0 mt-20">
                {Accepteddata.map((claim) => (
                  <div className="flex flex-col space-y-4 shadow-xl rounded-xl p-3" key={claim.id}>
                    <div className="flex justify-between ">
                      <div className="flex gap-4">
                        <img 
                        src={`http://127.0.0.1:1337${claim.CarImage.url}`}
                        alt="No Image Found"
                        className="w-14 h-14 rounded-xl"/>
                        <div className="text-sm mt-2">{claim.CarName} (Year: {claim.CarMake})
                        <p className="text-[10px] opacity-50">Vehicle Number: {claim.VehicleNo}</p>  </div>
                      </div>
                      
                      <div><HiDotsVertical className="text-gray-400" /></div>
                    </div>
                    <div className="flex justify-between"> 
                      <div><p className="text-[10px]">Claim Date</p> <p className="text-[11px]">{claim.ClaimDate}</p></div>
                      <div><p className="text-[10px]">Claim Number</p> <p className="text-[11px]">{claim.ClaimNumber}</p></div>
                      <div><p className="text-[10px]">Policy Number</p> <p className="text-[11px]">{claim.PolicyNumber}</p></div>
                    </div>
                    <div className="flex justify-between">
                      <div> <p className="text-[10px]">Insurance Company</p> <p className="text-[11px]">Akko Insurance Pvt. Ltd.</p></div>
                      <div className="bg-sky-400 w-28 h-8 rounded-xl flex justify-center items-center "><Link href='' className=" text-white">View Report</Link></div>
                    </div>
                   
                  </div>
                  
                ))}
                <div className="absolute right-0 -bottom-20 p-4 flex items-center font-bold text-sm gap-4 cursor-pointer">Page 1-20
                
                <PiArrowSquareLeftLight size={30} className="text-sky-400 " />
                <PiArrowSquareRightLight  size={30} className="text-sky-400"/>
                </div>
              </div>
              
            )}
          </div>

          <div>

          <li
            className={`text-gray-400 ${
              Pending &&
              "underline decoration-sky-400 underline-offset-8 text-black decoration-4"
            }`}
            onClick={handlePending}
          >
            Pending
          </li>
          {Pending && Pendingdata && (
              <div className="absolute flex  w-[70%] bg-red-400">
                {Pendingdata.map((claim) => (
                  <div key={claim.id}>
                    <p>Car Name: {claim.CarName}</p>
                  </div>
                ))}
              </div>
            )}
            </div>
            <div>
          <li
            className={`text-gray-400 ${
              Review &&
              "underline decoration-sky-400 underline-offset-8 text-black decoration-4"
            }`}
            onClick={handleReview}
          >
            Under Review
          </li>
          {Review && Reviewdata && (
              <div className="absolute flex  w-[70%] bg-red-400">
                {Reviewdata.map((claim) => (
                  <div key={claim.id}>
                    <p>Car Name: {claim.CarName}</p>
                  </div>
                ))}
              </div>
            )}
            </div>
            <div>
          <li
            className={`text-gray-400 ${
              Progress &&
              "underline decoration-sky-400 underline-offset-8 text-black decoration-4"
            }`}
            onClick={handleProgress}
          >
            In Progress
          </li>
          {Progress && Progressdata && (
              <div className="absolute flex  w-[70%] bg-red-400">
                {Progressdata.map((claim) => (
                  <div key={claim.id}>
                    <p>Car Name: {claim.CarName}</p>
                  </div>
                ))}
              </div>
            )}
            </div>
            <div>
          <li
            className={`text-gray-400 ${
              Completed &&
              "underline decoration-sky-400 underline-offset-8 text-black decoration-4"
            }`}
            onClick={handleCompleted}
          >
            Completed
          </li>
          {Completed && Completeddata && (
              <div className="absolute flex bg-red-400">
                {Completeddata.map((claim) => (
                  <div key={claim.id}>
                    <p>Car Name: {claim.CarName}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
          <li
            className={`text-gray-400 ${
              Drafts &&
              "underline decoration-sky-400 underline-offset-8 text-black decoration-4"
            }`}
            onClick={handleDrafts}
          >
            Drafts
          </li>
          {Drafts && Draftsdata && (
              <div className="absolute flex bg-red-400">
                {Draftsdata.map((claim) => (
                  <div key={claim.id}>
                    <p>Car Name: {claim.CarName}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ul>
      </div>

                

      <div className="bg-gray-400 h-[2px] mt-[3px] "></div>
      </div>}
                
    </div>
                     
  );
                
};


export default Claims;
