const authEndpoint = 'https://accounts.spotify.com/authorize';
export const redirectUrl = 'http://localhost:3000/';
export const clientId = 'f24ab3a85bb648afa08f27061f22b28e';
export const clientSecret = 'db625189c49241fbb30652fe23eb1420';

const scopes = [ //acceso al nombre completo del usuario, la imagen de perfil y la dirección de correo electrónico.
  'streaming',
  'user-read-email',
  'user-read-private'
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}`;
