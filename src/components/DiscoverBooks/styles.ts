import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
  margin: 30px auto;
  width: 100%;
  overflow: hidden;
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

  .discoverBooks {
    display: flex;
    flex-shrink: 0;
    margin-left: 5%;
    .book {
      min-width: 272px;
      height: 139px;
      padding: 15px 20px;
      border-radius: 5px;
      position: relative;
      overflow: hidden;

      .bookInfo {
        z-index: 2;
        position: relative;
        > strong {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 27px;
          letter-spacing: 2px;
          color: #fefefe;
          margin-bottom: 5px;
        }

        > p {
          font-family: 'SFProDisplay';
          font-weight: 400;
          font-style: italic;
          font-size: 14px;
          color: #e7e7e1;
        }

        .readCount {
          margin-top: 30px;
          display: flex;
          align-items: center;
          color: #e7e7e1;
          strong {
            margin: 0 2px 0 5px;
            font-family: 'SFProDisplay';
            font-weight: 700;
            font-size: 10px;
          }

          p {
            font-family: 'SFProDisplay';
            font-weight: 400;
            font-size: 10px;
          }
        }
      }

      .bookCover {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        > div {
          border-radius: 4px;
        }
      }

      &.variantOne {
        background-color: #00173d;
        display: grid;
        grid-template-columns: 1fr 1fr;

        .decor1 {
          position: absolute;
          top: 2%;
          left: 62%;
        }
        .decor2 {
          position: absolute;
          bottom: 20%;
          left: 53%;
        }
        .decor3 {
          position: absolute;
          top: 10%;
          left: 52%;
        }

        .decor4 {
          position: absolute;
          z-index: 1;
          margin-top: 8%;
          margin-left: -10%;
        }
      }

      &.variantTwo {
        background-color: #451475;

        .decor4 {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          margin-top: -15%;
          margin-left: -5%;
        }
      }

      & + .book {
        margin-left: 10px;
      }
    }
  }
`
