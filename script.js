fetch("memes.json")
  .then(response => response.json())
  .then(memes => {

    const input = document.getElementById("searchInput");
    const result = document.getElementById("result");

    // Initial empty state
    result.innerHTML = `
      <p style="color:#9ca3af; text-align:center;">
        Start typing to explore the origin of internet memes 🎬
      </p>
    `;

    input.addEventListener("input", () => {
      const query = input.value.toLowerCase().trim();

      if (query === "") {
        result.innerHTML = `
          <p style="color:#9ca3af; text-align:center;">
            Start typing to explore the origin of internet memes 🎬
          </p>
        `;
        return;
      }

      const meme = memes.find(m =>
        m.name.toLowerCase().includes(query)
      );

      if (meme) {
        result.innerHTML = `
          <div class="fade-in">
          <h2>${meme.name}</h2>

          <div class="meta">
            <span class="badge">📅 ${meme.year}</span>
            <span class="badge">🌍 ${meme.platform}</span>
          </div>

          <p><strong>Original Meaning:</strong> ${meme.original}</p>
          <p><strong>Meme Evolution:</strong> ${meme.evolution}</p>

          <iframe src="${meme.video}" allowfullscreen></iframe>
          </div>
`;
      } else {
        result.innerHTML = `
          <div class="fade-in">
         </div>
          <p style="color:#9ca3af; text-align:center;">
            No results found.<br>
            Try searching a popular meme or slang term.
          </p>
        `;
      }
    });

  })
  .catch(error => {
    console.error("Error loading memes.json:", error);
  });

    