import React from 'react';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.addStyle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.htmlValue !== this.props.htmlValue) {
      this.addStyle();
    }

    if (prevProps.cssValue !== this.props.cssValue) {
      this.addStyle();
    }
  }

  addStyle = () => {
    var txt = `<head><style>${this.props.cssValue}</style></head><body class='output-text'>${this.props.htmlValue}<//body>`;
    var frame = document.getElementById('output-text-holder');
    frame = frame.contentWindow || frame.contentDocument;
    if (frame.document) frame = frame.document;
    frame.open();
    frame.write(txt);
    frame.close();
  };

  render() {
    return (
      <div className='window'>
        <div className='output-header'>
          <div className='flex gap-half space-btw'>
            <div className='circle red'></div>
            <div className='circle yellow'></div>
            <div className='circle green'></div>
          </div>
          <h3 id='code-header'>OUTPUT</h3>
        </div>
        <iframe title='output' id='output-text-holder'></iframe>
      </div>
    );
  }
}

export default Window;
