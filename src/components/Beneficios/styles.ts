import styled from "styled-components";

export const ContainerBeneficios = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const CardBeneficio = styled.div`
  width: 130px;
  height: 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background: #FFFFFF;
  border-radius: 20px;

  img{
    width: 80px;
    height: 80px;
  }

  p{
    width: 80%;
    font-family: 'Convergence';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #000000;
  }
`