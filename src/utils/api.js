const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const fetchPopularGames = async (searchQuery = '', category = '', tags = []) => {
  try {
    const url = new URL(`${BASE_URL}/games`);
    url.searchParams.append('key', API_KEY);

    if (searchQuery) {
      url.searchParams.append('search', searchQuery);
    }

    if (category) {
      url.searchParams.append('genres', category); // RAWG uses "genres" for category
    }

    if (tags && tags.length > 0) {
      url.searchParams.append('tags', tags.join(',')); // RAWG uses "tags" as comma-separated
    }

    console.log("Fetching from:", url.toString());

    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch games');

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

export const fetchGameDetails = async (id) => {
  try {
    const url = `${BASE_URL}/games/${id}?key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch game details");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null;
  }
};
