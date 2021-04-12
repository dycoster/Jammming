const clientId = 'a76d7f3736454441aa355284b44160e4';
const redirectUri = 'http://localhost:3000/';
let accesToken;

const Spotify = {
    getAccesToken() {
        if (accesToken) {
            return accesToken;
        }
        // check for acces token match
        const accesTokenMatch = windows.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = windows.location.href.match(/expires_in=([^&]*)/);

        if(accesTokenMatch && expiresInMatch) {
            accesToken = accesTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // clears parameters from the URL
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }

        
    }
};

export default Spotify;