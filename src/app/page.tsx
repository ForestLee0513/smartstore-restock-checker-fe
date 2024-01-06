"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import Button from "./_components/Button";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { editModeState, selectedDeleteItemsState } from "@/recoil/EditMode";
import { productInfoType } from "@/types/product";

export default function Home() {
  const [productList, setProductList] = useState<productInfoType[]>([]);
  const [productUrl, setProductUrl] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);
  const editMode = useRecoilValue(editModeState);
  const [selectedDeleteItems, setSelectedDeleteItems] = useRecoilState(
    selectedDeleteItemsState
  );
  const productCount = productList.length;
  const buyableProductCount = productList.filter((product) => {
    return product.soldout === false;
  }).length;

  // 삭제할 아이템 인풋제어
  const selectDeleteTargetItems = (
    event: ChangeEvent<HTMLInputElement>,
    item: productInfoType
  ) => {
    const {
      target: { checked },
    } = event;
    if (checked === true) {
      setSelectedDeleteItems([...selectedDeleteItems, item]);
    } else {
      setSelectedDeleteItems(
        selectedDeleteItems.filter(
          (selectedItem) => selectedItem.url !== item.url
        )
      );
    }
  };

  const handleProductUrlInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;
    setProductUrl(value);
  };

  const addProductToLocalStoraege = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    // TODO 상품 요청 전 중복상품이 있는 경우 필터링 처리
    event.preventDefault();
    const urlRegex =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    // 해당 url이 이전에 등록했던 것과 동일한지 확인
    const isIncludedBefore =
      productList.filter((product) => {
        return product.url === productUrl;
      }).length > 0;

    if (isIncludedBefore) {
      return alert("이미 등록된 상품이예요. 다른 상품으로 등록해주세요.");
    }

    if (!productUrl) {
      return alert("아무런 값이 입력되지 않았어요. URL을 입력해주세요.");
    }

    if (urlRegex.test(productUrl)) {
      const { data } = await axios.post("http://localhost:5001/get-product", {
        url: productUrl,
      });
      setProductList([...productList, data.productInfo]);
      setProductUrl("");
    } else {
      alert("URL이 입력되지 않았어요 URL으로 입력해주세요.");
    }
  };

  // 로컬스토리지의 값을 스테이트로 지정
  useEffect(() => {
    const productListFromLocalStroage = localStorage.getItem("productList");

    if (productListFromLocalStroage) {
      setProductList(JSON.parse(productListFromLocalStroage));
    }
    setIsMounted(true);
  }, []);

  // productList가 변경될때마다 로컬스토리지를 새로 지정
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("productList", JSON.stringify(productList));
    }
  }, [productList, isMounted]);

  return (
    <>
      <div className="col-span-4 pc:col-span-8">
        <h1 className="col-span-4 pc:col-span-8">리노티</h1>
        품절된 상품을 구매할 수 있으면 알려드려요.
        <br />
        구매가능 여부는 1시간마다 갱신돼요.
      </div>
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
            value={productUrl}
            onChange={handleProductUrlInputChange}
          />
          <button className="absolute top-2/4 translate-y-[-50%] right-[20px] pc:right-[40px] w-[24px] h-[24px] pc:w-[34px] pc:h-[34px]">
            Add
          </button>
        </div>
      </form>
      <div className="col-span-4 pc:col-span-8 ml-[10px] pc:ml-[20px]">
        총 <span className="font-bold">{productCount}</span>개의 상품이
        추가됐어요.
        <br />
        현재 구매 가능한 상품은{" "}
        <span className="font-bold">{buyableProductCount}</span>개예요.
      </div>
      {productList.map((product) => {
        return (
          <div
            className="shadow col-span-4 pc:col-span-2 rounded flex flex-col relative"
            key={product.url}
          >
            {editMode ? (
              <input
                className="absolute top-[10px] right-[10px] z-[1]"
                type="checkbox"
                onChange={(event) => {
                  selectDeleteTargetItems(event, product);
                }}
              />
            ) : (
              ""
            )}

            <div className="mt-0 relative bg-secondary rounded-t h-[250px]">
              <Image
                src={product.imageUrl}
                alt={`product-thumbnail`}
                className="w-full h-full m-0 object-cover bg-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="p-[10px] rounded flex flex-col flex-1">
              <h5 className="font-bold mb-1">{product.title}</h5>
              <h6 className="font-bold mb-1">
                {product.price}
                {product.priceCurrency}
              </h6>
              <a href={product.url} className="mt-[auto]">
                <Button
                  color="primary"
                  disabled={product.soldout}
                  className="w-full"
                >
                  {product.soldout ? "품절" : "구매페이지로 이동"}
                </Button>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
