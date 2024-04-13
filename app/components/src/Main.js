import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useRouteMatch } from 'react-router-dom';
import Form from "./custumer/Edit/Form.js"
import List from "./custumer/Edit/List.js"
import MyComponent from "./custumer/Edit/Edit.js"
import Dashboard from "./custumer/Edit/Dashboard.js"
// import '../styles/global.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (   
      <Router>
        <main>
          <Routes>
          <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="/list" element={<List/>} />
            <Route exact path="/create" element={<Form/>} />                        
            <Route exact path="/edit-aluno/:id" element={<MyComponent/>} />
          </Routes>
        </main>
      </Router>
    )
  }
}
ReactDOM.render(<Main/>,document.getElementById('main-customer'));
