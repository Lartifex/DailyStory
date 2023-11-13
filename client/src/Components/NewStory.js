const NewStory = ({ storyData }) => {
  return (
    <div>
      <div className="imgCover">
        <img
          src={`data:image/png;base64,${storyData.imgB64}`}
          alt="Story Cover"
        />
      </div>
      <div className="TitleStory">
        <h1>{storyData.title}</h1>
      </div>
      <p>{storyData.text}</p>
    </div>
  );
};

export default NewStory;
