import styled from 'styled-components'

export const FormVag = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const ButtonAsk = styled.button`
  background-color: var(--cor-principal);
  border: var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
export const InputPesquisa = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
