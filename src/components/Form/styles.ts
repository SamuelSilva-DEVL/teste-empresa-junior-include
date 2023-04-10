import styled from "styled-components";

export const SectionFormulario = styled.div`
  width: 100%;
  max-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const SectionInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Label = styled.p`
  font-family: 'Convergence';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;

  color: #000000;

  margin-left: 10px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 420px;
  height: 30px;
  border: 0;
  padding: 20px;

  background: rgba(242, 82, 33, 0.4);
  border-radius: 20px;

  :focus{
    outline: 0;
  }
`

export const InputBox = styled.input`
  width: 420px;
  height: 261px;
  border: 0;
  padding: 20px;

  background: rgba(242, 82, 33, 0.4);
  border-radius: 20px;

  :focus{
    outline: 0;
  }
`

export const Line = styled.div`
  width: 3px;
  height: 482px;

  background: #000000;
`