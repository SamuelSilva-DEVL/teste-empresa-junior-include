import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  z-index: 2;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  opacity: 0.6;

  background: rgba(0, 0, 0, 0.6);

  img{
    width: 55.65px;
    height: 40px;
  }
`

export const NavContainer = styled.nav`

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    gap: 25px;
    color: #ffff;

    a {
      text-decoration: none;
      font-family: 'Forum';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
      color: #FFFFFF;
    }
  }
`