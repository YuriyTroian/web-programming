import axios from "axios";


// export const getStoneList = () => {
//   return axios.get("http://localhost:5001/get");
// };

// export const getStoneTypeData = () => {
//   return axios.get("https://localhost:5001/stonetypes");
// };

// export const getDetailedStoneInfo = (stoneId) => {
//   return axios.get(`http://localhost:5001/get/${stoneId}`);
// };






// export const getStoneList = (params = {}) => {
//   return axios.get("http://localhost:5001/get", {
//         params: params
//     });
// };

// export const getStoneTypeData = () => {
//   return axios.get("https://localhost:5001/stonetypes");
// };

// export const getDetailedStoneInfo = (stoneId) => {
//   return axios.get(`http://localhost:5001/get/${stoneId}`);
// };








export const getStoneList = (params = {}) => {
  // 🛑 ГОЛОВНА ЗМІНА:
  // Додаємо params як другий аргумент до axios.get.
  // Axios автоматично перетворить об'єкт {params: params} на рядок запиту (?name=Diamond&price=...)
  return axios.get("http://localhost:5001/get", {
        params: params
    });
};

export const getStoneTypeData = () => {
  return axios.get("https://localhost:5001/stonetypes");
};

export const getDetailedStoneInfo = (stoneId) => {
  return axios.get(`http://localhost:5001/get/${stoneId}`);
};