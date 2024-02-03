"use client";
import Button from "./_components/Button";

const Home = () => {
  const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_LOGIN_REDIRECT_URI =
    process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI;

  return (
    <div className="col-span-4 pc:col-span-8">
      welcome to renoti. please sign in with kakao account.
      <Button
        color="primary"
        onClick={() => {
          window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_LOGIN_REDIRECT_URI}&response_type=code`;
        }}
      >
        Signup
      </Button>
    </div>
  );
};

export default Home;
