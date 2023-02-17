import React from "react";
import {
  Hamb,
  HambLine,
  Header,
  Logo,
  Menu,
  MenuItem,
  MenuItemAnchor,
  Nav,
  SideMenu,
} from "./NavbarStyled";

interface NavbarProps {
  primary: Boolean;
}

const Navbar = (props: NavbarProps) => {
  return (
    <Header primary={props.primary}>
      <Logo>Textapparatus</Logo>
      <SideMenu />
      <Hamb>
        <HambLine></HambLine>
      </Hamb>
      <Nav>
        <Menu>
          <MenuItem>
            <MenuItemAnchor>Word cloud</MenuItemAnchor>
          </MenuItem>
          <MenuItem>
            <MenuItemAnchor>HTML Parser</MenuItemAnchor>
          </MenuItem>
        </Menu>
      </Nav>
    </Header>
  );
};

export { Navbar };
