export function queryValue(key) {
  return new URLSearchParams(window.location.search).get(key);
}

export function updateQuery(key, value) {
  const url = new URL(window.location.href);
  if (value) url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  window.history.replaceState(null, "", url);
}
