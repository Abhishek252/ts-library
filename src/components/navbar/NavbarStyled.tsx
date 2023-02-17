import styled from "styled-components";

interface HeaderProps {
  primary: Boolean;
}

export const Header = styled.header<HeaderProps>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.white : props.theme.colors.black};
  box-shadow: ${(props) => props.theme.colors.gray};
  position: sticky;
  top: 0;
  position: relative;
  padding: 10px;
`;

export const Logo = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${(props) => props.theme.colors.coral1};
  font-size: 40px;
  margin-left: 10px;
`;

export const SideMenu = styled.input.attrs({
  type: "checkbox",
  id: "sidemenu",
})`
  display: none;
  padding: 30px;
  &:checked ~ nav {
    max-height: 100%;
  }
  &:checked ~ label > span {
    background: transparent;
  }
  &:checked ~ label > span::before {
    transform: rotate(-45deg);
    background: ${(props) => props.theme.colors.white};
    opacity: 0.9;
    top: 0;
  }
  &:checked ~ label > span::after {
    transform: rotate(45deg);
    background: ${(props) => props.theme.colors.white};
    opacity: 0.9;
    top: 0%;
  }
`;

export const Hamb = styled.label.attrs({
  htmlFor: "sidemenu",
})`
  cursor: pointer;
  padding: 10px;
  position: absolute;
  z-index: 15;
  right: 20px;
  transform: translateY(-50%);
  top: 50%;
`;

export const HambLine = styled.span`
  background: ${(props) => props.theme.colors.black};
  display: block;
  height: 2px;
  position: relative;
  width: 24px;
  &::before,
  &::after {
    background: ${(props) => props.theme.colors.black};
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  &::before {
    top: 5px;
  }
  &::after {
    top: -5px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background-color: ${(props) => props.theme.colors.gray};
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const MenuItem = styled.li``;

export const MenuItemAnchor = styled.a`
  display: block;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.9;
  cursor: pointer;
  font-size: 22px;
  &:hover {
    opacity: 1;
  }
`;
