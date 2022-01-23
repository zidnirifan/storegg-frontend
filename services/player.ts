import axios from 'axios';

export async function getFeaturedGames() {
  const URL_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const ENDPOINT = 'player/landingpage';

  const { data } = await axios.get(`${URL_API}/${API_VERSION}/${ENDPOINT}`);
  return data.data;
}

export async function getDetailVoucher() {
  return null;
}
