import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px;

  background: #000000;
  color: #ffff;

  img{
    width: 297px;
    height: 241px;
  }
`

export const RedesSociais = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    justify-content: space-around;
    gap: 25px;
    color: #ffff;

    a {
      text-decoration: none;
      font-size: 18px;
      color: #ffff;
      display: flex;
      align-items: center;
      gap: 3px;
    }

    p{
      font-size: 20px;
    }
  }
`