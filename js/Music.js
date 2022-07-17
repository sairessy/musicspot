const audio = document.getElementById("audio");

const playSong = (url) => {
  audio.src = url;
  audio.play();
};

// Main
function Music({ _id, price, url, title, views }) {
  return `
    <div class="music">
      <div class="cover" onclick='playSong("${url}");'></div>
      <div class="details">
        <div>
          <p class="title">${title}</p>
          <p><small>Digital Solutions</small></p>
          <p class="badge"><b><i class="la la-eye" style="margin-right: 5px;"></i>${
            views ? views : 0 + ",00"
          }</b></p>
        </div>
        <span class="icon-button">
          <i class="la la-lg la-ellipsis-v"></i>
        </span>
      </div>
    </div>
  `;
}
