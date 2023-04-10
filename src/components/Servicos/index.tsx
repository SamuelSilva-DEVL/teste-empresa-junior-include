import * as S from './styles'
import Cifrao from '../../assets/cifrao.svg'
import Engrenagem from '../../assets/engrenagem.svg'
import Xadrez from '../../assets/xadrex.svg'
import Lapis from '../../assets/lapis.svg'

const servicos = [
  {
    image: Xadrez,
    tittle: "GESTÃO ESTRATÉGICA",
    text: "Gestão estratégica é o conjunto de práticas e objetivos definidos pelos principais gestores de uma empresa, levando em consideração os ambientes interno e externo da companhia. Além de determinar os principais objetivos de uma organização em determinado período de tempo, os executivos também são responsáveis por definir como esses objetivos serão alcançados e alocar recursos para que as metas se concretizem."
  },
  {
    image: Lapis,
    tittle: 'GESTÃO DA PRODUÇÃO',
    text: "Consiste na gestão de ciclo que vai desde a estruturação dos processos de produção até as etapas finais com o cliente. É por meio do processo de gestão – sempre seguindo propósitos, princípios e valores pré-estabelecidos – que um empreendimento alcança seus objetivos e metas."
  },
  {
    image: Cifrao,
    tittle: 'GESTÃO FINANCEIRA',
    text: "Consiste na gestão de ciclo que vai desde a estruturação dos processos de produção até as etapas finais com o cliente. É por meio do processo de gestão – sempre seguindo propósitos, princípios e valores pré-estabelecidos – que um empreendimento alcança seus objetivos e metas."
  },
  {
    image: Engrenagem,
    tittle: 'ASSESSORIA EM GESTÃO ',
    text: "Consiste-se em um serviço completo, desenvolvido a partir das necessidades de cada cliente, onde ele buscar impulsionar e impactar de forma direta e/ou indireta, todas os setores da empresa."
  }
]

export function Servicos(){
  return(
    <S.ContainerServicos>
      {servicos.map((servico, _i) => (
         <S.CardContainer key={_i}>
           <img src={servico.image} alt="" />
           <h1>{servico.tittle}</h1>
           <p>{servico.text}</p>
           <S.Button>Detalhes</S.Button>
        </S.CardContainer>
      ))}
    </S.ContainerServicos>
  )
}