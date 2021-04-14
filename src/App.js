import styled from "styled-components";
import Navbar from "./components/navbar/index";
import Header from "./components/header/index";

const Main = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <Main>
      {/* <Navbar /> */}
      <Header />
    </Main>
  );
}

export default App;
