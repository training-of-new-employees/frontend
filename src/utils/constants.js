const paths = {
  main: '/',
  profile: '/profile',
  courses: '/courses',
  users: '/users',
  positions: '/positions',
  login: '/login',
  registration: '/registration',
  admin: '/admin',
};

const urlByEnvVar = {
  development: 'http://localhost:8080', // generates by using command npm run start
  production: process.env.REACT_APP_BASE_URL, // generates by using command npm run build
};

const baseUrl = `${
  urlByEnvVar[process.env.NODE_ENV || ''] || urlByEnvVar.development
}/api/v1`;
const EMAIL_REGEX = '[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}';
const NAME_REGEX = '[а-яА-Яa-zA-ZёË0-9\\- ]{1,}';

export { paths, EMAIL_REGEX, NAME_REGEX, baseUrl };
