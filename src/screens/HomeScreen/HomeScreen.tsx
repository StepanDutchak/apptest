import React, {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {text} from '../../locale/en';

import {AnimatedPress, ScreenWrapper} from '@components';

import MainCardPost from 'components/ui/MainCardPost/MainCardPost';

import {setPost} from 'store/slices/postSlice';
import {selectPostList} from 'store/selectors/postSelector';
import {IPostItem} from 'types/store';

import AddPostIcon from 'assets/icons/AddPostIcon';

import {createPost} from 'fetch/createPost';

interface IHomeScreen {}

const mockPostData = {
  title: 'New Post',
  body: 'Body of New Post',
};

const HomeScreen = ({}: IHomeScreen) => {
  const dispatch = useDispatch();

  const postList = useSelector(selectPostList);

  const combinePostData = useMemo(() => {
    const newPostId =
      postList.length > 0 ? postList[postList.length - 1].id + 1 : 1;

    const newPostData = {
      id: newPostId,
      title: `${mockPostData.title} ${newPostId}`,
      body: `${mockPostData.body} ${newPostId}`,
    };
    return newPostData;
  }, [postList]);

  const handleCreatePost = useCallback(async () => {
    try {
      const res = await createPost(combinePostData);

      dispatch(setPost([...postList, combinePostData]));

      console.log(res);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }, [dispatch, postList, combinePostData]);

  const renderPostCard = useCallback((item: IPostItem) => {
    return <MainCardPost key={item.id} itemCardData={item} />;
  }, []);

  const renderAdditionalIcon = useCallback(() => {
    return (
      <AnimatedPress onPress={handleCreatePost}>
        <AddPostIcon />
      </AnimatedPress>
    );
  }, [handleCreatePost]);

  return (
    <ScreenWrapper
      isGoBack={false}
      additionalHeaderIcon={renderAdditionalIcon}
      isScrollable
      headerTitle={text.homepage_header}>
      {postList.map(renderPostCard)}
    </ScreenWrapper>
  );
};

export default HomeScreen;
