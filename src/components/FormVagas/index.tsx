import { FormEvent, useState } from 'react'

import { ButtonAsk, FormVag, InputPesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVag onSubmit={aoEnviarForm}>
      <InputPesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonAsk type="submit">Pesquisar</ButtonAsk>
    </FormVag>
  )
}
export default FormVagas
