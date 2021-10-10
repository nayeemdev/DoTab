import React, { Component } from 'react';
import '../App.css';
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import News from './Tabs/News';
import Notes from './Tabs/Notes';
import Community from './Tabs/Notes';
import Settings from './Tabs/Settings';
import Tasks from './Tabs/Tasks';
import ThemeToggle from './ThemeToggle';

class Main extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <main className="main center">
              <ThemeToggle/>
              <div className="container gutter-top">
                <Header/>
                <div className="row sticky-parent">
                  <Aside/>
                  {/* Content */}
                  <div className="col-12 col-md-12 col-lg-10">
                    <div className="box box-content mb-5" id="content">
                      <div className="content">
                        <Tasks />
                        <Notes />
                        <News/>
                        <Community />
                        <Settings/>
                      </div>
                    </div>
                    <Footer/>
                  </div>
                </div>
              </div>
            </main>
            {/* BackToTop */}
            <div className="back-to-top"></div>
          </div>
      </div>
    );
  }
}

export default Main;
