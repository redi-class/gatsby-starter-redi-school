import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from 'reflexbox'
import 'css/styles.css'

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
        <Helmet
            title='Welcome to ReDI School'
        />
        <Toolbar backgroundColor='#fff' color='#000'>
            <NavItem>
                <Media
                    p={2}
                    img='/static/redi-school-logo-206b5b_40b9f2073c364120a38c225d5b3dabc8-mv2.jpg'
                />
            </NavItem>
            <Space auto />
            <NavItem children='Home' />
            <NavItem children='Courses' />
            <NavItem children='Students' />
            <NavItem children='Volunteers' />
            <NavItem children='Partners' />
            <NavItem children='About us' />
            <NavItem>
                <Media
                    pb={0} mb={0}
                    backgroundColor='#777'
                    img='/static/facebook-icon-30646eb34311104aba036a018b9a226b.png'
                />
            </NavItem>
            <NavItem>
                <Media
                    pb={0} mb={0}
                    backgroundColor='#777'
                    img='/static/twitter-icon-d090c1c8997ee76d531500a6002f81a2.png'
                />
            </NavItem>
            <NavItem>
                <Media
                    pb={0} mb={0}
                    backgroundColor='#777'
                    img='/static/instagram-icon-d3645e6fa159b8ef24374656fc7b245a.png'
                />
            </NavItem>
        </Toolbar>
        <Banner
            backgroundImage='/static/redi-school-hero-image-206b5b_cea26d3ad6714acf944c096a9cf3d254~mv2.jpg' >
            <Container m={2} >
                <Heading
                    level={1}
                    big={true}
                    children='ReDI School'
                />
                <Text
                    size={3}
                    children='Using technology to break down barriers and connect the leaders of tomorrow.'
                />
                <Button children='APPLY AS A STUDENT' />
                <Space auto />
                <Button children='JOIN AS A VOLUNTEER' />
            </Container>
        </Banner>
        <Container m={2} >
            <Flex
                wrap
                justify='space-between'
                align='stretch'
            >
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
                <Flex column>
                    <Space auto />
                    <Heading level={2}>
                        CO-CREATE WITH US
                    </Heading>
                    <Space auto />
                    <Divider width={200} />
                    <Space auto />
                    <Button children='CONTACT US' />
                    <Space auto />
                </Flex>
            </Flex>
            <Space auto />
            <Flex wrap justify='space-between' m={2} >
                <Media
                    align='center'
                    img='/static/cnn-206b5b_f9eb2f6b61e14af381fd40d97c0a6d61~mv2.png'
                />
                <Media
                    align='center'
                    img='/static/handelsblatt-206b5b_baa1962353b54babb53ff0d431f8ae9c~mv2.png'
                />
                <Media
                    align='center'
                    img='/static/forbes-206b5b_85be8c14daff4dbc9b53e51c929aa312~mv2.png'
                />
                <Media
                    align='center'
                    img='/static/the-guardian-206b5b_a1bff4122a704edba4305e4ca73e915c~mv2.jpg'
                />
                <Media
                    align='center'
                    img='/static/die-zeit-206b5b_3a6744be26374afe98174d41937dc6d6~mv2.png'
                />
                <Media
                    align='center'
                    img='/static/bloomberg-206b5b_5079153fccce407985051f88d56495ef~mv2.jpg'
                />
                <Media
                    align='center'
                    img='/static/washington-post-206b5b_6d848b48c8844bd597fb8345f46aa906~mv2.jpg'
                />
                <Media
                    align='center'
                    img='/static/welt-n24-206b5b_7ee4cf0f2ead4fa8a7b804dbf7f202c7~mv2.png'
                />
                <Media
                    align='center'
                    img='/static/ajplus-206b5b_76f5324b0a1d4481bf0dbdd5e7254c26~mv2.png'
                />
                <Media
                    align='center'
                    img='/static/tedx-innovations-206b5b_009aec41271c410bb79c07c2820c2f70~mv2.jpg'
                />
                <Media
                    align='center'
                    img='/static/co-exist-206b5b_981ef7b40f764642ad396d71646e0df8~mv2.png'
                />
                <Media
                    align='center'
                    img='/static/deutsche-welle-206b5b_05500378376d46f0bb3342c0b0a12ad8~mv2.jpg'
                />
            </Flex>
        </Container>
        <Footer m={2} >
            <NavItem 
                small={true} 
                children='© 2016 By ReDI School'
            />
            |
            <NavItem>
                <a href='#'>IMPRINT & CONTACT</a>
            </NavItem>
            <Space auto />
            <NavItem>
                <Media
                    img='/static/facebook-icon-30646eb34311104aba036a018b9a226b.png'
                />
            </NavItem>
            <NavItem>
                <Media
                    img='/static/twitter-icon-d090c1c8997ee76d531500a6002f81a2.png'
                />
            </NavItem>
            <NavItem>
                <Media
                    img='/static/instagram-icon-d3645e6fa159b8ef24374656fc7b245a.png'
                />
            </NavItem>
        </Footer>
    </div >
)
