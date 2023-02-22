import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";

const SliderWrapper = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: black;
    opacity: 1;
    font-size: 30px;
  }
  .slick-prev {
    left: 30px;
    z-index: 9;
  }
  .slick-next {
    right: 30px;
    z-index: 9;
  }
  .slick-slide img {
    margin: 0 auto;
  }
`;
const SlickImg = styled.div`
  height: 750px;
  background: lightgray;
`;
const SlickSecond = styled.div`
  height: 750px;
  background-color: #eee;
`;
const SlickThird = styled.div`
  height: 750px;
  background-color: skyblue;
`;

export default function Slick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <SliderWrapper {...settings}>
        <SlickImg></SlickImg>
        <SlickSecond></SlickSecond>

        <SlickThird></SlickThird>
      </SliderWrapper>
    </div>
  );
}
