import axios from "axios";

export const uploadResume = (userUID, formData) => {
  //return axios.post("https://interview-easy-v1-back-end.herokuapp.com/upload",

  return axios.post(
    // "http://localhost:3001/upload",
    "https://interview-easy-v1-back-end.herokuapp.com/upload",
    //return axios.post(
    //"https://interview-easy-back.herokuapp.com/upload",
    formData,
    {
      headers: {
        "user-id": userUID,
      },
    }
  );
};

export const fetchResume = (otherUserUID) => {
  // return axios.get(`http://localhost:3001/resume/${otherUserUID}`);
  return axios.get(`https://interview-easy-v1-back-end.herokuapp.com/resume/${otherUserUID}`);

};
