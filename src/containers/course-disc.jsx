import React from "react"
import '../styles/course-finder.css';
import YouTube from 'react-youtube';
import {connect} from 'react-redux';
import {clearTokenId} from '../redux/action/action'
import {setCookie, getCookie} from '../components/cookies'
import PdfViewer from '../components/pdfviewer';
import baghant_fisrt from "../pdf/Java_First_Chapter.pdf";

const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
class CourseDisc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabname:'',
            tabdivclasscontent: "tab-container tab-div",
            tabdivclasspre: "tab-container tab-div",
            tabdivclassothr: "tab-container tab-div",
            tablinkcontent: "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding",
            tablinkpre: "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding",
            tablinkothr: "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding",
            courseContent:[{prequisite:[{chapterNo:"Java History and Evolution",content:{data:'Yet to release',type:'text'}}
                                        ,{chapterNo:"Lesson-2",content:{data:"Yet to release",type:'text'}}]},
                                      {others:[{chapterNo:"Lesson-1",content:{data:"Yet to release",type:'text'}}
                                        ,{chapterNo:"Lesson-2",content:{data:"Yet to release",type:'text'}}]},
                                        {content:[{chapterNo:"Java History and Evolution",content:{data:baghant_fisrt,type:'pdf'}}
                                        ,{chapterNo:"Lesson-2",content:{data:"Yet to release",type:'text'}}]}]
                                    }
        this.changeTab = this.changeTab.bind(this);
        this.openAndClose = this.openAndClose.bind(this);
        if(getCookie("tokenId")=="")
        this.props.history.push("/login");
    }
    
    openAndClose(e) {
        e.currentTarget.classList.toggle("active");
        var panel = e.currentTarget.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }


    changeTab(e) {
        let tabname,tabdivclasscontent, tabdivclasspre, tabdivclassothr, tablinkcontent, tablinkpre, tablinkothr;

        if (e.target.textContent === "Content"
        && this.state.tabname!='Content') {
            tabname='Content';
            tabdivclasscontent = "tab-container tab-div-block";
            tabdivclasspre = "tab-container tab-div";
            tabdivclassothr = "tab-container tab-div";
            tablinkcontent = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding tab-border-red";
            tablinkpre = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding";
            tablinkothr = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding";
        } else if (e.target.textContent === "Prequisite"
        && this.state.tabname!='Prequisite') {
           tabname='Prequisite'
            tabdivclasspre = "tab-container tab-div-block";
            tabdivclasscontent = "tab-container tab-div";
            tabdivclassothr = "tab-container tab-div";
            tablinkcontent = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding ";
            tablinkpre = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding  tab-border-red";
            tablinkothr = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding";
        } else if (e.target.textContent === "Others"
        && this.state.tabname!='Others') {
            tabname='Others';
            tabdivclassothr = "tab-container tab-div-block";
            tabdivclasspre = "tab-container tab-div";
            tabdivclasscontent = "tab-container tab-div";
            tablinkcontent = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding";
            tablinkpre = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding";
            tablinkothr = "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding  tab-border-red";
        }else{
            tabname='',
            tabdivclasscontent= "tab-container tab-div",
            tabdivclasspre= "tab-container tab-div",
            tabdivclassothr="tab-container tab-div",
            tablinkcontent="tab-third tablink tab-bottombar tab-hover-light-grey tab-padding",
            tablinkpre="tab-third tablink tab-bottombar tab-hover-light-grey tab-padding",
            tablinkothr= "tab-third tablink tab-bottombar tab-hover-light-grey tab-padding"
        }
        this.setState({
            tabdivclasscontent: tabdivclasscontent,
            tabdivclasspre: tabdivclasspre,
            tabdivclassothr: tabdivclassothr,
            tablinkcontent: tablinkcontent,
            tablinkpre: tablinkpre,
            tablinkothr: tablinkothr,
            tabname:tabname
        });

    }

    render() {
        return (
            <div>
                <section className="bag-container">
                    <section className="bag-title">
                        <div className="bag-titleheading">Dare to make your future!</div>
                        <div className="bag-titledisc"> This course covers below content in detail .</div>
                    </section>
                    <section className="tab-container">
                        <div className="tab-row">
                            <a href="javascript:void(0)" onClick={this.changeTab} >
                                <div className={this.state.tablinkcontent} value="content">Content</div>
                            </a>
                            <a href="javascript:void(0)" onClick={this.changeTab}>
                                <div className={this.state.tablinkpre} value="prequisite">Prequisite</div>
                            </a>
                            <a href="javascript:void(0)" onClick={this.changeTab}>
                                <div className={this.state.tablinkothr} value="other">Others</div>
                            </a>
                        </div>

                        <div id="content" className={this.state.tabdivclasscontent} ref="tabdiv" >
                            <table>
                                <tr>
                                    <th><h2>Content</h2></th>
                                </tr>
                                    {this.state.courseContent.length>0 && this.state.courseContent[2]["content"].map(data=>{
                                        let content=null;
                                        if(data.content.type=="video"){
                                            content=<YouTube  className="video-mp4"     videoId={data.content.data}   opts={opts}      />;
                                        }else if(data.content.type=="text"){
                                            content=<p>{data.content.data}</p>
                                        }else if(data.content.type=="pdf"){
                                            content=<PdfViewer name={data.content.data}/>
                                        }
                                       return (
                                        <tr>
                                        <td><button className="accordion" onClick={this.openAndClose}>{data.chapterNo}</button>
                                        <div className="accordion-panel">
                                            {content}
                                        </div>
                                        </td>
                                        </tr>
                                    );
                                    })}
                                    {this.state.courseContent.length ===0 && 
                                        <tr>
                                            <td><button className="accordion" >No Content found!</button>
                                            </td>
                                        </tr>
                                    }
                                    
                            </table>
                        </div>

                        <div id="prequisite" className={this.state.tabdivclasspre} ref="tabdiv" >
                            <table>
                                <tr>
                                    <th><h2>Prequisite</h2></th>
                                </tr>
                                {this.state.courseContent.length>0 && this.state.courseContent[0]["prequisite"].map(data=>{
                                        let content=null;
                                        if(data.content.type=="video"){
                                            content=<YouTube  className="video-mp4"     videoId={data.content.data}   opts={opts}      />;
                                        }else if(data.content.type=="text"){
                                            content=<p>{data.content.data}</p>
                                        }else if(data.content.type=="pdf"){
                                            content=<PdfViewer name={data.content.data}/>
                                        }
                                       return (
                                        <tr>
                                        <td><button className="accordion" onClick={this.openAndClose}>{data.chapterNo}</button>
                                        <div className="accordion-panel">
                                            {content}
                                        </div>
                                        </td>
                                        </tr>
                                    );
                                    })}
                                    {this.state.courseContent.length ===0 && 
                                        <tr>
                                            <td><button className="accordion" >No Content found!</button>
                                            </td>
                                        </tr>
                                    }
                            </table>
                        </div>

                        <div id="other" className={this.state.tabdivclassothr} ref="tabdiv">
                            <table>
                                <tr>
                                    <th><h2>Others</h2></th>
                                </tr>
                                {this.state.courseContent.length>0 && this.state.courseContent[1]["others"].map(data=>{
                                        let content=null;
                                        if(data.content.type=="video"){
                                            content=<YouTube  className="video-mp4"     videoId={data.content.data}   opts={opts}      />;
                                        }else if(data.content.type=="text"){
                                            content=<p>{data.content.data}</p>
                                        }else if(data.content.type=="pdf"){
                                            content=<PdfViewer name={data.content.data}/>
                                        }
                                       return (
                                        <tr>
                                        <td><button className="accordion" onClick={this.openAndClose}>{data.chapterNo}</button>
                                        <div className="accordion-panel">
                                            {content}
                                        </div>
                                        </td>
                                        </tr>
                                    );
                                    })}
                                    {this.state.courseContent.length ===0 && 
                                        <tr>
                                            <td><button className="accordion" >No Content found!</button>
                                            </td>
                                        </tr>
                                    }
                            </table>
                        </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(CourseDisc);