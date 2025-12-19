import axios from "axios";


export const getStoneList = (title) => {
  return axios.get("http://localhost:5001/stones", { params: { title: title } });
};

export const getStoneTypes = () => {
  return axios.get("https://localhost:5001/stonetypes");
};

export const getDetailedStoneInfo = (stoneId) => {
  return axios.get(`http://localhost:5001/stones/${stoneId}`);
};