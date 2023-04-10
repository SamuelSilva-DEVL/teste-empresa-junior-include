import styled from "styled-components";

export const SectionPassos = styled.div`
  width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #fff;

  @media (max-width: ${props => props.theme.breakpoints.sm}){
    flex-direction: row;
    margin: 10px;
  }
`

export const ContainerPasso = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.sm}){
    flex-direction: column;
  }
`

export const ContainerInformacoes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    width: 200px;
    height: 57px;
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}){
    flex-direction: column;

    p{
      margin-bottom: 5px;
    }
  }
`

export const Passo = styled.div`
  width: 50px;
  height: 50px;
  color: #FFFF;
  font-size: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #F25221;
`

export const Line = styled.div`
  width: 224px;
  height: 1px;
  background: #FFFF;

  @media (max-width: ${props => props.theme.breakpoints.sm}){
    width: 1px;
    height: 20px;
  }
`