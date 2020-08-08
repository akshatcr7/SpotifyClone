export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "e7bfafe5e5474c89a3f19b8d5b9a8fd3";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-rated",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&?show_dialogue=true`;