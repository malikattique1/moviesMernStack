const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);
console.log("keyenv",key)
console.log("baseurlenv",baseUrl)

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };