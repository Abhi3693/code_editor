import React from "react";
import Window from "./Window";
import WithData from "./WithData";
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      htmlValue:``,
      cssValue:``,
    }
  }

  handleHTMLvalue = (value) => {
    this.setState({htmlValue: value})
  }

  handleCSSvalue = (value) => {
    this.setState({cssValue: value})
  }

  render() {
    return (
    <div className="codmirror-holder">
      <h1 id="heading">Code Editor</h1>
      <p id="sub-heading"> You can write and preview HTML and CSS!</p>
      <div className="flex space-btw">
          <div className="html-css-holder">
            <WithData handleValue={this.handleHTMLvalue} value={this.state.htmlValue} language={'html'} header={"HTML"}/>
            <WithData handleValue={this.handleCSSvalue} value={this.state.cssValue} language={'css'} header={"CSS"}/>
          </div>
          <Window htmlValue={this.state.htmlValue} cssValue={this.state.cssValue}/>
      </div>
      
    </div>
  )
  }
}

export default App;
