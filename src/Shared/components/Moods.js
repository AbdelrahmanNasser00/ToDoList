import React, { useState } from "react";
import styled from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
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
  const [dark, setDark] = useState(true);
  const handleMood = () => {
    setDark(!dark);
  };
  return (
    <MoodsContainer>
      {dark ? (
        <IconButton
          sx={{
            color: "white",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            marginInline: "5px",
          }}
          onClick={handleMood}>
          <DarkModeIcon />
        </IconButton>
      ) : (
        <IconButton
          sx={{
            color: "white",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            marginInline: "5px",
          }}
          onClick={handleMood}>
          {" "}
          <LightModeIcon />
        </IconButton>
      )}
    </MoodsContainer>
  );
};

export default Moods;
