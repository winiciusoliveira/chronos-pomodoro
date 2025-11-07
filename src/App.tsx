import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { DefaultForm } from "./components/DefaultForm";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <DefaultForm>
          <DefaultInput
            id="meuInput"
            type="text"
            labelText="Tarefas"
            placeholder="Digite Algo"
          />
        </DefaultForm>

        <DefaultForm>
          <p>Lorem ipsum dolor sit amet.</p>
        </DefaultForm>

        <DefaultForm>
          <p>Ciclos</p>
          <p>0 0 0 0 0 0</p>
        </DefaultForm>
      </Container>
    </>
  );
}

export default App;
