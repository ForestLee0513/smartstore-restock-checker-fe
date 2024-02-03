"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const KakaoAuth = () => {
  const KAKAO_AUTH_CODE = useSearchParams().get("code");

  useEffect(() => {
    const getToken = async () => {
      const response = await axios.post("http://localhost:5002/auth/kakao", {
        code: KAKAO_AUTH_CODE,
        redirect_uri: process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI,
      });

      console.log(response);
    };

    getToken();
  }, [KAKAO_AUTH_CODE]);

  return <div>kakao auth</div>;
};

export default KakaoAuth;
