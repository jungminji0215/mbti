import mbtiTestInstance from "../axiosinstance/mbtiTestInstance";

export const getTestResults = async () => {
  return await mbtiTestInstance.get("/testResults");
};

export const createTestResult = async (resultData) => {
  return await mbtiTestInstance.post("/testResults", resultData);
};

export const deleteTestResult = async (id) => {
  await mbtiTestInstance.delete(`${"/testResults"}/${id}`);
};

export const updateTestResultVisibility = async (id, visibility) => {
  return await mbtiTestInstance.patch(`${"/testResults"}/${id}`, {
    visibility: visibility,
  });
};
