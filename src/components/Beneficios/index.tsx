import * as B from './styles'
import Relogio from '../../assets/relogio.svg'
import Custo from '../../assets/custo.svg'
import Lucro from '../../assets/lucro.svg'
import Suporte from '../../assets/suporte.svg'

const beneficios = [
  {
    image: Relogio,
    title: "Otimização do tempo"
  },
  {
    image: Custo,
    title: "Redução dos custos"
  },
  {
    image: Lucro,
    title: "Maior lucratividade"
  },
  {
    image: Suporte,
    title: "Suporte ágil e eficiente"
  },
  {
    image: Relogio,
    title: "Otimização do tempo"
  },
  {
    image: Custo,
    title: "Redução dos custos"
  },
  {
    image: Lucro,
    title: "Maior lucratividade"
  },
  {
    image: Suporte,
    title: "Suporte ágil e eficiente"
  },
]

export function Beneficios(){
  return(
    <B.ContainerBeneficios>
      {beneficios.map((beneficio, _i) => (
        <B.CardBeneficio key={_i}>
          <img src={beneficio.image} alt={`imagem ${beneficio.title}`} />
          <p>{beneficio.title}</p>
        </B.CardBeneficio>
      ))}
    </B.ContainerBeneficios>
  )
}