import styled from 'styled-components'

export const Container = styled.div`
  width: 100px;

  .coverContainer {
    > div {
      border-radius: 5px;
    }
    filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
  }

  .bookTitle {
    margin-top: 10px;
    font-family: 'SFProDisplay';
    color: rgba(49, 49, 49, 0.8);
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    width: 100%;
    display: block;
  }
  .bookAuthors {
    margin-top: 5px;
    font-family: 'Roboto';
    color: rgba(49, 49, 49, 0.8);
    font-weight: 900;
    font-size: 10px;
    display: block;
  }
`
