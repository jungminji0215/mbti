import axios from "axios";

const API_URL = "http://localhost:4000/testResults";

export const getTestResults = async () => {
  return await axios.get(API_URL);
};

export const createTestResult = async (resultData) => {};

export const deleteTestResult = async (id) => {};

export const updateTestResultVisibility = async (id, visibility) => {};
