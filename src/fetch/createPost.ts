import {fetchUrl} from 'constants/fetch/env';
import {IPostItem} from 'types/store';

export const createPost = async (postData: IPostItem) => {
  try {
    const response = await fetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;
  }
};
