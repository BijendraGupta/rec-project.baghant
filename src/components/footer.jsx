import React from "react"
import '../styles/footer.css'
import fb from '../images/fb.png';


export default class Header extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <footer>
                <div className="footer-upper-container">
                    <div className="footer-upperleft-container">Connect with us!</div>
                    <div className="footer-upperright-container"><a >bijendrakrguptaitfiem@gmail.com</a>
                    </div>
                </div>
                <div className="footer-lower-container">
                    <div className="footer-upperleft-container">© 2019 Copyright: baghant.com</div>
                </div>
            </footer>
        );
    }

}