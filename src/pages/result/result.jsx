import React from "react"
import Nav from "../../components/nav/nav.jsx"
import Logo from "../../components/logo/logo.jsx"
import Home from "../../components/home/home.jsx"
import Center from "../../components/center/center.jsx"
import Player from "../../components/player/player.jsx"
import Message from "../../components/message/message.jsx"
import Music from "../../components/player/sound/sound_02.mp3"
import LineForPageMain from "../../components/line/line_for_page_main/line_for_page_main.jsx"

export default function PagePageResult(){

    return (
        <Center >
            <LineForPageMain/>
            <Logo/>
            <Message/>
            <Nav>
                <Home/>
                <Player Music={Music} />
            </Nav>
        </Center>
    )
}