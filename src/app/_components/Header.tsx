"use client";

import { editModeState, selectedDeleteItemsState } from "@/recoil/EditMode";
import { productListState } from "@/recoil/Items";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import X from "@public/icons/x.svg";
import Menu from "@public/icons/menu.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useRecoilState(editModeState);
  const [selectedDeleteItems, setSelectedDeleteItems] = useRecoilState(
    selectedDeleteItemsState
  );
  const [productList, setProductList] = useRecoilState(productListState);

  // 메뉴 열기
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 수정모드 토글
  const toggleEditMode = () => {
    setMenuOpen(false);
    setEditMode(!editMode);
  };

  // 아이템 삭제
  const deleteItems = () => {
    if (selectedDeleteItems.length <= 0) {
      return alert("삭제할 상품이 선택되지 않았어요.");
    }
    const removedProductList = productList.filter(
      (item) =>
        !selectedDeleteItems.some((targetItem) => item.url === targetItem.url)
    );

    setProductList(removedProductList);
    setSelectedDeleteItems([]);
    setEditMode(false);
  };

  useEffect(() => {
    if (editMode === false) {
      setSelectedDeleteItems([]);
    }
  }, [editMode, setSelectedDeleteItems]);

  return (
    <header className="py-[10px] flex mx-auto w-[90%] pc:max-w-[1920px] justify-between">
      {editMode ? (
        <button onClick={toggleEditMode}>
          <X className="h-[28px] w-[28px]" />
        </button>
      ) : (
        <button onClick={toggleMenu}>
          <Menu className="h-[28px] w-[28px]" />
        </button>
      )}
      {editMode ? (
        <button onClick={deleteItems}>삭제</button>
      ) : (
        <button onClick={toggleEditMode}>수정</button>
      )}
    </header>
  );
};

export default Header;
