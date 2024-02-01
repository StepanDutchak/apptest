import React, {useCallback, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';

import {ScreenNavigationEnums} from '../../constants/enums/navigation';

import {ScreenWrapper} from '@components';
import {LoadingScreenNavigationProp} from '@types';

import {setPost} from 'store/slices/postSlice';

import {styles} from './styles';
import {getAllPosts} from 'fetch/getPost';
import {StartIcon} from '@icons';

type ILoadingScreen = {
  navigation: LoadingScreenNavigationProp;
};

const LoadingScreen: React.FC<ILoadingScreen> = ({navigation}) => {
  const dispatch = useDispatch();

  const [opacity] = useState(new Animated.Value(1));

  const preFetchData = useCallback(async () => {
    try {
      const data = await getAllPosts();

      dispatch(setPost(data));
      navigation.navigate(ScreenNavigationEnums.HOME_SCREEN);
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, navigation]);

  useEffect(() => {
    setTimeout(() => {
      preFetchData();
    }, 3000);
  }, [preFetchData]);

  return (
    <ScreenWrapper
      containerStyle={styles.container}
      isHeader={false}
      isScrollable>
      <Animated.View style={{opacity}}>
        <StartIcon />
      </Animated.View>
    </ScreenWrapper>
  );
};

export default LoadingScreen;
