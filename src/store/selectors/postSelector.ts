import {RootState} from '@types';
import {createSelector} from 'reselect';

const selectPostState = (state: RootState) => state.post;

export const selectPostList = createSelector(
  selectPostState,
  postStore => postStore.postData,
);
