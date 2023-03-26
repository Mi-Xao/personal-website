import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Layout from './components/Layout.js'
import Home from './components/pages/Home.js'
import Projects from './components/pages/Projects.js'
import Links from './components/pages/Links.js'

import Website from './components/pages/projects/Website.js'
import Picker from './components/pages/projects/Picker.js'
import Slack from './components/pages/projects/Slack.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
              <Route path="projects/website" element={<Website />} />
              <Route path="projects/picker" element={<Picker />} />
              <Route path="projects/slack" element={<Slack />} />
            <Route path="contact" element={<Links />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
