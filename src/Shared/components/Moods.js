import React from "react";
import styled from "styled-components";

const Mood = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  border: 1px solid #eee;
  width: 20px;
  height: 20px;
  margin-inline: 5px;
`;

const MoodsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  height: 12%;
`;

const Moods = () => {
  return (
    <MoodsContainer>
      <Mood color="red" />
      <Mood color="blue" />
      <Mood color="white" />
    </MoodsContainer>
  );
};

export default Moods;
