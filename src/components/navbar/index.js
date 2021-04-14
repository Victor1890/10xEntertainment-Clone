import {
  Header,
  ImgHeader,
  HeaderMenu,
  HeaderItem,
  HeaderItemLink,
} from "./navbarStyle";

const Navbar = () => (
  <Header>
    <ImgHeader src='/logo.png' />
    <HeaderMenu>
      <HeaderItem>
        <HeaderItemLink>Homa</HeaderItemLink>
      </HeaderItem>
      <HeaderItem>
        <HeaderItemLink>Homa</HeaderItemLink>
      </HeaderItem>
      <HeaderItem>
        <HeaderItemLink>Homa</HeaderItemLink>
      </HeaderItem>
    </HeaderMenu>
  </Header>
);

export default Navbar;
