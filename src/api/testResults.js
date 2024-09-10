import mbtiTestInstance from "../axiosinstance/mbtiTestInstance";

/** 모든 테스트 조회 */
export const getTestResults = async () => {
  return await mbtiTestInstance.get("/testResults");
};

/** 테스트 결과 생성 */
export const createTestResult = async (resultData) => {
  return await mbtiTestInstance.post("/testResults", resultData);
};

/** 결과 데이터 삭제 */
export const deleteTestResult = async (id) => {
  await mbtiTestInstance.delete(`${"/testResults"}/${id}`);
};

/** 보이기 설정 */
export const updateTestResultVisibility = async (id, visibility) => {
  return await mbtiTestInstance.patch(`${"/testResults"}/${id}`, {
    visibility: visibility,
  });
};
