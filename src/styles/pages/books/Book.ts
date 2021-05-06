import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 20vh;
  .header {
    position: relative;
    width: 100%;
    height: 282px;
    background: #fff6e5;
    border-radius: 0px 0px 100px 0px;
    overflow: hidden;
    .decor1 {
      position: absolute;
      top: 43%;
      left: 12%;
    }
    .decor2 {
      position: absolute;
      top: 40%;
      left: 20%;
    }
    .decor3 {
      position: absolute;
      width: 24px;
      height: 24px;
      right: 27%;
      top: 30%;
    }
    .decor4 {
      position: absolute;
      right: 0;
      top: 0;
      margin-right: -30px;
      margin-top: -30px;
      width: 100px;
      height: 100px;
      transform: rotate(25deg);
    }
    a {
      position: absolute;
      left: 5%;
      top: 15%;
    }
  }

  .bookCover {
    width: fit-content;
    margin: -198px auto 35px;
    > div {
      border-radius: 5px;
    }
  }

  .content {
    margin: 0 auto;
    width: 90%;
    h1 {
      font-family: 'SFProDisplay';
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 7px;
    }

    span {
      font-family: 'SFProDisplay';
      font-weight: 500;
      font-size: 16px;
      color: ${props => props.theme.colors.pink};
      margin-bottom: 10px;
    }

    p {
      font-family: 'SFProText';
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      letter-spacing: 0.2px;
    }
  }
`
