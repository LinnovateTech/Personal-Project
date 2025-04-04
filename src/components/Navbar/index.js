import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    <NavLink href='/' style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
                        <DiCssdeck size='2rem'/> <Span>LinnovateTech</Span>
                    </NavLink>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => setIsOpen(!isOpen)} />
                </MobileIcon>
                <NavItems>
                    <NavLink href='/sobre'>Sobre nós</NavLink>
                    <NavLink href='/servicos'>Serviços</NavLink>
                    <NavLink href='/projetos'>Projetos</NavLink>
                    <NavLink href='/contato'>Contato</NavLink>
                </NavItems>
                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="/sobre" onClick={() => setIsOpen(false)}>Sobre nós</MobileLink>
                        <MobileLink href="/servicos" onClick={() => setIsOpen(false)}>Serviço</MobileLink>
                        <MobileLink href="/projetos" onClick={() => setIsOpen(false)}>Projetos</MobileLink>
                        <MobileLink href="/contato" onClick={() => setIsOpen(false)}>Contato</MobileLink>
                    </MobileMenu>
                )}
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;