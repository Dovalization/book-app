import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 10px;
  bottom: 0;
  background: #fff;
  .navContent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .navItem {
      color: #bfbebf;
      display: flex;
      flex-direction: column;
      align-items: center;
      &.active {
        color: black;
      }
      p {
        font-family: 'SFProDisplay';
        font-weight: 400;
        font-size: 10px;
      }
      svg {
        margin-bottom: 10px;
      }
    }
  }
`
