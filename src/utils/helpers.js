export const checkResponse = (res) => {
  if (res.status >= 400) {
    throw Error(`Ошибка ${res.status}`);
  }
  console.log(res, "helper")
  return res;
};

/* eslint no-param-reassign: "off" */
export function setCookie(cookieName, tokenValue, props = {}) {
  const settings = {
    path: '/',
    ...props,
  };
  let exp = settings.expires;
  if (typeof exp === 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    settings.expires = d;
    exp = d;
  }
  if (exp && exp.toUTCString) {
    settings.expires = exp.toUTCString();
  }
  if (tokenValue !== null) {
    tokenValue = encodeURIComponent(tokenValue);
  }
  let updatedCookie = `${cookieName}=${tokenValue}`;
  const keys = Object.keys(settings);
  /* eslint-disable-next-line */
  for (const propName of keys) {
    updatedCookie += `; ${propName}`;
    const propValue = settings[propName];
    if (propValue !== true) {
      updatedCookie += `=${propValue}`;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(cookieName) {
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${cookieName.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1')}=([^;]*)`
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(cookieName) {
  setCookie(cookieName, null, { expires: -1 });
}
