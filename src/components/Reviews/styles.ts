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

  .reviews {
    width: 90%;
    margin: 0 auto;

    .review {
      background-color: white;
      border-radius: 5px;
      overflow: hidden;
      .reviewInfo {
        padding: 15px 12px;
        h3 {
          font-family: 'SFProDisplay';
          font-size: 12px;
          font-weight: 700;
          color: #313131;
          margin-bottom: 5px;
        }
        .stats {
          display: flex;
          margin-bottom: 5px;
          span {
            font-family: 'Roboto', sans-serif;
            font-size: 8px;
            color: #6a6767;
            & + span {
              margin-left: 30px;
            }
          }
        }

        p {
          font-family: 'Roboto', sans-serif;
          font-size: 10px;
          color: #6b6b6b;
          line-height: 12px;
        }
      }
    }
  }
`
