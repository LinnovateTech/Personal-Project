import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <a href='/' style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
                        <DiCssdeck size='3rem'/> <Span>LinnovateTech</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href='sobre'>Sobre nós</NavLink>
                    <NavLink href='servicos'>Serviços</NavLink>
                    <NavLink href='projetos'>Projetos</NavLink>
                    <NavLink href='contato'>Contato</NavLink>
                </NavItems>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="sobre" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Sobre nós</MobileLink>
                        <MobileLink href="servicos" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Serviço</MobileLink>
                        <MobileLink href="projetos" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Projetos</MobileLink>
                        <MobileLink href="contato" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Contato</MobileLink>
                    </MobileMenu>
                }
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;