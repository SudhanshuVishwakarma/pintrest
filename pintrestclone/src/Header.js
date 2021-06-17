import React, { useState } from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import TextsmsIcon from "@material-ui/icons/Textsms";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";

function Header(props) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };
  return (
    <div className="header">
      <Wrapper>
        <LogoWrapper>
          <IconButton>
            <a href="/Landingpage">
              <PinterestIcon></PinterestIcon>
            </a>
          </IconButton>
        </LogoWrapper>

        <HomepageButton className="home">
          <a href="/">Homepage</a>
        </HomepageButton>

        <FollowingButton className="following">
          <a href="/">Following</a>
        </FollowingButton>
        <SearchWrapper className="search">
          <SearchBarWrapper className="search_bar">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <form>
              <input type="text" onChange={(e) => setInput(e.target.value)} />
              <button type="Submit" onClick={onSearchSubmit}></button>
            </form>
          </SearchBarWrapper>
        </SearchWrapper>
        <IconWrapper className="left_icons">
          <IconButton>
            <NotificationIcon />
          </IconButton>

          <IconButton>
            <TextsmsIcon />
          </IconButton>

          <IconButton>
            <FaceIcon />
          </IconButton>

          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </IconWrapper>
      </Wrapper>
    </div>
  );
}

export default Header;

const Wrapper = styled.div`
display:flex;
align-items: center;
height:56px;
padding:12px 4px 4px 16px:
background-color:white;
color:black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomepageButton = styled.div``;
const FollowingButton = styled.div``;
const SearchWrapper = styled.div``;
const SearchBarWrapper = styled.div``;
const IconWrapper = styled.div``;
