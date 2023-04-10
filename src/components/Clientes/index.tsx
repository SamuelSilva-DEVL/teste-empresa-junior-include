import * as C from './styles'
import MariaFlorinha from '../../assets/imagesClient/mairaFlorinha.svg'
import SaoLuiz from '../../assets/imagesClient/saoLuiz.svg'
import Normatel from '../../assets/imagesClient/normatel.svg'
import WePizza from '../../assets/imagesClient/wePizza.svg'
import PhdEmbalagens from '../../assets/imagesClient/phdEmbalagens.svg'
import Ari from '../../assets/imagesClient/ari.svg'
import MariaBaloes from '../../assets/imagesClient/mariaBaloes.svg'
import Ibel from '../../assets/imagesClient/ibel.svg'
import Projarq from '../../assets/imagesClient/projarq.svg'
import Campachi from '../../assets/imagesClient/campachi.svg'

const clientes = [
  {
    image: MariaFlorinha,
    alt: "Logo Maria Florinha"
  },
  {
    image: SaoLuiz,
    alt: "Logo São Luiz"
  },
  {
    image: Normatel,
    alt: "Logo Normatel"
  },
  {
    image: WePizza,
    alt: "Logo We Pizza"
  },
  {
    image: PhdEmbalagens,
    alt: "Logo PHD Embalagens"
  },
  {
    image: Ari,
    alt: "Logo Ari"
  },
  {
    image: MariaBaloes,
    alt: "Logo Maria Balões"
  },
  {
    image: Ibel,
    alt: "Logo Ibel"
  },
  {
    image: Projarq,
    alt: "Logo Projarq"
  },
  {
    image: Campachi,
    alt: "Logo Campachi"
  },
]

export function Clientes(){
  return(
    <C.ContainerClientes>
      {clientes.map((cliente, _i) => (
        <img key={_i} src={cliente.image} alt={cliente.alt} />
      ))}
    </C.ContainerClientes>
  )
}