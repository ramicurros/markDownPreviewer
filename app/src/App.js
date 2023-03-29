import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import './App.css';

const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load


Done with **react**!

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)

`;

function LineCounter(props) {
  const regex = /\r?\n|\r/;
  let lineCount = [];
  let lines = props.input.split(regex);

  for (let i = 0; i < lines.length; i++) {
    lineCount.push(i + 1);
  }

  const lineCountArr = lineCount.map((x) =>
    <li key={x.toString()}>{x}</li>
  )
  
  return(
    <ul>{lineCountArr}</ul>
  )
}

function App() {

  const [text, setText] = useState(defaultMarkdown);

  return (
    <div className="App">
      <div id='editor-wrapper' className='wrapper'>
        <div id='editor-header' className="markdownTop">
          <a id="edit-here" className='headerText'>Edit Here</a>
        </div>
        <div id="editor-body" className='editorBody'>
          <div id='line-counter'>
            <LineCounter id="lineCounter-component" input={text} />
          </div>
          <textarea id='editor' placeholder='Write text here...' onInput={(e) => { setText(e.target.value) }}>
            {text}
          </textarea>
        </div>
      </div>
      <div id='previewer-wrapper' className='wrapper'>
        <div id='preview-header' className='markdownTop'>
          <a id='previewTop' className='headerText'>Preview</a>
        </div>
        <div id='preview'>
          <ReactMarkdown children={text} id="markdown" />
        </div>
      </div>
    </div>
  );
}

export default App;
