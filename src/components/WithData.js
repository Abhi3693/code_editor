import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class WithData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return (
      <div id={this.props.language}>
        <div className='header'>
          <div className='flex gap-half space-btw'>
            <div className='circle red'></div>
            <div className='circle yellow'></div>
            <div className='circle green'></div>
          </div>
          <h3 id='code-header'>{this.props.header}</h3>
        </div>
        <CodeMirror
          value={this.state.value}
          options={{
            mode: this.props.language,
            theme: 'material',
            lineNumbers: true,
            addNew: true,
            moveOnDrag: true,
            smartIndent: true,
            lineWrapping: true,
            electricChars: true,
          }}
          onBeforeChange={(editor, data, value) => {
            this.props.handleValue(value);
          }}
          onChange={(editor, value) => {}}
        />
      </div>
    );
  }
}

export default WithData;
