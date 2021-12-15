// import "./about.css";
// import Award from "../../img/award.png";

import styled from "styled-components"

const About = () => {
  return (
    <Container>
      <ContainerLeft>
        <div className='card bg'></div>
        <div className='card'>
          <img
            src='https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='img'
          />
        </div>
      </ContainerLeft>
      <ContainerRight>
        <h1 className='title'>About Me</h1>
        <p className='sub'>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className='award'>
          <img src='' alt='' className='award-img' />
          <div className='award-texts'>
            <h4 className='award-title'>International Design Awards 2021</h4>
            <p className='award-desc'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </ContainerRight>
    </Container>
  )
}

export default About

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    .a {
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
    }
  }
`

const ContainerRight = styled.div`
  flex: 1;

  .title {
    font-weight: 400;
  }

  .sub {
    margin: 20px 0px;
  }

  .description {
    font-weight: 300;
  }

  
  .award {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .award-img {
      width: 120px;
      height: 120px;
      border-radius: 20px;
    }



    .award-texts {
      width: 70%;
    }

    .award-title {
      font-weight: bold;
      color: #555;
      margin-bottom: 10px;
    }

  }

  @media screen and (max-width: 480px) {
    padding: 20px;
    
    .award {
      display: none;
    }
  }
`

const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  .card.bg {
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: #333;
  }

  .card {
    width: 60%;
    height: 70vh;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    .card {
      height: 30vh;
    }

    .card.bg{
      display: none;
    }
  }
`