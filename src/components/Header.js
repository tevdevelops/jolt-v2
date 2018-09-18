import React from 'react'

import logo from '../assets/images/logo.svg'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <img src={logo} className="logo" alt={'Logo'} />
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
