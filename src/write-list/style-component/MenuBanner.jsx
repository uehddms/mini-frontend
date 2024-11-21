import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./Banner";

const MenuBanner = () => {
  const [clicked, setClicked] = useState("left");

  return (
    <MenuWrapper>
      <Menu
        className={clicked === "left" ? "clicked" : null}
        onClick={() => setClicked("left")}
      >
        버킷리스트 작성
      </Menu>
      <Menu
        className={clicked === "right" ? "clicked" : null}
        onClick={() => setClicked("right")}
      >
        MY 버킷리스트
      </Menu>
    </MenuWrapper>
  );
};

export default MenuBanner;

const MenuWrapper = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  margin-bottom: 4px;
`;

const Menu = styled(Wrapper)`
  height: 58px;
  cursor: pointer;
  color: #8a8888;
  font-family: "YiSunShinDotumB";
  &.clicked {
    color: #6fbc89;
    border-color: #6fbc8961;
  }
`;
