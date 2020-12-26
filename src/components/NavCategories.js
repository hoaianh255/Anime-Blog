import React from 'react';
import PropTypes from 'prop-types';
import '../css/NavCategories.css';
const NavCategories = props => {
  return (
    <nav id="nav-categories">
      <div className="row">
        <div className="col-md-10">
        <div className="filters p-2">
          <span>
            <span data-filter="*" className="selected">All</span>
            <span data-filter="locale">Southeast Asia</span>
          </span>
          <b>•</b>
          <span className="types">
            <span data-filter="news">News</span>
            <span data-filter="interest">Interest</span>
            <span data-filter="reviews">Reviews</span>
            <span data-filter="columns">Columns</span>
          </span>
          <b>•</b>
          <span className="topics">
            <span data-filter="anime">Anime</span>
            <span data-filter="manga">Manga</span>
            <span data-filter="novels">Novels</span>
            <span data-filter="games">Games</span>
            <span data-filter="music">Music</span>
            <span data-filter="merch">Merch</span>
            <span data-filter="events">Events</span>
            <span data-filter="industry">Industry</span>
            <span data-filter="people">People</span>
            <span data-filter="live-action">Live-Action</span>
            <span data-filter="covid-19">COVID-19</span>
          </span>
        </div>
        </div>
       
        <div className="col-md-2">
          <div className="view-mode p-2">
          <div title="Text-only Compact View" className="compact-list-text selected">

          </div>
          <div title="Text-only List View" className="list-text selected">
            
          </div>
          <div title="Text-only Grid View" className="grid-text selected">
            
          </div>
          <div title="list View With Image" className="list-thumb selected">
            
          </div>
          </div>
           
        </div>
      </div>
    </nav>
  );
};

NavCategories.propTypes = {
  
};

export default NavCategories;