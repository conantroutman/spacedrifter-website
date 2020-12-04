const url = 'https://spacedrifter-backend.herokuapp.com/api/v1/spotify';

const getSpotifyReleases = async () => {
    const element = document.querySelector(".releases");
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const html = `
                <div class="release">
                    <div class="cover-image">
                        <a href="${item.external_urls.spotify}" target="_blank" title="${item.name} on Spotify" ><img src="${item.images[0].url}"></img></a>
                    </div>
                    <iframe src="https://open.spotify.com/embed/album/${item.id}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <h3 class="album-title">${item.name}</h3>
                    <div class="album-releasedate">${new Date(item.release_date).getFullYear()}</div>
                    <div class="album-type">${item.album_type}</div>
                </div>
                `;
                element.innerHTML += html;
            });
        })
        .catch((error) => {
            document.querySelector(".music-section").style.display = "none";
        })
}

const setLatestRelease = () => {
    
}

getSpotifyReleases();