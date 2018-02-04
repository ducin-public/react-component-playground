import React, { Component } from 'react';
import Playground from 'component-playground';
import Button from './components/Button';
import ButtonStyledComponents from './components/ButtonStyledComponents';
import { componentExample } from './examples/component.example';
import { componentStyledExample } from './examples/component-styled.example';

import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/zenburn.css';

const callback = msg => alert('damn cool!');

export class Editor extends Component {
  render() {
    return (
      <div className="component-documentation">
        <h2>Default</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button, callback: callback }}
        />

        <h2>Default w/<code>styled-components</code></h2>

        <Playground
          theme="zenburn"
          codeText={componentStyledExample}
          scope={{ React: React, ButtonStyledComponents: ButtonStyledComponents, callback: callback }}
        />

        <h2>Collapsable Code</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button, callback: callback }}
          collapsableCode
        />

        <h2>Collapsable Code (Expanded by Default)</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button, callback: callback }}
          collapsableCode
          initiallyExpanded
        />

        <h2>Code Selection Highlighting</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button, callback: callback }}
          selectedLines={[2, 3, 4, 9]}
        />

        <h2>Prop Descriptions</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button, callback: callback }}
          propDescriptionMap={{
            buttonStyle: "style object for inline styles"
          }}
          docClass={Button}
          collapsableCode
        />
      </div>
    );
  }
};
