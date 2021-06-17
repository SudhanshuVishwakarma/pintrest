import React from "react";
import styled from "styled-components";
import "./Pin.css";

function Pin(props) {
  let { urls } = props;
  return (
    <div>
      <Wrapper className="wrap">
        <Container className="img_1">
          <img src={urls?.regular} alt="pin" />
        </Container>
      </Wrapper>
    </div>
  );
}

export default Pin;

const Wrapper = styled.div``;

const Container = styled.div``;
