import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { FormContext } from '../../contexts/FormContext'
import { Button, Container, FieldGridStreetNumber, UserField } from '../../styles/ShowUserCreated/show-user-created'

export function ShowUserCreated() {

  const userCreatedData = useContextSelector(FormContext, (context) => {
    return context.userCreatedData
  })

  const navigate = useNavigate()

  function backToForm() {
    navigate('/')
  }

  const zip = `${userCreatedData.zip.substring(0, 5)}-${userCreatedData.zip.substring(5, 8)}`

  return (
    <Container>

      <h1>Usuário criado!</h1>

      <section>
        <div id='nameAndEmailDiv'>
          <UserField>
            <span>Nome</span>
            <p>{userCreatedData.name}</p>
          </UserField>

          <UserField>
            <span>Email</span>
            <p>{userCreatedData.email}</p>
          </UserField>
        </div>

        <FieldGridStreetNumber>
          <UserField>
            <span>Rua</span>
            <p id='formatStreetName'>{userCreatedData.street}</p>
          </UserField>

          <UserField>
            <span>Número</span>
            <p>{userCreatedData.number}</p>
          </UserField>
        </FieldGridStreetNumber>

        <UserField style={{ paddingLeft: '1.125rem' }}>
          <span>CEP</span>
          <p>{zip}</p>
        </UserField>

        <Button onClick={backToForm}>Novo usuário</Button>
      </section>
    </Container>

  )
}