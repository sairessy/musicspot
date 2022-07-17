(async () => {
  getMusics();
})();

async function getMusics() {
  const res = await fetch(`${config.api}/music_spot/musics`);
  const json = await res.json();
  let musics = "";
  for (let i = 0; i < json.length; i++) {
    musics += Music(json[i]);
  }

  document.getElementById("musics").innerHTML = musics;
}

$(".sidebar-container").click((e) => {
  $("body").css({ overflowY: "scroll" });
  if (e.target.className === "sidebar-container") {
    $(".sidebar").animate({ left: "-80%" }, () => {
      $(".sidebar-container").fadeOut();
    });
  }
});

$(".menu").click(() => {
  $("body").css({ overflowY: "hidden" });
  $(".sidebar-container").fadeIn(() => {
    $(".sidebar").animate({ left: "0" });
  });
});
