// import Me from "../../img/me.png";

import styled from "styled-components";

const Intro = () => {
  return (
    <Container>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">John Burton</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src='' alt="me" className="i-img" />
      </div>

    </Container>
  );
};

export default Intro;


const Container = styled.div`
display: flex;
height: 100vh;
.i-left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .i-right {
    flex: 1;
    position: relative;
  }
  
  .i-left-wrapper {
    padding: 50px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .i-intro {
    font-size: 30px;
    font-weight: 300;
  }
  
  .i-name {
    font-size: 60px;
  }
  
  .i-title {
    height: 50px;
    overflow: hidden;
  }
  
  .i-title-wrapper {
    height: 100%;
    animation: move 10s ease-in-out infinite alternate;
  }
  
  @keyframes move {
    25% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(-100px);
    }
    75% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(-200px);
    }
  }
  
  .i-title-item {
    height: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #59b256;
    display: flex;
    align-items: center;
  }
  
  .i-scroll {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 20px;
  }
  
  .i-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  
  .i-bg {
    clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    background-color: #59b256;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
  
  @media screen and (max-width: 480px) {
    
    flex-direction: column;
    
  
    .i-left-wrapper {
    
      padding: 10px;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
    }
  
    .i-desc{
      display: none;
    }
`
