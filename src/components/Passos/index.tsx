import * as P from './styles'

export function Passos(){
  return(
    <P.SectionPassos>
      <P.ContainerPasso>
        <P.Passo>1</P.Passo>
        <P.Line />
        <P.Passo>2</P.Passo>
        <P.Line />
        <P.Passo>3</P.Passo>
        <P.Line />
        <P.Passo>4</P.Passo>
      </P.ContainerPasso>

      <P.ContainerInformacoes>
        <p>Inicie o cadastro e confira se podemos te atender.</p>
        <p>Conclua o cadastro, pague a 1ª mensalidade e deixe tudo com a gente.</p>
        <p>Nós solicitamos a sua documentação contábil</p>
        <p>Pronto! Sua empresa sempre em dia e com uma contabilidade</p>
      </P.ContainerInformacoes>
    </P.SectionPassos>
  )
}