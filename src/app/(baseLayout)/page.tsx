"use client";
import Button from "../_components/Button";

const Home = () => {
  const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_LOGIN_REDIRECT_URI =
    process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI;

  return (
    <div className="col-span-4 pc:col-start-3">
      <h1>리노티</h1>
      <p>품절된 상품의 재입고 알림을 원활하게 받기 위해 로그인해주세요.</p>
      <Button
        color="custom"
        className="w-full text-[black] text-opacity-[85%] rounded-[12px] bg-[#FEE500] font-normal"
        onClick={() => {
          window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_LOGIN_REDIRECT_URI}&response_type=code`;
        }}
      >
        카카오 로그인
      </Button>
    </div>
  );
};

export default Home;
