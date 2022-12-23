import { FileText, House, User } from "phosphor-react";
import { Container, FormSection, } from "../../styles/Form/form-style";
import { FormUser } from "./components/FormUser";
import { FormAddress } from "./components/FormAddress"
import { FormAbout } from "./components/FormAbout"
import { FormContext } from "../../contexts/FormContext";
import { useContextSelector } from "use-context-selector";

export function Form() {
  const { formUserIsFilledIn, formAddressIsFilledIn } = useContextSelector(FormContext, (context) => {
    return {
      formUserIsFilledIn: context.formUserIsFilledIn,
      formAddressIsFilledIn: context.formAddressIsFilledIn
    }
  })

  return (
    <Container>
      <h1>Criação de usuário</h1>

      <div id="formSectionContainer">
        <FormSection state={formUserIsFilledIn ? "filledIn" : "current"}>
          <span><User size={24} weight="fill" /></span>
          <p>Identificação do Usuário</p>
        </FormSection>

        <FormSection state={formUserIsFilledIn ? formAddressIsFilledIn ? "filledIn" : "current" : "fillOut"}>
          <span><House size={24} weight="fill" /></span>
          <p>Endereço do usuário</p>
        </FormSection>

        <FormSection state={formAddressIsFilledIn ? "current" : "fillOut"}>
          <span><FileText size={24} weight="fill" /></span>
          <p>Sobre você</p>
        </FormSection>
      </div>

      {formUserIsFilledIn ? formAddressIsFilledIn ? <FormAbout /> : <FormAddress /> : <FormUser />}
    </Container >
  )
}