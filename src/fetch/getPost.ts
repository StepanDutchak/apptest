import {fetchUrl} from 'constants/fetch/env';

export const getAllPosts = async () => {
  try {
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
