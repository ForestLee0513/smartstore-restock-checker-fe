"use client";

import { editModeState } from "@/recoil/EditMode";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useRecoilState(editModeState);

  // 메뉴 열기
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 수정모드 토글
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <header className="py-[10px] flex mx-auto w-[90%] pc:max-w-[1920px] justify-between">
      <button onClick={toggleMenu}>메뉴</button>
      <button onClick={toggleEditMode}>수정</button>
    </header>
  );
};

export default Header;
