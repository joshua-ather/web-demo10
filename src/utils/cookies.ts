export function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function getCookies(): Record<string, string> {
  return document.cookie.split("; ").reduce((acc, current) => {
    const [key, value] = current.split("=");
    acc[decodeURIComponent(key)] = decodeURIComponent(value);
    return acc;
  }, {} as Record<string, string>);
}

export function setCookie(
  name: string,
  value: string,
  days: number = 7,
  path: string = "/"
) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=${path}`;
}

export function deleteCookie(name: string, path: string = "/") {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}
