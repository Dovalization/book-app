import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  bottom: 53px;
  left: 5%;
  display: flex;
  padding: 20px 0;
  width: 90%;
  height: 56px;
  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  justify-content: space-between;

  .navItem {
    width: 100%;
    display: flex;
    justify-content: center;

    svg {
      color: #cfcbd2;
      margin-right: 10px;
    }
    p {
      font-family: 'SFProDisplay';
      font-size: 14px;
      font-weight: 700;
      color: #3f4043;
      flex: ;
    }

    & + .navItem {
      border-left: 1px solid rgba(151, 151, 151, 0.2);
    }
  }
`
