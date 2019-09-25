import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import '../styles/style.css';
 
 export default class PdfViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 previous=()=>{
    this.setState({pageNumber:this.state.pageNumber-1});
 }
 next=()=>{
    this.setState({pageNumber:this.state.pageNumber+1})
 }
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
       <div>
       {this.state.pageNumber > 1 && 
                <button  className="pdf_btn" onClick={this.previous.bind(this)}>prev</button>}
        {this.state.numPages > this.state.pageNumber && 
        <button  className="pdf_btn" onClick={this.next.bind(this)}>next</button>}
        Page {this.state.pageNumber} of {this.state.numPages}</div>
        
        <Document
          file={this.props.name}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={this.state.pageNumber} />
        </Document>
        <p>
        Page {this.state.pageNumber} of {this.state.numPages}</p>
        {this.state.pageNumber > 1 && 
                <button  className="pdf_btn" onClick={this.previous.bind(this)}>prev</button>}
        {this.state.numPages > this.state.pageNumber && 
        <button  className="pdf_btn" onClick={this.next.bind(this)}>next</button>}
      </div>
    );
  }
}