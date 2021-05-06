import styled from 'styled-components'

export const Container = styled.section`
  margin: 30px auto;
  width: 100%;
  .headingContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto 15px;

    h2 {
      font-family: 'SFProDisplay';
      font-weight: 500;
      font-size: 18px;
      color: #3f4043;
    }

    a {
      font-family: 'SFProText';
      font-weight: 500;
      color: ${props => props.theme.colors.blue};
    }
  }

  .currentlyReadingBooks {
    height: 130px;
    display: flex;
    align-items: center;
    .book {
      height: 100px;
      width: 331px;
      overflow: visible;
      background-color: #eef5db;

      display: flex;
      align-items: center;
      border-radius: 0px 3px 3px 0px;

      .bookInfo {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-left: 10px;
        z-index: 2;
        position: relative;
        overflow: hidden;
        > strong {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 2px;
          color: #2a2b26;
          margin-bottom: 5px;
        }

        > p {
          font-family: 'Roboto';
          font-weight: 400;
          font-size: 10px;
          color: #74776d;
          margin-bottom: 20px;
        }

        .chapters {
          display: flex;
          align-items: center;
          p {
            margin-left: 5px;
            font-family: 'SFProDisplay';
            font-weight: 400;
            font-size: 10px;
            color: #2a2b26;

            span {
              font-weight: 600;
              color: ${props => props.theme.colors.pink};
            }
          }
        }

        .decor1 {
          position: absolute;
          top: 0;
          right: 0;
          margin-top: -10%;
          margin-right: -15%;
          width: 69px;
          height: 69px;
        }
        .decor2 {
          position: absolute;
          top: 0;
          right: 45%;
          margin-top: -4%;
        }
        .decor3 {
          position: absolute;
          top: 60%;
          right: 0;
          margin-right: -10%;
        }
      }

      .bookCover {
        width: 88px;
        height: 130px;
        margin-left: 5%;
        border-radius: 5px;
        filter: drop-shadow(5px 7px 32px rgba(140, 170, 58, 0.193701));
      }
    }
  }
`
