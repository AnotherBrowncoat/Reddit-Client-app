// libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';

// my elements
import Feed from './pages/Feed/Feed.js';
import Post from './pages/Post/Post.js';
import { PostBody } from './components/postBody.js/postBody.js';

// styling
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <h2>Hello there</h2>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/r/:subreddit/comments/:id/:postLink" element={<Post />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


/*

*/