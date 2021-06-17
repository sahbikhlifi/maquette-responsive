import React from 'react'
import { NavLink } from 'react-router-dom';
import './Main.css';
import fond from '../../images/fond_1.png';
import trait from '../../images/trait.png';
import icon1 from '../../images/icon_1.png';
import icon2 from '../../images/icon_2.png';
import icon3 from '../../images/icon_3.png';


function Main() {
    return (
        <>
            <div className="first_part">
                <div className="section_1">
                    <div className="section_1_left">
                        <div className="title_section_1">
                            <h1>BE CAREFUL TO RESPECT THE DESIGN!</h1>

                        </div>
                        <p>
                            Technologies : HTML CSS JS <br></br>
                            Détail des specs front : Zeplin<br></br>
                            3 maquettes desktop, tablet et mobile, 2 breackpoints<br></br>
                            Desktop / tablet : 1200px(Desktop) / 1199 tablet<br></br>
                            Tablet / Mobile : 600px (Tablet) / 599 (mobile)
                        </p>

                        <NavLink to="/discover">
                            <button className="discover">
                                Let's discover
                            </button>
                        </NavLink>
                    </div>
                    <div className="section_1_right">
                        <img src={fond} />
                    </div>
                </div>
                <div className="section_2">
                    <div className="section_2_left">
                        <p>
                            Good luck about this block. Don't forget to respect the different breackpoints
                        </p>
                    </div>
                    <div className="section_2_right">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className="button_hang">
                            <NavLink to="/hangtherer">
                                <button className="hang_there">
                                    hang in there
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="second_part">
                <div className="trait">
                    <img src={trait} />
                </div>
                <br></br>
                <div className="text_part">
                    <p>Don't forget about the spacing! it's very important</p>
                </div>
                <div className="cards">

                    <div className="card_details">
                        <div className="part_1">
                            <div className="image_card">
                                <img src={icon1} style={{ height: "100px" }} />
                            </div>
                            <div className="title_card">
                                <h3>Lorem ipsum</h3>
                            </div>
                        </div>

                        <div className="text_card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </div>
                    </div>

                    <div className="card_details">
                        <div className="part_1">
                            <div className="image_card">
                                <img src={icon2} style={{ height: "100px" }} />
                            </div>
                            <div className="title_card">
                                <h3>Lorem ipsum</h3>
                            </div>
                        </div>

                        <div className="text_card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </div>
                    </div>

                    <div className="card_details">
                        <div className="part_1">
                            <div className="image_card">
                                <img src={icon3} style={{ height: "100px" }} />
                            </div>
                            <div className="title_card">
                                <h3 className="consulting_title_1">Lorem ipsum </h3>
                                <h3 className="consulting_title_2">Consulting</h3>
                            </div>
                        </div>

                        <div className="text_card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div className="button_cards">
                    <NavLink to="">
                        <button className="give_up">It's almost done, don't give up</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Main
