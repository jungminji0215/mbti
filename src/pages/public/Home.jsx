import React from "react";
import { Link } from "react-router-dom";
import { TEST } from "../../utils/routes";
import useUserStore from "../../zustand/userStore";

const Home = () => {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col	items-center mt-11 gap-14">
      <h2 className="font-semibold text-4xl ">무료 성격 테스트</h2>

      <p className="text-lg	">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.
      </p>

      <div className="flex items-center justify-center gap-20">
        <div className="flex flex-col justify-center w-80 h-36	gap-5 bg-gray-300	p-3	rounded-lg">
          <h3 className="text-xl">성격 유형 검사</h3>
          <p className="leading-normal">
            자신의 성격 유형을 파악하고 싶은 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>

        <div className="flex flex-col justify-center  w-80 h-36	gap-5 bg-gray-300	p-3	rounded-lg">
          <h3 className="text-xl">성격 유형 이해</h3>
          <p className="leading-normal">
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col justify-center w-80 h-36	gap-5 bg-gray-300	p-3	rounded-lg">
          <h3 className="text-xl">팀 평가</h3>
          <p className="leading-normal">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>

      <Link
        to={TEST}
        className="border-solid border-2 p-3 rounded-lg  border-rose-500"
      >
        내 성격 알아보러 가기
      </Link>
    </div>
  );
};

export default Home;
