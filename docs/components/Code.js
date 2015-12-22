'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import Highlight from 'react-highlight';

export class Code extends React.Component {
  classes() {
    return {
      'default': {
        code: {
          background: 'rgba(0,0,0,.05)',
          padding: '15px',
          fontFamily: 'Consolas, Monaco, Andale Mono, monospace',
          lineHeight: '1.5',
          fontSize: '14px',
          borderRadius: '4px',
          margin: '20px 0',
        },
        line: {
          display: 'flex',
        },
        number: {
          minWidth: '34px',
          color: '#ccc',
        },
      },
    };
  }

  render() {
    var code = this.props.children[0];
    return (
      <div is="code" className="codeblock">
        { code.split('\n').map((lineText, i) => {
          return (
            <div is="line" key={ i }>
              <div is="number">{ i + 1 }</div>
              <pre is="text"><Highlight className="javascript">{ lineText }</Highlight></pre>
            </div>
          );
        }) }
      </div>
    );
  }
};

export default ReactCSS(Code);
