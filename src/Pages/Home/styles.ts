import styled, { css } from "styled-components";

type SectionDefaultProps = {
  backgroundImage?: string
}

export const Titlle = styled.p`
  position: absolute;
  top: 10px;

  font-family: 'Convergence';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;

  color: #000000;
`

export const SectionDefault = styled.div<SectionDefaultProps>`
  width: 100%;
  /* height: 100vh; */
  min-height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  
  ${props => props.backgroundImage ? 
      css`
        background-image: url(${props.backgroundImage});
        background-repeat: no-repeat;
        background-size: cover;
      `
      : ""
  }
`

export const ContainerHome = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #ffff;
  font-family: 'Convergence';
  font-style: normal;
  font-weight: 400;

  h1{
    font-size: 47px;
    text-align: center;
  }

  p{
    text-align: center;
    margin-top: 12px;
    font-size: 41px;
    font-family: ${props => props.theme.font.bookAntiqua};
  }

  a{
    margin-top: 77px;
    width: 456px;
    height: 52px;
    cursor: pointer;
    background: rgba(242, 82, 33, 0.8);
    border-radius: 60px;

    font-family: ${props => props.theme.font.bookAntiqua};
    font-size: 34px;
    text-align: center;
    color: #ffff;
    text-decoration: none;
  }
`

export const SectionPrincipios = styled.div`
  width: 100%;
  height: 900px;

  display: flex;
  align-items: center;
`

export const SectionOrçamento = styled.div`
  width: 100%;
  height: 700px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SectionClientes = styled.div`
  width: 100%;
  height: 600px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SectionBeneficios = styled.div`
  width: 100%;
  height: 180px;
  background-color: #F25221;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const SectionPassos = styled.div`
  width: 100%;
  height: 180px;
  background-color: #F68664;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerSobreNos = styled.div`
  width: 100%;
  height: 258px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000000E5;

  p{
    max-width: 1095px;
    font-family: 'Convergence';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: justify;

    color: #FFFF;
  }
`

export const CardLogo = styled.div`
  width: 626px;
  height: 334px;
  margin-left: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  img{
    width: 167px;
    height: 120px;
  }

  h1{
    font-family: 'Convergence';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;

    text-align: justify;

    color: #000000;
  }

  p{
    font-family: 'Book Antiqua';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #000000;
  }
`