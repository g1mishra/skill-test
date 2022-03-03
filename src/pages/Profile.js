import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDetails, updateUserData } from "../axios";

const Profile = () => {
  const { id } = useParams();
  const [state, setState] = useState();

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (id) {
      fetchUserDetails(id).then((res) => {
        setUserData(res.data);
      });
    }
  }, []);

  const addJob = (e) => {
    //   api call here to add
    e.preventDefault();
    updateUserData(id, { ...userData, job: state.job }).then((res) => {
      if (res.status === 200) {
        console.log("res", res);
        alert("Data updated")
      }
    });
    setUserData({ ...userData, job: state.job });
  };

  if (id) {
    return (
      <div>
        <div className="w-[300px] broder ronded flex justify-center">
          {userData && (
            <div>
              <img src={userData.avatar} />
              <p>First name : {userData.first_name} </p>
              <p>Last name : {userData.last_name} </p>
              <p>Email : {userData.email} </p>
              <p>Job : {userData.job || "None"} </p>
            </div>
          )}
        </div>
        {userData && !userData.job && (
          <Fragment>
            <input
              placeholder="job"
              className="border p-2 m-2 rounded"
              onChange={(e) => setState({ ...state, job: e.target.value })}
            />
            <button
              className="bg-blue-500 py-2 px-4 text-white rounded"
              onClick={addJob}
            >
              Add Job
            </button>
          </Fragment>
        )}
      </div>
    );
  } else {
    <h1> page not found</h1>;
  }
};

export default Profile;
