import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';

import { Button } from "../../../../styles/button";
import { Form, FormFieldsGrid, Input } from "./styles";
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { FormContext } from '../../../../contexts/FormContext';

const createUserFormValidationSchema = zod.object({
  name: zod.string().min(1).trim(),
  password: zod.string().min(8),
  confirmPassword: zod.string().min(8),
  email: zod.string().email('Insira um email válido').min(1),
  birthDate: zod.string()
})

type CreateUserFormData = zod.infer<typeof createUserFormValidationSchema>

export function FormUser() {
  const setFormCreateUserData = useContextSelector(FormContext, (context) => {
    return context.setFormCreateUserData
  })
  const [emailMessageError, setEmailMessageError] = useState('')
  const [invalidDateMessageError, setInvalidDateMessageError] = useState('')

  const { register, watch, handleSubmit, getValues, setValue, reset } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  function handleGetCreateUserData(data: CreateUserFormData) {
    try {
      createUserFormValidationSchema.safeParse(data)
      setFormCreateUserData(data)
      reset()
    } catch (error) {}

  }

  function handleIsEmail(event: FocusEvent<HTMLInputElement>) {
    try {
      createUserFormValidationSchema.parse({
        email: event.target.value
      })
    } catch (error) {
      if (error instanceof zod.ZodError) {
        const message = error.issues.find(err => err.path[0] === 'email')?.message
        setEmailMessageError(message ?? '')
      }
    }
  }

  function handleValidDate(event: ChangeEvent<HTMLInputElement>) {
    setValue('birthDate', event.target.value)
    if (new Date(event.target.value) < new Date('1900-01-01')) {
      setInvalidDateMessageError('Essa é uma data invalida')
      return
    }
    setInvalidDateMessageError('')
  }

  const formFields = watch([
    'name',
    'password',
    'email',
    'confirmPassword',
    'birthDate',
  ])

  const passwordMatch = getValues('confirmPassword') === getValues('password')
  const invalidDateToSubmit = new Date(getValues('birthDate')) < new Date('1900-01-01')
  const isSubmitDisabled = formFields.includes("") || !passwordMatch || invalidDateToSubmit || Boolean(emailMessageError)

  return (
    <Form onSubmit={handleSubmit(handleGetCreateUserData)}>
      <fieldset>
        <label htmlFor="name">Nome</label>
        <Input
          type="text"
          required
          {...register('name')}
        />
      </fieldset>

      <FormFieldsGrid>
        <fieldset>
          <label htmlFor="password">Senha</label>
          <Input type="password" required {...register('password')} />
        </fieldset>

        <fieldset>
          <label htmlFor="confirmPassword">
            Confirmar senha
            {!passwordMatch && <p>*As senhas não conferem</p>}
          </label>
          <Input
            type="password"
            required
            {...register('confirmPassword')}
            onChange={(event) => setValue('confirmPassword', event.target.value)}
            value={getValues('confirmPassword')}
          />
        </fieldset>
      </FormFieldsGrid>

      <FormFieldsGrid>
        <fieldset>
          <label htmlFor="email">
            Email
            {emailMessageError && <p>*{emailMessageError}</p>}
          </label>
          <Input type="email" required {...register('email')} onBlur={handleIsEmail} />
        </fieldset>

        <fieldset>
          <label htmlFor="birthDate">
            Data de nascimento
            {invalidDateMessageError && <p>*{invalidDateMessageError}</p>}
          </label>
          <Input
            type="date" required
            {...register('birthDate')}
            min="1900-01-01"
            max="2004-12-31"
            onChange={handleValidDate}
          />

        </fieldset>
      </FormFieldsGrid>

      <div>
        <Button disabled={isSubmitDisabled} type='submit' color={'purple'}>Próximo passo</Button>
      </div>
    </Form>
  )
}