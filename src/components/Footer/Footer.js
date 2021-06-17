import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'

function Footer() {
    return (
        <>
            <div className="footer">

                <div className="logo">
                    <img src={logo} />
                </div>

                <div className="send_us">
                    <div className="send_text">
                        <h4> Send us your email to stay tuned </h4>
                    </div>

                    <div className="form_send">
                        {/* <form style={{marginTop: "2%"}}> */}
                        <input type="text" className="send_input" placeholder="yourmail@email.com" />
                        <input type="submit" value="xoxo" />
                        {/* </form> */}
                    </div>

                    <div className="copy_right" style={{ marginTop: "4%" }}>
                        <p>&#169; 2020. All rights reserved.</p>
                    </div>
                </div>

                <div className="follow_us">
                    <div className="title">
                        <h4>Follow us</h4>
                    </div>
                    <div className="social_media">
                        <a href="#" class="icon facebook"><img src={facebook}/></a>
                        <a href="#" class="icon linkedin"><img src={linkedin}/></a>
                        <a href="#" class="icon twitter"><img src={twitter}/></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
