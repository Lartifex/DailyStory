import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Stories from '../components/Stories';
import Cookies from 'js-cookie';

const HomePage = ({ stories }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const usernameFromCookie = Cookies.get('username');
    if (usernameFromCookie) {
      setUsername(usernameFromCookie);
    }
  }, []);

  return (
    <div className="containerWithFooter">
      <h1>Hi, {username || '🌎'}!</h1>
      <h2>Choose your daily story:</h2>
      <div className="storiesScroll">
        <Stories stories={stories} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
