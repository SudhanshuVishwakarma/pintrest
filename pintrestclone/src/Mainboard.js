import React from "react";
import "./Mainboard.css";
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard(props) {
  let { pins } = props;

  return (
    <div>
      <Wrapper className="main_page">
        <Container className="mainboard__container">
          {pins.map((pin, index) => {
            let { urls } = pin;
            return <Pin key={index} urls={urls} />;
          })}
        </Container>
      </Wrapper>
    </div>
  );
}

export default Mainboard;

const Wrapper = styled.div``;
const Container = styled.div``;
