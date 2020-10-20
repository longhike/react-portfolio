import React from 'react'
import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import Portfolio from '../../Pages/Portfolio'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Header () {
    return (
        <Router>
          <div>
              <nav className={"navbar navbar-expand-lg navbar-light"}>
                  <Link to={'/'}><span className={"navbar-brand"}>longHike</span></Link>
                  <div className={"btn-toolbar"}>
                      <div className={"btn-group"}>
                        <Link to={'/'}><button className={"btn"} id={'about'}>Home</button></Link>
                        <Link to={'/portfolio'}><button className={"btn"} id={'portfolio'}>Portolio</button></Link>
                        <Link to={'/contact'}><button className={"btn"} id={'contact'}>Contact</button></Link>
                      </div>
                  </div>
              </nav>   
            <Switch>
                <Route path={"/contact"}>
                  <Contact />
                </Route>
                <Route path={"/portfolio"}>
                  <Portfolio />
                </Route>
                <Route path={"/"}>
                  <Home />
                </Route>
            </Switch>
          </div>
        </Router>
  );
}

export default Header;