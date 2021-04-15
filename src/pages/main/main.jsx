import React from "react"
import Nav from "../../components/nav/nav.jsx"
import Logo from "../../components/logo/logo.jsx"
import Form from "../../components/form/form.jsx"
import Center from "../../components/center/center.jsx"
import Player from "../../components/player/player.jsx"
import Music from "../../components/player/sound/sound_00.mp3"
import LineForPageMain from "../../components/line/line_for_page_main/line_for_page_main.jsx"

export default function PageMain(){

    return (
        <Center>
            <LineForPageMain/>
            <Logo/>
            <Form/> 
            <Nav>
                <Player Music={Music} />
            </Nav>
        </Center>
    )
}