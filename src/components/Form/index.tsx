import * as F from './styles'

export function Form(){
  return(
    <F.SectionFormulario>
      <F.SectionInputLabel>
        <F.Label>Nome da empresa</F.Label>
        <F.Input type='text'/>

        <F.Label>Telefone</F.Label>
        <F.Input type='text'/>

        <F.Label>Email</F.Label>
        <F.Input type='email'/>

        <F.Label>UF</F.Label>
        <F.Input type='text'/>

        <F.Label>Cidade</F.Label>
        <F.Input type='text'/>

        <F.Label>CEP</F.Label>
        <F.Input type='text'/>
      </F.SectionInputLabel>

      <F.Line />

      <F.SectionInputLabel>
        <F.Label>Ramo(s) de atividade</F.Label>
        <F.Input type='text'/>

        <F.Label>Detalhe a atividade</F.Label>
        <F.Input type='text'/>

        <F.Label>Serviços desejados</F.Label>
        <F.InputBox type='text'/>
      </F.SectionInputLabel>

    </F.SectionFormulario>
  )
}