import { setScrollReveal } from './animation';
const url = 'https://spacedrifter-backend.herokuapp.com/api/v1/spotify';

export const getSpotifyReleases = async () => {
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
                    <iframe src="https://open.spotify.com/embed/album/${item.id}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" loading="lazy"></iframe>
                    <h3 class="album-title">${item.name}</h3>
                    <div class="album-releasedate">${new Date(item.release_date).getFullYear()}</div>
                    <div class="album-type">${getReleaseType(item.album_type, item.total_tracks)}</div>
                </div>
                `;
                element.innerHTML += html;
            });
            setScrollReveal(document.querySelectorAll('.release'), true);
        })
        .catch((error) => {
            document.querySelector(".music-section").style.display = "none";
        })
}

// Returns Single, EP or Album depending on type and total number of tracks. This function is needed because the Spotify API does not distinguish between EPs and singles
function getReleaseType(type, tracks){
    let returnString = '';

    if (type == 'single') {
        returnString = tracks > 1 ? 'EP' : 'Single';
    }
    else if (type == 'album') {
        returnString = 'Album';
    }

    return returnString;
}