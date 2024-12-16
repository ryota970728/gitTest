function displayScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("screen-size").textContent = `幅：${width}px, 高さ:${height}px`;
}

// 画面サイズを初回に表示
displayScreenSize();

// 画面サイズが変更された場合も更新
window.addEventListener("resize", displayScreenSize);