import * as S from './styles'
import LogoInclude from '../../assets/includeLogo.svg'

export function Header(){
  return(
    <S.HeaderContainer>
      <img src={LogoInclude} alt="Logo Include" />
      <S.NavContainer>
        <ul>
          <li>
            <a href="#sobre">Sobre nós</a>            
          </li>
          <li>
            <a href="#servicos">Serviços</a> 
          </li>
          <li>
            <a href="#portifolio">Portifólio</a> 
          </li>
          <li>
            <a href="#contatos">Contatos</a> 
          </li>
        </ul>
      </S.NavContainer>
    </S.HeaderContainer>
  )
}