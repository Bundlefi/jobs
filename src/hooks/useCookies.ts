import { useState } from "react";

const isBrowser = typeof window !== "undefined";

interface CookieOptions {
  days?: number;
  path?: string;
}

const setCookie = (
  name: string,
  value: string,
  opt: CookieOptions = { days: 7, path: "/" }
) => {
  if (!isBrowser) return;

  const expires = new Date(Date.now() + (opt.days ?? 7) * 864e5).toUTCString();

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=${opt.path}`;
};

const getCookie = (name: string, initialValue = "") => {
  return (
    (isBrowser &&
      document.cookie.split("; ").reduce((agg, value) => {
        const parts = value.split("=");
        return parts[0] === name ? decodeURIComponent(parts[1]) : agg;
      }, "")) ||
    initialValue
  );
};

const useCookies = (key: string, initialValue?: string) => {
  const [item, setItem] = useState(() => {
    return getCookie(key, initialValue);
  });

  const updateItem = (value: string, options?: CookieOptions) => {
    setItem(value);
    setCookie(key, value, options);
  };

  return [item, updateItem];
};

export default useCookies;
