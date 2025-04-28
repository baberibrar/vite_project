const returGenre = () => {
  const genre = "RomCom";
  return genre;
}

const NetflixSeries = () => {
  const name = "Game of Thrones";
  const summary = 
        `The series is set on the fictional continents of Westeros and Essos and
        interweaves several plot lines with a large ensemble cast. The first
        narrative arc follows a civil war among several noble houses for the
        Iron Throne of the Seven Kingdoms; the second covers the attempts to
        reclaim the throne by the exiled last scion of the realm's deposed
        ruling dynasty; the third chronicles the rising threat of the impending
        winter and the legendary creatures and fierce peoples of the North.`;
  let age = 18;
  let canWatch = "Not Available";
  if (age >= 18) canWatch = "Watch Now";

  return (
    <div>
      <div>
        <img
          src="game-of-thrones.jpg"
          alt="game-of-thrones.jpg"
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: 9.3/10</h3>
      <h4>Genre: {returGenre()}</h4>
      <p>{summary}</p>
      <button> {canWatch} </button>
    </div>
  );
};

export default NetflixSeries;
