import axios from "axios";

const API_URL = "http://localhost:4000/testResults";

export const getTestResults = async () => {
  return await axios.get(API_URL);
};

export const createTestResult = async (resultData) => {
  console.log("createTestResult resultData :>> ", resultData);
  return await axios.post(`${API_URL}`, resultData);
};

export const deleteTestResult = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateTestResultVisibility = async (id, visibility) => {
  console.log("id :>> ", id);
  console.log("visibility :>> ", visibility);
  return await axios.patch(`${API_URL}/${id}`, {
    visibility: visibility,
  });
};
