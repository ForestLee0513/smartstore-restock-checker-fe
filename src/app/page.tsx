"use client";

import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import Button from "./_components/Button";
import Image from "next/image";

interface productInfoType {
  price: string;
  priceCurrency: string;
  soldout: boolean;
  title: string;
  url: string;
}

export default function Home() {
  const [productList, setProductList] = useState<productInfoType[]>([]);
  const addProductToLocalStoraege = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    // TODO 상품 요청 전 중복상품이 있는 경우 필터링 처리
    event.preventDefault();
    const { data } = await axios.post("http://localhost:5001/get-product", {
      url: "https://brand.naver.com/roborock/products/9404680406",
    });
    setProductList((prevState) => {
      localStorage.setItem("productList", JSON.stringify(productList));
      return [...prevState, ...productList];
    });
  };

  // 로컬스토리지의 값을 스테이트로 지정
  useEffect(() => {
    const productListFromLocalStroage = localStorage.getItem("productList");

    if (productListFromLocalStroage) {
      setProductList(JSON.parse(productListFromLocalStroage));
    }
  }, []);

  return (
    <>
      <h1 className="col-span-4 pc:col-span-8">스마트스토어 재입고 알리미</h1>
      <form
        className="col-span-4 pc:col-span-8"
        onSubmit={addProductToLocalStoraege}
      >
        <div className="relative">
          <input
            className="text w-full border-[1px] border-main pc:text-h6 py-[12px] pl-[20px] pr-[44px] pc:py-[18px] pc:pl-[40px] pc:pr-[88px] rounded-full"
            type="url"
            name="storeUrl"
            placeholder="스마트(브랜드)스토어 URL을 입력해주세요."
          />
          <button className="absolute top-2/4 translate-y-[-50%] right-[20px] pc:right-[40px] w-[24px] h-[24px] pc:w-[34px] pc:h-[34px]">
            Add
          </button>
        </div>
      </form>
      <div className="col-span-4 pc:col-span-8 ml-[10px] pc:ml-[20px]">
        총 <span className="font-bold">2</span>개의 상품이 추가됐어요.
        <br />
        현재 구매 가능한 상품은 <span className="font-bold">1</span>개예요.
      </div>
      {/* 상품 리스트 map... */}
      <div className="shadow col-span-4 pc:col-span-2 rounded">
        <div className="mt-0 relative bg-secondary rounded-t h-[250px]">
          <Image
            src="https://shop-phinf.pstatic.net/20230808_47/1691469019058F849x_PNG/6394707006185423_1622034117.png?type=m510"
            alt={`product-thumbnail`}
            className="w-full h-auto m-0 object-fill bg-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="p-[10px] rounded">
          <h5 className="font-bold mb-1">Title</h5>
          <h6 className="font-bold mb-1">15,000원</h6>
          <Button color="primary" className="w-full">
            구매 페이지로 이동
          </Button>
        </div>
      </div>
      {/* <div className="shadow col-span-4 pc:col-span-2 rounded">
        <div className="mt-0 relative bg-secondary rounded-t h-[250px]">
          <Image
            src="https://shop-phinf.pstatic.net/20230808_47/1691469019058F849x_PNG/6394707006185423_1622034117.png?type=m510"
            alt={`product-thumbnail`}
            className="w-full h-auto m-0 object-fill bg-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="p-[10px] rounded">
          <h5 className="font-bold mb-1">Title</h5>
          <h6 className="font-bold mb-1">15,000원</h6>
          <Button color="primary" disabled className="w-full">
            품절
          </Button>
        </div>
      </div> */}
    </>
  );
}
