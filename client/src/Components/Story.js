const Story = ({ story }) => {
  return (
    <div className="containerStory">
      <img src={`data:image/png;base64,${story.imgB64}`} alt="Story Cover" />
      <div className="textboxTitle">
        <h3>{story.title}</h3>
      </div>
      <div className="textboxGenre">
        <h3>{story.genre}</h3>
      </div>
    </div>
  );
};

export default Story;
