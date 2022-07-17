document.querySelector("input").onfocus = () => {
  document.querySelector(".player-alt").style.display = "none";
};

document.querySelector("input").onblur = () => {
  document.querySelector(".player-alt").style.display = "flex";
};

document.getElementById("input-search").onkeyup = (e) => {
  const text = e.target.value;
  if (text !== "") {
    searchMovies(e.target.value);
  }
};

async function searchMovies(text) {
  const res = await fetch(`${config.api}/music_spot/musics/search/${text}`);
  const json = await res.json();

  if (json.length > 0) {
    let musics = "";
    for (let i = 0; i < json.length; i++) {
      musics += Music(json[i]);
    }

    document.getElementById("musics").innerHTML = musics;
  }
}
