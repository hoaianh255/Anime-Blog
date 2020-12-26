import React,{Fragment} from 'react';
function NewsItem(props){
    return (
      <Fragment>
          <li key={props.keyItem} className="newsCpn-item">
              <span className='time_post'>
                  {props.time}
              </span>
              <span>
                  <a href="">{props.title}</a>
              </span>
          </li>
      </Fragment>
    )
}
function News() {
    const listNews = [
        {
          id: 1,
          time: "15:00",
          title:"Deadline: Sony Trades Crackle Stake to Chicken Soup For The Soul Entertainment for Stock"
        },
        {
          id: 2,
          time: "15:00",
          title: "Sayori Ochiai's Gingitsune Manga Goes on Hiatus"
        },
        {
          id: 3,
          time: "15:00",
          title: "Demon Slayer: Kimetsu no Yaiba Smartphone Game Delayed Indefinitely"
        },
        {
          id: 4,
          time: "15:00",
          title: "Toei Animation Produces New Short Anime Film Urvan for Late January"
        },
      {
        id: 5,
        time: "15:00",
        title: "Local Manga Cancels Localization of ri-ru-'s Prince Noir Manga"
      },
      {
        id: 6,
        time: "15:00",
        title: "'86' Sci-Fi Battle Anime's 1st Promo Video Reveals More Staff, April Debut"
      },
      {
        id: 7,
        time: "15:00",
        title: "Re:ZERO Anime Season 2 Previews 2nd Half in Promo Video"
      },
      {
        id: 8,
        time: "15:00",
        title: "How NOT to Summon a Demon Lord Omega Anime's 1st Video Unveils More Cast, April Debuty"
      },
      {
        id: 9,
        time: "15:00",
        title: "Nanaka Suwa Sings Battle Athletes Daiundōkai ReSTART! Anime's Opening Song"
      },
      ];
    return (
        <Fragment>
            <nav id='newsCpn'>
                <ul>
                    <li className="newsCpn-title">
                        <h4>
                            <a href="#">News...</a>
                            <a href="#" className="archive">chronological archives</a>
                        </h4>
                    </li>
                  {listNews.map(({id,time,title}) => <NewsItem key={id} keyItem={id} time={time} title={title}/>)}
                </ul>
              <ul>
                <li className="newsCpn-title">
                  <h4>
                    <a href="#">Columns...</a>
                    <a href="#" className="archive">chronological archives</a>
                  </h4>
                </li> 
                {listNews.map(({id,time,title}) => <NewsItem key={id} keyItem={id} time={time} title={title}/>)}
                <li className="newsCpn-title">
                  <h4>
                    <a href="#" >Everything...</a>
                    <a href="#" className="archive" >chronological archives</a>
                  </h4>
                </li>
                {listNews.map(({id,time,title}) => <NewsItem key={id} keyItem={id} time={time} title={title}/>)}
              </ul>
            </nav>
        </Fragment>
    );
}

export default News;