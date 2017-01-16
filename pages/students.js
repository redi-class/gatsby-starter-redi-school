import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from 'reflexbox'
import 'css/styles.css'

import {
    Avatar,
    Banner,
    ButtonOutline,
    Card,
    img,
    Container,
    Divider,
    Footer,
    Heading,
    NavItem,
    Space,
    Text,
    Toolbar,
} from 'rebass'

export default () => (
    <div>
        <Helmet
            title='ReDI School Students'
        />
        <Toolbar backgroundColor='#fff' color='#000'>
            <NavItem>
                <img src='/static/redi-school-logo-206b5b_40b9f2073c364120a38c225d5b3dabc8-mv2.jpg'
                    style={{
                        maxWidth: '239px',
                        height: 'auto',
                    }}
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
                <img src='/static/social-icons/facebook-icon-30646eb34311104aba036a018b9a226b.png'
                />
            </NavItem>
            <NavItem>
                <img src='/static/social-icons/twitter-icon-d090c1c8997ee76d531500a6002f81a2.png'
                />
            </NavItem>
            <NavItem>
                <img src='/static/social-icons/instagram-icon-d3645e6fa159b8ef24374656fc7b245a.png'
                />
            </NavItem>
        </Toolbar>
        <Container m={1} backgroundColor='rgba(127, 127, 127, 0.5)'>
            <Heading
                my={1}
                level={1}
                big={true}
                children='This is where your digital career begins'
            />
            <Text
                my={1}
                size={3}
                children='We offer our students IT-skills training, mentorship and job training in partnership with tech-industry leaders.'
            />
            <ButtonOutline
                children='APPLY AS A STUDENT'
                color='black'
            />
            <Space auto />
        </Container>
        <Banner
            backgroundImage='/static/students/206b5b_fe97cae6fcaf4f44a596c33b9ac07758~mv2_d_4288_2848_s_4_2.jpg'
        >
        </Banner>
        <Container m={1} backgroundColor='rgba(127, 127, 127, 0.5)'>

            <Heading
                level={1}
                children='HOW CAN I APPLY?'
                my={1}
            />
            <Flex
                wrap
                align='bottom'
            >

                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_0cf9256972894e1ab890b0c908eb6157~mv2.png' />
                    </Box>
                    <Text>
                        READ COURSE LIST SEPT. 27
                </Text>
                </Box>
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_64ed82802e784569982a485e83c672c1~mv2.png' />
                    </Box>
                    <Text>
                        ATTEND INFO WEEK OCT. 5-12
                </Text>
                </Box>
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_ab706bb8ba904ca0a79253b54298f58d~mv2.png' />
                    </Box>
                    <Text>
                        ATTEND "TASTER CLASS" OCT. 8-9
                </Text>
                </Box>
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_e703537141bf4ab99bedf4ea6933447b~mv2.png' />
                    </Box>
                    <Text>
                        REGISTER FOR CLASS OCT. 12
                </Text>
                </Box>
                <Box m={3}>
                    <Box align='center'>
                        <img src='/static/students/icons/206b5b_ea825263eae545f9b98ce398c4a3a523~mv2.png' />
                    </Box>
                    <Text>
                        JOIN YOUR CLASS OCT. 17 - JAN. 31
                </Text>
                </Box>
            </Flex>
        </Container>
        <Container m={2} >
            <Flex
                wrap
                justify='space-between'
                align='stretch'
            >
                <Flex
                    column
                    align='stretch'
                    style={{
                        width: 320,
                        minHeight: 384,
                    }}

                >
                    <Space auto />
                    <Heading level={3} my={1} >
                        DO YOU WANT TO LEARN 21st CENTURY SKILLS?
​                    </Heading>
                    <Text pb={1} >
                        We provide several training courses in computer programming, digital entrepreneurship, business intelligence and user interface design - to name but a few. Each course is tailored to individual skill levels. For entry level classes, no IT knowledge is required. On top, you will be offered several workshops and networking opportunities, where you get to collaborate with our partners and alumni.
                   </Text>
                    <Text pb={1} >
                        During the course, you will meet tech industry leaders and growing companies to immerse yourself into the local startup and tech scene. Our education programmes are suited for both beginners and advanced students and designed to help you get a job in the tech- or startup industry.
                    </Text>
                    <Text pb={1} >
                        To support you in your studies we equip you with a laptop and a workstation in a co-working space with internet access, so you can work in project groups.
                    </Text>
                    <Space auto />
                    <Heading level={3} my={1} >
                        GET TO KNOW US AT OUR UPCOMING EVENTS!
​                    </Heading>
                    <Space auto />
                    <Divider />
                    <ButtonOutline
                        children='VIEW EVENTS'
                        color='black'
                        m={2}
                    />
                    <Space auto />
                </Flex>
                <Flex column
                    align='stretch'
                >
                    <Heading level={3} my={1}>
                        AM I ELIGIBLE?
                    </Heading>
                    <Text pb={1}>
                        Do you live in Berlin, Germany?
                    </Text>
                    <Text pb={1}>
                        Are you highly motivated to learn digital skills?
                    </Text>
                    <Text pb={1}>
                        Do you have the time to commit to the three months programme?
                    </Text>
                    <Text pb={1}>
                        Do you speak English?
                    </Text>
                    <Text pb={1}>
                        Are you seeking asylum in Germany?
​                    </Text>
                    <Divider />
                    <ButtonOutline
                        children='APPLY AS A STUDENT'
                        color='black'
                    />
                    <Banner
                        backgroundImage='/static/students/206b5b_bcca47f7892141a28ac8f742bc45a6bf~mv2_d_4968_3725_s_4_2.jpg'
                    >
                        <Space auto />
                        <Container m={1} backgroundColor='rgba(127, 127, 127, 0.5)'>
                            <Heading
                                my={1}
                                level={1}
                                big={true}
                                children='STILL HAVE QUESTIONS?'
                                color='black'
                            />
                            <Text
                                size={3}
                                children='Please write an e-mail to Mireia, our Student and Volunteeer Liaison.'
                                color='black'
                            />
                            <Divider />
                            <ButtonOutline
                                children='SEND EMAIL'
                                color='black'
                            />
                        </Container>
                    </Banner>

                    <Space auto />
                </Flex>
            </Flex>
            <Space auto />
            <Heading level={2} align='center' my={1} >
                MEET SOME OF OUR STUDENTS
            </Heading>
            <Space auto />
            <Flex wrap justify='space-between' align='center'>
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_0a7227d6afce432081345e2a0931fcc0-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_0c84b98931324c4f9508bbc961a7b552-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_0d734257de1a4f56bd4bbc1edf2d8ed5-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_4a4de1310e60428d92c77a8faffd978d-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_7ec596f87bf24b0386ded7792081ca99-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_8ec77312c1c04bcb9652dc65b78e9ed2-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_103fd3666b7a4c3784661a4660b50e78-mv2_d_4968_3725_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_407d70d657d64ee3a7ce89471bd0193a-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_626db207fee749039a5ecb81a277ac1d-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_2622bc8ecc7444a08464acf7b82864ab-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_33592c1e71f94b96a2cfb4ab80f6e4e5-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_3037899e1c9f4a818873f7ccda5ed098-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_a2ecaaabd4094817b38545731964570f-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_a9385bc2c5cb48da9a56fbfb9a7a5265-mv2_d_4343_2897_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_a46678f2f45245f994c1799156d0f4e4-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_ac7d6073385f4ef0b1bda78ec88025cb-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_b984524801cf4542b9afe6022d7efacc-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_c2771e75b47a40dd912d81620372cd45-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_dca63440c79646b4b1c4fec123ccc4a4-mv2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_e21b746f08f341e597be824a0ca348a1-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_f6ea4a8b0cfa45e3ba19ce89eb116c80-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_f462280c23754412858057815560a5c1-mv2_d_4416_2947_s_4_2.jpg'
                />
                <Avatar
                    size={150}
                    src='/static/students/students/206b5b_fa15ba6047a7495f89992df9bd434449-mv2_d_4416_2947_s_4_2.jpg'
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
                <img src='/static/social-icons/facebook-icon-30646eb34311104aba036a018b9a226b.png'
                />
            </NavItem>
            <NavItem>
                <img src='/static/social-icons/twitter-icon-d090c1c8997ee76d531500a6002f81a2.png'
                />
            </NavItem>
            <NavItem>
                <img src='/static/social-icons/instagram-icon-d3645e6fa159b8ef24374656fc7b245a.png'
                />
            </NavItem>
        </Footer>
    </div >
)
