import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {IPostItem, IPostListData} from 'types/store';

const initialMovieState: IPostListData = {
  postData: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState: initialMovieState,
  reducers: {
    setPost: (
      state: Draft<IPostListData>,
      action: PayloadAction<IPostItem[]>,
    ) => {
      state.postData = action.payload;
    },
    updatePostTitleById: (
      state: Draft<IPostListData>,
      action: PayloadAction<{postId: number; newTitle: string}>,
    ) => {
      const {postId, newTitle} = action.payload;
      const postToUpdate = state.postData.find(post => post.id === postId);
      if (postToUpdate) {
        postToUpdate.title = newTitle;
      }
    },
  },
});

export const {setPost, updatePostTitleById} = postSlice.actions;

export default postSlice.reducer;
