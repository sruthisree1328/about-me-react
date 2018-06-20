import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header class='header'>
                <nav>
                    <div class="float-left">
                        <a href="index.html">About Me</a>
                        <a href="posts.html">Posts</a>
                        <a href="skills.html">Skills</a>
                    </div>
                 </nav>
            </header>
        )
    }
}

export default Header