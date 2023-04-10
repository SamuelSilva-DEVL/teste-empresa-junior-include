import styled from "styled-components";

export const ContainerClientes = styled.div`
  width: 900px;
  height: 400px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img{
    width: 150px;
    height: 150px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}){
    margin-top: 60px;

    img{
      width: 120px;
      height: 120px;
    }
  }
`