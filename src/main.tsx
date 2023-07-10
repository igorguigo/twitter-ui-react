import React from 'react'
import ReactDOM from 'react-dom/client'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Sparkle } from 'phosphor-react'

import './global.css';

import twitterLogo from './assets/logo-twitter.svg';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="Logo" />
        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight="fill" />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className='new-tweet' type='button'>Tweet</button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>
          <form className='new-tweet-form' action="">
            <label htmlFor="tweet">
              <img src="https://github.com/igorguigo.png" alt="Igor Tonelli" />
              <textarea id='tweet' placeholder="What's happening?" />
            </label>
            <button type='submit'>Tweet</button>
          </form>
        </main>
      </div>
    </div>
  </React.StrictMode>,
)