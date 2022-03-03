import { useEffect, useState } from "react";
import { addUser } from "../axios";

const AddUser = () => {
  const [state, setState] = useState();
  // useEffect(() => {
  //   alert("hii");
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(state).then((res) => {
      if (res.status === 201) {
        console.log("res", res);
        alert("User added");
        setState();
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          placeholder="name"
          className="border p-2 m-2"
          value={state?.name || ""}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <input
          placeholder="email"
          className="border p-2 m-2"
          type={"email"}
          value={state?.email || ""}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <input
          placeholder="job"
          className="border p-2 m-2"
          value={state?.job || ""}
          onChange={(e) => setState({ ...state, job: e.target.value })}
        />
        <button className="bg-blue-500 py-2 px-4 text-white rounded">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
