import styled from "styled-components"

export const Button = styled.button `
  border-radius:4px;
  padding:5px 10px;
  font-size: 1.6rem;
  animation: moveInBottom .5s ease-out .75 s;
  animation-fill-mode: backwards;
  cursor: pointer;

  &:hover {
    transform: translateY(1px);
    box-shadow: 0 1 rem 2rem rgba(#000, .2);
  }
`

export const DangerButton = styled(Button)`
  background: #ff0099;

  &:hover {
    background:#ff0011;
  }
`



export default Button;