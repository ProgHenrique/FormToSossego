import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormFieldsGrid, Input, Optional } from './styles'
import { Button } from '../../../../styles/button';
import { ChangeEvent, FocusEvent } from 'react';
import { useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { FormContext } from '../../../../contexts/FormContext';

const createAddressFormValidationSchema = zod.object({
  zip: zod.string().min(8),
  street: zod.string().min(1),
  number: zod.string().min(1),
  neighbor: zod.string().min(1),
  city: zod.string().min(1),
  landmark: zod.string()
})

type AddressFormData = zod.infer<typeof createAddressFormValidationSchema>

export function FormAddress() {
  const { setFormAddressData, setFormCreateUserData } = useContextSelector(FormContext, (context) => {
    return {
      setFormAddressData: context.setFormAddressData,
      setFormCreateUserData: context.setFormCreateUserData
    }
  })

  const [zipInvalid, setZipInvalid] = useState('')
  const [zipValue, setZipValue] = useState('')
  const [numberValue, setNumberValue] = useState('')
  const { register, watch, handleSubmit, setValue, reset } = useForm<AddressFormData>({
    resolver: zodResolver(createAddressFormValidationSchema),
    defaultValues: {
      zip: '',
      street: '',
      number: '',
      neighbor: '',
      city: '',
      landmark: '',
    },
  })

  function handleGetAddressData(data: AddressFormData) {
    try {
      createAddressFormValidationSchema.safeParse(data)
      setFormAddressData(data)
      reset()
    } catch (error) {}
  }

  function handleZipFormatValue(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 9) return

    if (!isNaN(Number(event.target.value))) {
      setZipValue(event.target.value)
      setValue('zip', event.target.value)
      event.target.value.length === 8 && setZipInvalid('')
      return
    }
  }

  function handleZipInvalid(event: FocusEvent<HTMLInputElement>) {
    if (zipValue.length < 8) {
      setZipInvalid('Insira um CEP válido')
    } else {
      setZipInvalid('')
    }
  }

  function handleNumberFormatValue(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 10) return

    if (!isNaN(Number(event.target.value))) {
      setNumberValue(event.target.value)
      return
    }
  }

  function backToFormCreateUser() {
    setFormCreateUserData({
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
      birthDate: '',
    })

    setFormAddressData({
      zip: '',
      street: '',
      number: '',
      neighbor: '',
      city: '',
      landmark: '',
    })
  }

  const formFields = watch([
    'city',
    'neighbor',
    'number',
    'street',
    'zip',
  ])

  const isSubmitDisabled = formFields.includes("") || Boolean(zipInvalid)

  return (
    <Form onSubmit={handleSubmit(handleGetAddressData)}>
      <FormFieldsGrid>
        <fieldset>
          <label htmlFor="zip">
            CEP
            {zipInvalid && <p>*{zipInvalid}</p>}
          </label>
          <Input
            type="text"
            required
            {...register('zip')}
            onBlur={handleZipInvalid}
            onChange={handleZipFormatValue}
            value={zipValue}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="street">Rua</label>
          <Input type="text" required {...register('street')} />
        </fieldset>
      </FormFieldsGrid>

      <FormFieldsGrid>
        <FormFieldsGrid fieldGap={'numberToNeighbor'}>
          <fieldset>
            <label htmlFor="number">Número</label>
            <Input
              type="text" required
              {...register('number')}
              onChange={handleNumberFormatValue}
              value={numberValue}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="neighbor">Bairro</label>
            <Input type="text" required {...register('neighbor')} />
          </fieldset>
        </FormFieldsGrid>

        <fieldset>
          <label htmlFor="city">Cidade</label>
          <Input type="text" required {...register('city')} />
        </fieldset>
      </FormFieldsGrid>


      <fieldset>
        <label htmlFor="landmark">
          Ponto de Referência
          <Optional> (Opcional)</Optional>
        </label>

        <Input type="text" {...register('landmark')} />
      </fieldset>

      <div>
        <Button onClick={backToFormCreateUser} type='button' color={'gray'}>Anterior</Button>
        <Button disabled={isSubmitDisabled} type='submit' color={'purple'}>Próximo passo</Button>
      </div>
    </Form>
  )
}