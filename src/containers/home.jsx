import React from "react"
import '../styles/home.css'

import team1 from '../images/team1.JPG';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import {connect} from 'react-redux';
import {clearTokenId} from '../redux/action/action'
import {setCookie, getCookie} from '../components/cookies'

 class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            totalImage: 2,
            slideComonentClass: ""
        }
   
        if(getCookie("tokenId")=="")
        this.props.history.push("/login");
    }


    plusDiv(e) {
        e.preventDefault();

    }

    minusDiv(e) {
        e.preventDefault();

    }



    render() {
        return (
            <div>
                <section className="bag-container">

                    <section className="bag-title">
                        <div className="bag-titleheading">Coders of Bihar</div>
                        <div className="bag-titledisc"> Where coding meets talent!</div>
                    </section>

                    <section className="bag-service" >
                        <div className="bag-serviceheading" >
                            What we offers!
                    </div>
                        <div className="bag-servicecomponent">
                            <div className="bag-servicecomponentheading">Promises</div>
                            <div className="bag-servicecomponentbody">The seminary and institute curricula stress the scriptures and help the student to internalize their vibrancy and meaning.</div>
                        </div>
                        <div className="bag-servicecomponent">
                            <div className="bag-servicecomponentheading">Services</div>
                            <div className="bag-servicecomponentbody">The Art of Coders of Bihar offers a unique and comprehensive training and guide combining  study with mindfulness-awareness techniques. Our programs and individual sessions include state-of-the-art instruction in  all subject along with instruction in innovative techniques for cultivating full-bodied engagement in practicing and for developing confidence and communicative power in performance.</div>
                        </div>
                    </section>

                    <section className="bag-aboutcomponent" >

                        <div className="bag-aboutheader">Who we are</div>

                        <div className="slideshow-component-wrap">

                            <div className="slide-component ">
                                <img src={team1} />
                                <div className="slide-desc">
                                    <h4>Bijendra Gupta</h4>
                                    <h4>CEO</h4>
                                    <span>Bijendra gupta is the Chief Executive Officer of Coders of Bihar and a member of our Board of Directors.Our mission is to help student around the world to achieve their Goal</span>
                                </div>
                            </div>

                            <div className="slide-component ">
                                <img src={team2} />
                                <div className="slide-desc">
                                    <h4>Ravi Mishra</h4>
                                    <h4>Executive Director and COO</h4>
                                    <span>Ravi Mishra is the Executive Director and COO of Coders of Bihar and a member of our Board of Directors.</span>
                                </div>
                            </div>

                            <div className="slide-component m-17">
                                <img src={team3} />
                                <div className="slide-desc">
                                    <h4>Mohit Bisht</h4>
                                    <h4>Chief Marketing Officer</h4>
                                    <span>Mohit Bisht is the Chief Marketing Officer of Coders of Bihar and a member of our Board of Directors.He has been responsible for identifying new growth for company</span>
                                </div>
                            </div>


                            {/*<div className="prev-slide bag-isprevslideenable" onClick={this.minusDiv.bind(this)}>&#10094;</div>*/}
                            {/*<div className="next-slide bag-isnextslideenable" onClick={this.plusDiv.bind(this)}>&#10095;</div>*/}

                        </div>
                    </section>

                    {/*<section className="bag-body" >
                    </section>*/}

                </section>


            </div >
        );
    }

    
}
const mapStateToProps=state=>{
    return {
      isLogin:state.user["authSuccess"]!=null?state.user["authSuccess"]["data"]["idToken"]!=null:false
    };
  }
  
  const mapDispatchToProps=(dispatch)=>({
    clearTokenId:()=>{
      setCookie("tokenId","",0);
      setCookie("UserName","");
      return dispatch(clearTokenId());
  }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);