import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import logo from '../assets/images/down-arrow.png';
// import { bounce } from 'react-animations';
// import Radium, { StyleRoot } from 'radium';


class Start extends Component {

    componentDidMount() {
        $(document).ready(function () {
            $(".down").click(function () {
                $('html, body').animate({
                    scrollTop: $(".up").offset().top
                }, 1500);
            });
        });
    }

    render() {

        // Style.CSS

        const loginpageStyle = {
            // width: '100%',
            height: '657px',
            // marginTop: '-170px',
        };

        const loginStyle = {
            width: '800px',
            // height: '400px',
            marginTop: '270px',
            float: 'right',
            marginRight: '300px',
            // position: 'relative',
            // backgroundColor : 'red'
        };


        const headerStyle = {
            marginLeft: '60px',
            // marginBottom: '170px',
            color: 'white',
            fontSize: '59px'
            // marginTop: '50px',
        };

        const description = {
            marginLeft: '160px',
            // marginBottom: '170px',
            color: '#bbb',
            fontSize: '30px',
            marginTop: '30px',
        };

        const description2 = {
            marginLeft: '350px',
            marginTop: '-20px',
            // marginBottom: '170px',
            color: '#bbb',
            fontSize: '30px'
            // marginTop: '50px',
        };

        // const styles = {
        //     bounce: {
        //         animation: 'x 2s',
        //         animationName: Radium.keyframes(bounce, 'bounce')
        //     }
        // }



        return (
            <div>
                <div style={loginpageStyle} id="loginpageStyle">
                    <div style={loginStyle}>

                        <h1 style={headerStyle}> Welcome To Standings App </h1>
                        <p style={description}>The best standings app for football fans</p>
                        <p style={description2}>lets start</p>
                        {/* <div>
                            <NavLink className="nav-link" to='/Standings'>
                                <Button type="submit" style={buttonStyle}> League </Button>
                            </NavLink>
                            <NavLink className="nav-link" to='/Standings'>
                                <Button type="submit" style={buttonStyle}> Tournament </Button>
                            </NavLink>
                        </div> */}
                    </div>


                    <div className='down' id="scrollStyle">
                        <a href="#">
                            <span> <img src={logo} alt='scroll'></img></span>
                            <span> <img src={logo} alt='scroll'></img></span>
                            <span> <img src={logo} alt='scroll'></img></span>
                        </a>
                    </div>
                </div>


                <div className="cards up">
                    {/* <StyleRoot> */}
                    <NavLink className="nav-link" to='/Double-Elimination-Cup'>
                        <div className="Card1" /*style={styles.bounce}*/>

                        </div>
                    </NavLink>
                    {/* </StyleRoot> */}
                    <NavLink className="nav-link" to='/Single-Elimination-Cup'>
                        <div className="Card2">

                        </div>
                    </NavLink>

                    <NavLink className="nav-link" to='/League-Standings'>
                        <div className="Card3">

                        </div>
                    </NavLink>

                    <NavLink className="nav-link" to=''>
                        <div className="Card4">

                        </div>
                    </NavLink>

                    <NavLink className="nav-link" to=''>
                        <div className="Card5">

                        </div>
                    </NavLink>

                    <NavLink className="nav-link" to=''>
                        <div className="Card4">

                        </div>
                    </NavLink>

                </div>
            </div>


        )
    }
}

export default Start;