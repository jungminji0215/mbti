import React from "react";
import { Link } from "react-router-dom";
import { TEST } from "../../utils/routes";
import useUserStore from "../../zustand/userStore";

const Home = () => {
  const { user } = useUserStore();

  console.log("Home user:>> ", user);

  return (
    <div className="flex flex-col	items-center">
      <h2>무료 성격 테스트</h2>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.</p>
      <Link to={TEST} className="">
        내 성격 알아보러 가기
      </Link>
    </div>
  );
};

export default Home;
