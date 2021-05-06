import styled from 'styled-components'

export const ContentContainer = styled.main`
  margin-bottom: 80px;
  .greeting {
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    h1 {
      font-family: 'SFProDisplay';
      font-weight: 400;
      color: #54565a;
      .userName {
        font-weight: 600;
        color: ${props => props.theme.colors.pink};
      }
    }
    .greetingEmoji {
      font-size: 24px;
      margin-left: 10px;
    }
  }
`
