const authEndpoint = 'https://accounts.spotify.com/authorize';
export const redirectUrl = 'http://localhost:3000/';
export const clientId = 'REEMPLAZAR POR TU CLIENT ID';
export const clientSecret = 'REEMPLAZAR POR TU CLIENT SECRET';

const scopes = [
  'streaming',
  'user-read-email',
  'user-read-private'
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}`;
