import * as F from './styles'
import Maps from '../../assets/maps.svg'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'

export function Footer(){
  return (
    <F.Footer>
       <F.RedesSociais>
          <ul>
            <li>
              <p>Siga-nos</p>              
            </li>
            <li>
              <a href=""><FaLinkedinIn/> Linkedin</a>
            </li>
            <li>
              <a href=""><FaInstagram/> Instagram</a>
            </li>
            <li>
              <a href=""><FaFacebookF/> Facebook</a>
            </li>
          </ul>
       </F.RedesSociais>

       <F.RedesSociais>
          <ul>
            <li>
              <p>Nossas informações</p>              
            </li>
            <li>
              Rua Professora Arlete Lago Serra, 13 - Cohama
              São Luís/MA - CEP: 65073-830
            </li>
            <li>
              Seg. à Sex.: 08:00hr às 18:30
            </li>
            <li>
              Número: (85) 987875865
            </li>
            <li>
              cosmoscontabilidade@gmail.com
            </li>
          </ul>
       </F.RedesSociais>

       <img src={Maps} alt="Imagem localização mapa" />
    </F.Footer>
  ) 
}