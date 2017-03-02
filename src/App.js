import React, { Component } from 'react';
import ContentEditor from './containers/content_editor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="fieldtoolNav" className="navbar navbar-fixed-top">
          <ul className="nav navbar-nav navbar-left">
               <li className="navbar-brand">
                   <div id="fieldToolTitle">Content Editor</div>
                   <div>Edit Content</div>
               </li>
          </ul>
        </nav>
        <ContentEditor />
      </div>
    );
  }
}

export default App;
