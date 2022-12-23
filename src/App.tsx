import { globalStyles } from './styles/global'
import { BodyColor, Container } from './styles/app';
import { FormProvider } from './contexts/FormContext';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

globalStyles();
export function App() {
  return (
    <>
      <BodyColor></BodyColor>
      <Container>
        <BrowserRouter>
          <FormProvider>
            <Router />
          </FormProvider>
        </BrowserRouter>
      </Container>
    </>

  )
}

