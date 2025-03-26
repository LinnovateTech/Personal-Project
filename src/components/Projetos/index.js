import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton } from './ProjectStyle'
import ProjectCard from '../Cards/ProjetoCard'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToogle] = useState("all");

    return (
        <Container id='projects'>
            <Wrapper>
                <Title>Projetos</Title>
                <Desc> Alguns dos projetos realizados pela nossa empresa.</Desc>
                <ToggleButtonGroup>
                    {toggle === "all" ?
                        <ToggleButton active value="all" onClick={() => setToogle("all")}>Todos</ToggleButton>
                        :
                        <ToggleButton value="all" onClick={() => setToogle("all")}>Todos</ToggleButton>
                    }
                    
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' && projects
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects;