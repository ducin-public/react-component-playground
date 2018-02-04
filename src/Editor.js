import React, { Component } from 'react';
import Playground from 'component-playground';
import Button from './components/button';
import { componentExample } from './examples/component.example';

import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/zenburn.css';

export class Editor extends Component {
  render() {
    return (
      <div className="component-documentation">
        <h2>Default</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button }}
        />

        <h2>Collapsable Code</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button }}
          collapsableCode
        />

        <h2>Collapsable Code (Expanded by Default)</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button }}
          collapsableCode
          initiallyExpanded
        />

        <h2>Code Selection Highlighting</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button }}
          selectedLines={[2, 3, 4, 9]}
        />

        <h2>Prop Descriptions</h2>

        <Playground
          theme="zenburn"
          codeText={componentExample}
          scope={{ React: React, Button: Button }}
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
