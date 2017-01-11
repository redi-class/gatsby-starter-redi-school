import React from 'react'
import Helmet from "react-helmet"
import { Flex, Box } from 'reflexbox'

import {
    Banner,
    Button,
    Container,
    Divider,
    Footer,
    Heading,
    Media,
    NavItem,
    Space,
    Text,
    Toolbar,
} from 'rebass'

export default () => (
    <div>
        <Toolbar backgroundColor='#fff' color="#000" >
            <NavItem>
                <Media p={2} img='https://placehold.it/239x48' />
            </NavItem>
            <Space auto />
            <NavItem children='Home' />
            <NavItem children='Courses' />
            <NavItem children='Students' />
            <NavItem children='Volunteers' />
            <NavItem children='Partners' />
            <NavItem children='About us' />
            <NavItem children='F' />
            <NavItem children='T' />
            <NavItem children='I' />
        </Toolbar>
        <Banner
            backgroundImage='https://placehold.it/960x412' >
            <Container m={2} >
                <Heading level={1} big={true} children='ReDI School' />
                <Text size={3} children='Using technology to break down barriers and connect the leaders of tomorrow.' />
                <Button children='APPLY AS A STUDENT' />
                <Space auto />
                <Button children='JOIN AS A VOLUNTEER' />
            </Container>
        </Banner>
        <Container m={2} >
            <Flex
                wrap
                justify='space-between'
                align='stretch'>
                <Flex
                    column
                    align='center'
                    style={{
                        width: 320,
                        minHeight: 384,
                    }}
                    >
                    <Space auto />
                    <Heading level={3} alt={true} >
                        ReDI School of Digital Integration is a non-profit digital school for tech-interested newcomers applying for asylum in Germany.
                    </Heading>
                    <Space auto />
                    <Text size={2}>
                        We offer our students high-quality training and the chance to collaborate with the start-up and digital industry.
                    </Text>
                    <Space auto />
                    <Text>
                        Our aim is to provide our students with valuable digital skills and a strong network of tech leaders, students and alumni to help create new opportunities for all.
                    </Text>
                    <Space auto />
                </Flex>
                <Flex
                    column
                    >
                    <Space auto />
                    <Heading level={2}>
                        CO-CREATE WITH US
                    </Heading>
                    <Space auto />
                    <Divider width={200} />
                    <Space auto />
                    <Button children="CONTACT US" />
                    <Space auto />
                </Flex>
            </Flex>
            <Space auto />
            <Flex wrap align="flex-end" >
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
                <Box auto>
                    <Media img='https://placehold.it/300x200' />
                </Box>
            </Flex>
        </Container>
        <Footer m={2} >
            <NavItem small={true} children='© 2016 By ReDI School' /> |
            <NavItem>
                <a href="#">IMPRINT & CONTACT</a>
            </NavItem>
            <Space auto />
            <NavItem children='F' />
            <NavItem children='T' />
            <NavItem children='I' />
        </Footer>
    </div>
)
