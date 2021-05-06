import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  display: flex;
  width: 90%;
  height: 48px;
  margin: 50px auto 30px;
  padding: 15px;
  border-radius: 15px;

  img {
    margin-right: 10px;
  }

  input {
    border: none;
    outline: none;
    flex: 1;
    font-family: 'SFProText';
    font-size: 16px;
    font-weight: 600;
    &::placeholder {
      color: #54565a;
      font-weight: 400;
    }
  }
`
