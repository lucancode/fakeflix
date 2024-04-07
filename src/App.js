import './index.css';
import Media from './Media';
import req from './req';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar /> {/* navigation menu */}
    <Banner /> {/* banner / background image */}

    { /** pass prop value for title and fetch api content for specific category by destructuring the object **/
      /** pass prop nowPlaying to create conditional rendering **/    }
    
    <Media title="Now Playing" fetchAPI={req.pullPlaying} nowPlaying /> {/* newly released films */}
    <Media title="Upcoming" fetchAPI={req.pullUpcoming} /> {/* upcoming films */}
    <Media title="Popular" fetchAPI={req.pullPopular} /> {/* popular films */}
    <Media title="Top Rated" fetchAPI={req.pullRated} /> {/* top rated films */}
    </>
  );
}

export default App;
