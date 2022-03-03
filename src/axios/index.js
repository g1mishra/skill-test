import axios from "axios";
const SERVER_PATH = "https://reqres.in/api/";

export const fetchUserByPage = (pageNo = 1) => {
  return axios.get(`${SERVER_PATH}users?page=${pageNo}`).then(
    (res) => {
      return res.data;
    },
    (err) => {
      console.error("error", err);
    }
  );
};

export const fetchUserDetails = (userId) => {
  return axios.get(`${SERVER_PATH}users/${userId}`).then(
    (res) => {
      return res.data;
    },
    (err) => {
      console.error("error", err);
    }
  );
};

export const updateUserData = (userId, data) => {
  return axios.patch(`${SERVER_PATH}users/${userId}`, data).then(
    (res) => {
      return res;
    },
    (err) => {
      console.error("error", err);
    }
  );
};

export const addUser = (data) => {
  return axios.post(`${SERVER_PATH}users`, data).then(
    (res) => {
      return res;
    },
    (err) => {
      console.error("error", err);
    }
  );
};

// https://reqres.in/api/users?page=1
