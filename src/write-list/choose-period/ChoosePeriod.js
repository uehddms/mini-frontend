import React, { useState } from "react";
import QuestionTitle from "../style-component/QuestionTitle";
import styled from "styled-components";
import BottomButton from "../style-component/BottomButton";
import { Container, Wrapper } from "../style-component/Wrapper";
import PeriodButton from "./component/PeriodButton";
import { useNavigate } from "react-router";
import Banner from "../style-component/Banner";
import MenuBanner from "../style-component/MenuBanner";

const ChoosePeriod = () => {
  const [periodClicked, setPeriodClicked] = useState(null);
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "김사자";

  return (
    <Wrapper>
      <Banner />
      <MenuBanner />
      <Container>
        <Hello>
          <QuestionTitle text={`안녕하세요, ${username}님!`} />
          <Logo />
        </Hello>
        <Ask>
          <QuestionTitle text="오늘은 어떤 버킷리스트를 작성할까요?" />
        </Ask>
        <PeriodButton clicked={periodClicked} setClicked={setPeriodClicked} />
        <BottomButton
          text="작성 시작하기"
          display={!!periodClicked}
          onClick={() =>
            navigate("/WriteDetail", {
              state: {
                period: periodClicked,
              },
            })
          }
        />
      </Container>
    </Wrapper>
  );
};

export default ChoosePeriod;

const Hello = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
`;

const Ask = styled.div`
  width: 100%;
`;

const Logo = styled.img.attrs({
  src: "banner/irume.png",
})`
  width: 20px;
  height: 22px;
`;
