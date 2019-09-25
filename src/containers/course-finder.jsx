import React from "react"
import '../styles/course-finder.css'
import Course from '../components/course'
import math from '../images/math.jpg'
import {connect} from 'react-redux';
import {clearTokenId} from '../redux/action/action'
import {setCookie, getCookie} from '../components/cookies'

 class CourseFinder extends React.Component {


    constructor(props) {
        super(props);
        if(getCookie("tokenId")=="")
        this.props.history.push("/login");
    }
    render() {
        let courseList = [{
            'courseName': 'Java for Beginers',
            'image':math
        }];
        const courseComList=courseList.map(courseInfo=>{
            return <Course course={courseInfo} />
        });
        return (
            <div>
                <section className="bag-container">
                    <section className="bag-title">
                        <div className="bag-titleheading">Dare to make your future!</div>
                        <div className="bag-titledisc"> I would like to Learn ...</div>
                    </section>
                    <section className="bag-course-card-container">
                    
                    {courseComList.length>0? courseComList:<p className="no-course">No Course Found</p>}
                    </section>
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
      return dispatch(clearTokenId());
  }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(CourseFinder);