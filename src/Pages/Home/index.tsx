import * as H from './styles'
import imageHome from "../../imgs/imageHome.png"
import Perfil from '../../assets/perfil.svg'
import LogoInclude from '../../assets/includeLogo.svg'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Form } from '../../components/Form'
import { Clientes } from '../../components/Clientes'
import { Principios } from '../../components/Principios'
import { Servicos } from '../../components/Servicos'
import { Passos } from '../../components/Passos'
import { Beneficios } from '../../components/Beneficios'

export function Home(){
  return(
    <> 
      <H.SectionDefault backgroundImage={imageHome}>
        <Header />
        <H.ContainerHome>
          <h1>
            Consultoria especializada em  Engenharia e Gestão de Negócios
          </h1>
          <p>
            Transformando empresas por meio da vivência empresarial
          </p>
          <a href="">Fale com um especialista</a>
        </H.ContainerHome>
      </H.SectionDefault>

      <H.SectionDefault id='servicos'>
        <H.Titlle>Serviços</H.Titlle>
        <Servicos />
      </H.SectionDefault>

      <H.ContainerSobreNos id='sobre'>
        <img src={Perfil} alt="" />
        <div>
           <p>
            Nós somos uma empresa que nasceu da paixão pela empreendedorismo e pela busca constante pela excelência em tudo o que fazemos. Nosso objetivo é oferecer soluções inovadoras e personalizadas para cada cliente, atendendo às suas necessidades e contribuindo para o sucesso de seus negócios.
           </p>
           <p>
            Aqui, acreditamos que a transparência e a ética são fundamentais em todas as nossas atividades. Afinal, é assim que conquistamos a confiança de nossos clientes e parceiros, e assim que podemos trabalhar juntos de forma produtiva e eficiente.
           </p>
           <p>
            Além disso, temos uma equipe altamente qualificada e comprometida, que está sempre atualizada com as últimas tendências e tecnologias do mercado. Isso nos permite oferecer soluções de alta qualidade e valor agregado para nossos clientes, e garantir que estejamos sempre à frente do jogo.
           </p>
        </div>
      </H.ContainerSobreNos>
          
      <H.SectionPrincipios>
        <Principios />

        <H.CardLogo>
          <img src={LogoInclude} alt="" />
          <h1>Prospere Gestão Empresarial</h1>
          <p>
            Transformando empresas por meio da vivência empresarial
          </p>
        </H.CardLogo>
      </H.SectionPrincipios>

      <H.SectionClientes id='portifolio'>
        <H.Titlle>Nossos clientes</H.Titlle>
        <Clientes />
      </H.SectionClientes>

      <H.SectionBeneficios>
        <Beneficios />
      </H.SectionBeneficios>

      <H.SectionPassos>
        <Passos />
      </H.SectionPassos>
      
      <H.SectionOrçamento id='contatos'>
        <H.Titlle>
          Faça um orçamento gratuitamente com a gente!
        </H.Titlle>
        <Form />
      </H.SectionOrçamento>

      <Footer />
    </>
  )
}