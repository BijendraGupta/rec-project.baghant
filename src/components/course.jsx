import React from 'react';
import '../styles/course-finder.css';
import { NavLink } from 'react-router-dom'

export default class Course extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const  handle  = this.props.course.courseName;
        return (
            <div>
                <section className="bag-course-card">
                    {/* <img src={this.props.course.image}/> */}
                    <span><NavLink to={`/coursedisc/${handle}`}> {this.props.course.courseName}</NavLink></span>
                </section>
            </div>
        );
    }
}