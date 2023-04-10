import * as F from './styles'
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify'
import {yupResolver} from "@hookform/resolvers/yup"
import FormSchema from '../../validation/validacaoFormulario';

type Inputs = {
  nomeEmpresa: string,
  telefone: string,
  email: string,
  uf: string,
  cidade: string,
  cep: string,
  ramoAtividade: string,
  detalheAtividade: string,
  servicosDesejados: string,
};

export function Form(){
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({resolver: yupResolver(FormSchema)});
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
    reset()
    toast.success("Mensagem enviada com sucesso, aguarde nosso retorno!")
  };

  return(
    <F.SectionFormulario>
      <F.Formulario onSubmit={handleSubmit(onSubmit)}>
        <F.SectionInputLabel>
          <F.Label>Nome da empresa</F.Label>
          <F.Input type='text' {...register("nomeEmpresa")}/>
          {errors.nomeEmpresa?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.nomeEmpresa.message}</p>}

          <F.Label>Telefone</F.Label>
          <F.Input type='text' {...register("telefone")}/>
          {errors.telefone?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.telefone.message}</p>}

          <F.Label>Email</F.Label>
          <F.Input type='email' {...register("email")}/>
          {errors.email?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.email.message}</p>}

          <F.Label>UF</F.Label>
          <F.Input type='text' {...register("uf")}/>
          {errors.uf?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.uf.message}</p>}

          <F.Label>Cidade</F.Label>
          <F.Input type='text' {...register("cidade")}/>
          {errors.cidade?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.cidade.message}</p>}

          <F.Label>CEP</F.Label>
          <F.Input type='text' {...register("cep")}/>
          {errors.cep?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.cep.message}</p>}
        </F.SectionInputLabel>

        <F.Line />

        <F.SectionInputLabel>
          <F.Label>Ramo(s) de atividade</F.Label>
          <F.Input type='text' {...register("ramoAtividade")}/>
          {errors.ramoAtividade?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.ramoAtividade.message}</p>}

          <F.Label>Detalhe a atividade</F.Label>
          <F.Input type='text' {...register("detalheAtividade")}/>
          {errors.detalheAtividade?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.detalheAtividade.message}</p>}

          <F.Label>Serviços desejados</F.Label>
          <F.InputBox type='text' {...register("servicosDesejados")}/>
          {errors.servicosDesejados?.message && <p style={{color: 'red', marginLeft: "10px"}}>{errors.servicosDesejados.message}</p>}
        </F.SectionInputLabel>

        <input type="submit" style={{display: "none"}}/>
      </F.Formulario>
    </F.SectionFormulario>
  )
}