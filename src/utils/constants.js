const paths = {
  main: '/',
};
const EMAIL_REGEX = '[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}';
const NAME_REGEX = '[а-яА-Яa-zA-ZёË0-9\\- ]{1,}';
const baseUrl = 'http://localhost:8081/api/v1';

export { paths, EMAIL_REGEX, NAME_REGEX, baseUrl };
