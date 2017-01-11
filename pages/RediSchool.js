import React from 'react'
import Helmet from "react-helmet"
import Icon from 'react-geomicons'
import { Flex, Box } from 'reflexbox'

import {
    Banner,
    Footer,
    Heading,
    NavItem,
    Space,
    Toolbar,
} from 'rebass'

export default () => (
    <div>
        <Toolbar>
            <NavItem is="a">
                Toolbar
            </NavItem>
            <NavItem is="a">
                NavItem
            </NavItem>
            <Space
                auto
                x={1}
                />
            <NavItem is="a">
                NavItem
            </NavItem>
        </Toolbar>
        <Banner
            align="center"
            backgroundImage="https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg"
            >
            <Heading
                level={2}
                size={0}
                >
                Rebass
        </Heading>
        </Banner>
        <Heading level={0}>
            Welcome to your new ReDI School homepage
        </Heading>
        <p>Yiipee!!!</p>
        <Footer>
            Footer™ ©2016 Jxnblk
        </Footer>
    </div>
)
