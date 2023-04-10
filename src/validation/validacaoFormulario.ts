import * as yup from 'yup'

const FormSchema = yup.object().shape({
  nomeEmpresa: yup
    .string()
    .min(3, "nome da empresa deve conter no minimo 3 caracteres")
    .required("campo obrigatório"),
  telefone: yup
    .string().required("campo obrigatório"),
  email: yup
    .string()
    .email("digite um email valido")
    .required("campo obrigatório"),
  uf: yup
    .string().required("campo obrigatório"),
  cidade: yup
    .string().required("campo obrigatório"),
  cep: yup
    .string().required("campo obrigatório"),
  ramoAtividade: yup
    .string().required("campo obrigatório"),
  detalheAtividade: yup
    .string().required("campo obrigatório"),
  servicosDesejados: yup
    .string().required("campo obrigatório")
})

export default FormSchema