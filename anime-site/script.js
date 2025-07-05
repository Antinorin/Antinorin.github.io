fetch('data/anime.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("animeContainer");
    const recentContainer = document.getElementById("recentContainer");
    const filter = document.getElementById("categoryFilter");
    const search = document.getElementById("search");

    function render(animes) {
      container.innerHTML = "";
      animes.forEach(anime => {
        const box = document.createElement("div");
        box.className = "anime-box";
        box.innerHTML = `
          <a href="watch.html?id=${anime.id}">
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
          </a>
        `;
        container.appendChild(box);
      });
    }

    render(data);

    filter.addEventListener("change", () => {
      const val = filter.value;
      const filtered = val === "all" ? data : data.filter(a => a.category === val);
      render(filtered);
    });

    search.addEventListener("input", () => {
      const val = search.value.toLowerCase();
      const filtered = data.filter(a => a.title.toLowerCase().includes(val));
      render(filtered);
    });

    const recent = JSON.parse(localStorage.getItem("recent")) || [];
    recent.forEach(anime => {
      const box = document.createElement("div");
      box.className = "anime-box";
      box.innerHTML = `
        <a href="watch.html?id=${anime.id}">
          <img src="${anime.image}" alt="${anime.title}">
          <h3>${anime.title}</h3>
        </a>
      `;
      recentContainer.appendChild(box);
    });
  });
