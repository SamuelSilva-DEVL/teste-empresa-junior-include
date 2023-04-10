import styled from "styled-components";

export const ContainerServicos = styled.div`
  width: 1300px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`

export const CardContainer = styled.div`
  width: 600px;
  height: 250px;

  background: #D9D9D9;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-family: 'Convergence';
  font-style: normal;
  font-weight: 400;

  h1{
    font-size: 18px;
  }

  p{
    text-align: center;
    font-size: 14px;
    margin-left: 10px;
    margin-right: 10px;
  }

  img{
    width: 50px;
    height: 50px;
  }
`

export const Button = styled.button`
  width: 140px;
  height: 25px;
  font-size: 15px;
  cursor: pointer;
  border: 0;
  color: #fff;

  background: rgba(242, 82, 33, 0.8);
  border-radius: 60px;
`