const releaseData = require('../releases.json');

const getSpotifyReleases = () => {
    const element = document.querySelector(".releases");
    fetch(releaseData)
        .then(response => response.json())
        .then(data => {
            data.releases.forEach(release => {
                console.log(release.title);
                const html = `
                <div class="release">
                    <div class="cover-image">
                        <img src="${release.cover}"></img>
                    </div>
                    <iframe src="https://open.spotify.com/embed/album/${release.spotifyId}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <h3>${release.title}</h3>
                    <div>${new Date(release.date).getFullYear()}</div>
                    <div>${release.type}</div>
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