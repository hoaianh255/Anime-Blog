import React from "react";
import PropTypes from "prop-types";
import './encyclopedia.css';

const MyAnn = (props) => {
  return (
    <>
      <div className="row" id="encyclopedia">
        {/* block1 */}
        <div className="col-lg-4 p-3 box-child">
          <div className="block-child">
            <h2 className="title">Anime...</h2>
            <form action="" id="formSearch">
              <input
                type="text"
                id="searchInput"
                name="search"
                placeholder="Search anime"
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">Top 10</a>
              </li>
              <li>
                <a href="#">Latest Simulcasts</a>
              </li>
              <li>
                <a href="#">Licensed</a>
              </li>
              <li>
                <a href="#">Latest in Japan</a>
              </li>
              <li>
                <a href="#">Upcoming TV series, movies, OAVs</a>
              </li>
            </ul>
          </div>
          <div className="block-child">
            <h2 className="title">Manga...</h2>
            <form action="" id="formSearch">
              <input
                type="text"
                id="searchInput"
                name="search"
                placeholder="Search manga"
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">Top 10</a>
              </li>
              <li>
                <a href="#">Licensed</a>
              </li>
              <li>
                <a href="#">Latest in Japan</a>
              </li>
            </ul>
          </div>
        </div>
        {/* block 2 */}
        <div className="col-lg-4 p-3 box-child">
          <div className="block-child">
            <h2 className="title">People...</h2>
            <form action="" id="formSearch">
              <input
                type="text"
                id="searchInput"
                name="search"
                placeholder="Search people"
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">Most prolific cast</a>
              </li>
              <li>
                <a href="#">Most prolific staff</a>
              </li>
            </ul>
          </div>
          <div className="block-child">
            <h2 className="title">Releases...</h2>
            <form action="" id="formSearch">
              <input
                type="text"
                id="searchInput"
                name="search"
                placeholder="Search release"
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">This month</a>
              </li>
            </ul>
          </div>
        </div>

        {/* block 3 */}
        <div className="col-lg-4 p-3 box-child">
          <div className="block-child">
            <h2 className="title">Companies...</h2>
            <form action="" id="formSearch">
              <input
                type="text"
                id="searchInput"
                name="search"
                placeholder="Search companies"
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">Licensors</a>
              </li>
            </ul>
          </div>
          <div className="block-child">
            <h2 className="title">Lexicon...</h2>
            <form action="" id="formSearch">
              <input
                type="text"
                id="searchInput"
                name="search"
                placeholder="Search lexicon"
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <ul className="encyclopedia_nav">
              <li>
                <a href="#">Search by genre, theme, year</a>
              </li>
              <li>
                <a href="#">Comparison tool</a>
              </li>
              <li>
                <a href="#">Personal settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

MyAnn.propTypes = {};

export default MyAnn;
