import React from 'react'
import Card from '../Components/Card'

function Portfolio () {
    return (
        <div className={"container-fluid"}>
            <div className={"card-deck"}>
                {/* <!-- this is the password generator card --> */}
                <Card class={"portfolio-card"}>
                    <img className={"card-img"} src={"https://images.idgesg.net/images/article/2018/08/5_password-best-practices_unique-passwords_authentication-100768646-large.jpg"} alt={"password graphic"} />
                    <div className={"card-img-overlay"}>
                        <h4><a className={'card-_link_light'} href={"http://Password4U-env.eba-ybnfmahx.us-east-2.elasticbeanstalk.com"} rel={"noopener noreferrer"}target={"_blank"}>Password Generator</ a></h4>
                        <p className={"card-text"}><a className={'card-_link_light'} href={"https://github.com/longhike/password4u"} rel={"noopener noreferrer"} target={"_blank"} style={{display: "inline-block;"}}>Github</ a></p>
                    </div>
                </ Card>
                {/* <!-- this is the star wars quiz card --> */}
                <Card class={"portfolio-card"}>
                    <img className={"card-img"} src={"https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"} alt={"star wars graphic"} />
                    <div className={"card-img-overlay"}>
                        <h2><a className={'card-_link_light'} href={"http://starwars4u-env.eba-i9zrhymm.us-east-2.elasticbeanstalk.com/"} rel={"noopener noreferrer"} target={"_blank"}>Star Wars Quiz</a></h2>
                        <p className={"card-text"} style={{display: "inline-block;"}}><a className={'card-_link_light'} href={"https://github.com/longhike/starwars4u"} rel={"noopener noreferrer"} target={"_blank"}>Github</a></p>
                    </div>
                </ Card>
                {/* <!-- this is the covid app card --> */}
                <Card class={"portfolio-card"}>
                    <img className={"card-img"} src={"https://dynaimage.cdn.cnn.com/cnn/digital-images/org/6cfc0b88-7523-4f8a-adbe-6deb2a148a34.jpg"} alt={"covid graphic"} />
                    <div className={"card-img-overlay"}>
                        <h2><a className={'card-_link_light'}href={"https://precision19.herokuapp.com/"} rel={"noopener noreferrer"} target={"_blank"}>Precision19</a></h2>
                        <p className={"card-text"} style={{display: "inline-block;"}}><a className={'card-_link_light'} href={"https://github.com/longhike/covid-data-app"} rel={"noopener noreferrer"} target={"_blank"}>Github</a></p>
                    </div>
                </ Card>
            </div>
            <div className={"card-deck"}>
                {/* <!-- this is stop using notes app app --> */}
                <Card class={"portfolio-card"}>
                    <img className={"card-img"} src={require('../images/assets/background-ss.png')} alt={"day planner graphic"} />
                    <div className={"card-img-overlay"}>
                        <h3><a className={'card-_link_light'} href={"https://morning-headland-82232.herokuapp.com/"} rel={"noopener noreferrer"} target={"_blank"}>The "Stop Using the Notes App" App</a></h3>
                        <p className={"card-text"} style={{display: "inline-block;"}}><a className={'card-_link_light'} href={"https://github.com/longhike/post-project"} rel={"noopener noreferrer"} target={"_blank"}>Github</a></p>
                    </div>
                </ Card>
                {/* <!-- this is the day planner card --> */}
                <Card class={"portfolio-card"}>
                    <img className={"card-img"} src={"https://previews.123rf.com/images/njnightsky/njnightsky0709/njnightsky070900032/1599802-a-yellow-pencil-on-a-day-planner.jpg"} alt={"day planner graphic"} />
                    <div className={"card-img-overlay"}>
                        <h2><a className={'card-_link_dark'} href={"https://longhike.github.io/dayplanner4u/"} rel={"noopener noreferrer"} target={"_blank"}>Day Planner App</a></h2>
                        <p className={"card-text"} style={{display: "inline-block;"}}><a className={'card-_link_dark'} href={"https://github.com/longhike/dayplanner4u"} rel={"noopener noreferrer"} target={"_blank"}>Github</a></p>
                    </div>
                </ Card>
                {/* <!-- this is my project one card -->  */}
                <Card class={"portfolio-card"}>
                    <img className={"card-img"} src={require('../images/assets/background-ss.png')} alt={"temperature ss graphic"} />
                    <div className={"card-img-overlay"}>
                        <h3><a className={'card-_link_light'} href={"https://longhike.github.io/Project1/"} rel={"noopener noreferrer"} target={"_blank"}>Temperature: the mood stabilizer</a></h3>
                        <p className={"card-text"} style={{display: "inline-block;"}}><a className={'card-_link_light'} href={"https://github.com/longhike/Project1"} rel={"noopener noreferrer"} target={"_blank"}>Github</a></p>
                    </ div>
                </ Card>
            </div>
           
        </div>
    )
}

export default Portfolio