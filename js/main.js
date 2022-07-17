(async () => {
  getMusics();
})();

async function getMusics() {
  let musics = "";
  for (let i = 0; i < 10; i++) {
    musics += Music({ id: i, price: Math.round(Math.random() * 100) });
  }

  document.getElementById("musics").innerHTML = musics;
}
