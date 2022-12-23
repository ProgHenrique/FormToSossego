import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, TextArea } from './styles';
import { Button } from '../../../../styles/button';
import { useContextSelector } from 'use-context-selector';
import { FormContext } from '../../../../contexts/FormContext';

const createAboutFormValidationSchema = zod.object({
  about: zod.string().min(1)
})

type AboutFormData = zod.infer<typeof createAboutFormValidationSchema>

export function FormAbout() {
  const { setFormAboutData, setFormAddressData } = useContextSelector(FormContext, (context) => {
    return {
      setFormAboutData: context.setFormAboutData,
      setFormAddressData: context.setFormAddressData
    }
  })
  const { register, watch, handleSubmit, reset } = useForm<AboutFormData>({
    resolver: zodResolver(createAboutFormValidationSchema),
    defaultValues: {
      about: ''
    },
  })

  function handleGetAboutData(data: AboutFormData) {
    try {
      createAboutFormValidationSchema.safeParse(data)
      setFormAboutData(data)
      reset()
    } catch (error) {}
  }

  function backToAddressForm() {
    setFormAddressData({
      zip: '',
      street: '',
      number: '',
      neighbor: '',
      city: '',
      landmark: '',
    })
    setFormAboutData({
      about: ''
    })
  }

  const isSubmitDisabled = !watch('about')
  return (
    <Form onSubmit={handleSubmit(handleGetAboutData)}>
      <fieldset>
        <label htmlFor="about">Nos conte mais sobre você</label>
        <TextArea {...register('about')} required />
      </fieldset>

      <div>
        <Button onClick={backToAddressForm} type='button' color={'gray'}>Anterior</Button>
        <Button disabled={isSubmitDisabled} type='submit' color={'purple'}>Próximo passo</Button>
      </div>
    </Form >
  )
}