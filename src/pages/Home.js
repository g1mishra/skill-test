import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUserByPage } from "../axios";

function Home() {
  const [userList, setUserList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = 2;

  useEffect(() => {
    fetchUserByPage(currentPage).then(
      (res) => {
        console.log(res);
        setUserList(res.data);
      },
      (err) => console.error(err)
    );
  }, [currentPage]);

  return (
    <Fragment>
      <div className="grid grid-cols-4 w-[500px] mx-auto py-4 gap-4 ">
        {(userList &&
          userList.length > 0 &&
          userList.map((user) => (
            <Link key={user.id} to={`/profile/${user.id}`}>
              <div className="border w-[100px]">
                <img src={user.avatar} className="max-h-[100px] w-full" />
                <p className="text-center py-2">{user.first_name}</p>
              </div>
            </Link>
          ))) ||
          "No data found"}
      </div>
      <div className="flex w-[500px] mx-auto">
        {[1, 2, 3].map((count) => (
          <button
            className={` w-[100] m-2 p-4 ${
              currentPage === count ? "bg-blue-500" : "bg-red-200"
            }`}
            key={count}
            onClick={() => setCurrentPage(count)}
          >
            {count}
          </button>
        ))}
      </div>
    </Fragment>
  );
}

export default Home;
