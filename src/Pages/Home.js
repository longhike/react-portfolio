import React from 'react'

function Home () {
    return (
        <div className={"container-fluid"}> 
            <br />
            <div className={"row"}>
                <div className={"col-md-5"}>
                    <div className={"img-container"}>
                        <img id={'my_pic'}src={require('../images/assets/place_holder.png')} alt={"placeholder"}/>
                    </div>
                </div>
                <div className={"col-md-7 rounded"}>
                        <div className={"row about-content"}>
                            <h2>About me</h2>
                            <p>
                                <br />
                                Welcome to my personal site. My name is Sam, and I develop web apps under the handle @longHike. 
                                <br /><br />
                                I am a full-stack developer with skills in HTML5/CSS, JavaScript/JQuery, React.js, MySQL and MongoDB, Node.js and its libraries (particularly: express.js, passport.js, express-handlebars, mongoose, sequelize).
                                <br /><br />
                                Check out the Portfolio tab to see some of my projects (updated continuously), and the Contact tab for my resume and to get in touch. 
                            </p>
                        </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Home