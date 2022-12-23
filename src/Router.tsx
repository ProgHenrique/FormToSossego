import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { FormContext } from "./contexts/FormContext";
import { Form } from "./pages/Form";
import { ShowUserCreated } from "./pages/ShowUserCreated";

export function Router() {
  const allFormsFilledIn = useContextSelector(FormContext, (context) => {
    return context.allFormsFilledIn
  })

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/user') {
      !allFormsFilledIn && navigate('/')
    }

  }, [])
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Form />} />
        <Route path="/user" element={<ShowUserCreated />} />
      </Route>
    </Routes>
  )
}