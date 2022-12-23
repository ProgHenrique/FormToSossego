import { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "use-context-selector";

interface FormContextType {
  formUserIsFilledIn: boolean
  formAddressIsFilledIn: boolean
  userCreatedData: UserCreated
  allFormsFilledIn: boolean
  setFormCreateUserData: (data: FormUser) => void
  setFormAddressData: (data: FormAddress) => void
  setFormAboutData: (data: FormAbout) => void
}

interface FormUser {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  birthDate: string;
}

interface FormAddress {
  zip: string;
  street: string;
  number: string;
  neighbor: string;
  city: string;
  landmark: string;
}

interface FormAbout {
  about: string;
}

interface UserCreated {
  name: string;
  email: string;
  street: string;
  number: string;
  zip: string;
}

export const FormContext = createContext({} as FormContextType)
interface FormProviderProps {
  children: ReactNode
}
export function FormProvider({ children }: FormProviderProps) {

  const [formCreateUserData, setFormCreateUserData] = useState<FormUser>({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    birthDate: '',
  })
  const [formAddressData, setFormAddressData] = useState<FormAddress>({
    zip: '',
    street: '',
    number: '',
    neighbor: '',
    city: '',
    landmark: '',
  })

  const [formAboutData, setFormAboutData] = useState<FormAbout>({
    about: ''
  })

  const [userCreatedData, setUserCreatedData] = useState<UserCreated>({
    email: '',
    name: '',
    number: '',
    street: '',
    zip: '',
  })

  const formUserIsFilledIn = !Object.values(formCreateUserData).includes("")
  const { landmark, ...formAddressWithoutLandMark } = formAddressData
  const formAddressIsFilledIn = !Object.values({ ...formAddressWithoutLandMark }).includes("")
  const formAboutIsFilledIn = !Object.values(formAboutData).includes("")

  const allFormsFilledIn = formUserIsFilledIn && formAddressIsFilledIn && formAboutIsFilledIn

  function resetAllForms() {
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

    setFormAboutData({
      about: ''
    })
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (allFormsFilledIn) {
      setUserCreatedData({
        email: formCreateUserData.email,
        name: formCreateUserData.name,
        number: formAddressData.number,
        street: formAddressData.street,
        zip: formAddressData.zip,
      })

      resetAllForms()

      navigate('/user')
    }
  }, [formAboutData])

  return (
    <FormContext.Provider
      value={{
        formUserIsFilledIn,
        formAddressIsFilledIn,
        userCreatedData,
        allFormsFilledIn,
        setFormCreateUserData,
        setFormAddressData,
        setFormAboutData
      }}
    >
      {children}
    </FormContext.Provider>
  )
}