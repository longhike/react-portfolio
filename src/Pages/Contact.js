import React from 'react'
import Card from '../Components/Card'

function Contact() {
    return (
        <div className={"container-fluid"} id={'contact-container'}>
            <div className={"card-deck"}>
                <Card class={"contact-card"}>
                    <img className={"card-img"} src={require('../images/assets/background-ss.png')} alt={"background ss graphic"} />
                    <div className={"card-img-overlay"}>
                        <h3><a className={'card-_link_light'} href={"mailto:sam.ascheim@gmail.com?subject=contact form"}>E-mail</a></h3>
                        <p className={"card-text contact-text"} style={{ display: "inline-block", color: "white" }}>sam.ascheim@gmail.com</p>
                    </div>
                </Card>
                <Card class={"contact-card"}>
                    <img className={"card-img"} src={require('../images/assets/background-ss.png')} alt={"background ss graphic"} />
                    <div className={"card-img-overlay"}>
                        <h3><a className={'card-_link_light'} href={"https://github.com/longhike"} rel={"noopener noreferrer"} target={"_blank"}>Github</a></h3>
                        <p className={"card-text contact-text"} style={{ display: "inline-block", color: "white" }}>https://github.com/longhike</p>
                    </div>
                </ Card>
                <Card class={"contact-card"}>
                    <img className={"card-img"} src={require('../images/assets/background-ss.png')} alt={"background ss graphic"} />
                    <div className={"card-img-overlay"}>
                        <h3><a className={'card-_link_light'} href={require('../images/assets/resume.pdf')} rel={"noopener noreferrer"} target={"_blank"}>Resume</a></h3>
                        <p className={"card-text contact-text"} style={{ display: "inline-block", color: "white" }}>(opens a .pdf)</p>
                    </div>
                </ Card>
            </div>
        </div>

    )
}

export default Contact