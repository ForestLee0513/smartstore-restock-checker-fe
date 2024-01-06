"use client";

import { editModeState, selectedDeleteItemsState } from "@/recoil/EditMode";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useRecoilState(editModeState);
  const [selectedDeleteItems, setSelectedDeleteItems] = useRecoilState(
    selectedDeleteItemsState
  );

  // 메뉴 열기
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 수정모드 토글
  const toggleEditMode = () => {
    setMenuOpen(false);
    setEditMode(!editMode);
  };

  useEffect(() => {
    if (editMode === false) {
      setSelectedDeleteItems([]);
    }
  }, [editMode, setSelectedDeleteItems]);

  return (
    <header className="py-[10px] flex mx-auto w-[90%] pc:max-w-[1920px] justify-between">
      {editMode ? (
        <button onClick={toggleEditMode}>닫기</button>
      ) : (
        <button onClick={toggleMenu}>메뉴</button>
      )}
      {editMode ? (
        <button>삭제</button>
      ) : (
        <button onClick={toggleEditMode}>수정</button>
      )}
    </header>
  );
};

export default Header;
