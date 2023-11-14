import Footer from "../components/Footer";
import Stories from "../components/Stories";

const HomePage = ({ stories }) => {
  return (
    <div className="containerWithFooter">
      <h1>Hi, Emma!</h1>
      <h2>Choose your daily story:</h2>
      <div className="storiesScroll">
        <Stories stories={stories} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
