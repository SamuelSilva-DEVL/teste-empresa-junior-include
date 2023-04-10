import styled from "styled-components";

export const ContainerPrincipios = styled.div`
  width: 700px;
  height: 800px;
  margin-left: 30px;

  display: flex;
  flex-direction: column;
`

export const CardContainer = styled.div`
  width: 626px;
  min-height: 169px;
  margin: 10px;

  font-family: 'Convergence';
  font-style: normal;
  font-weight: 400;

  background: #F0F0F0;
  border-radius: 30px;

  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  h1{
    font-size: 22px;
    margin: 0;
    text-decoration: underline;
    color: #F25221;
  }

  p{
    margin: 0;
    font-size: 20px;
  }

  span{
    font-size: 20px;
    color: #F26033;
  }

  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #000000;
    font-size: 20px;
    margin-left: 30px;

    a {
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
      text-decoration: none;
      font-size: 20px;
      font-weight: 400;
    }
  }
`