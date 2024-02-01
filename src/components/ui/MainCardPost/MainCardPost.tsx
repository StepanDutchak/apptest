import React, {useState} from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  UIManager,
  Platform,
  Animated,
} from 'react-native';
import {styles} from './styles';

import {IPostItem} from 'types/store';

import AnimatedPress from 'components/base/AnimatedPress';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationEnums} from 'constants/enums/navigation';

import {ScreenRouteProp} from '@types';
import {text} from 'locale/en';
import InputBlock from './ui/InputBlock/InputBlock';
import {useDispatch} from 'react-redux';
import {updatePostTitleById} from 'store/slices/postSlice';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface IMainCardPost {
  itemCardData: IPostItem;
}

const MainCardPost = ({itemCardData}: IMainCardPost) => {
  const navigation = useNavigation<ScreenRouteProp>();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const [postTitle, setPostTitle] = useState('');

  const handleDetailsCard = () => {
    navigation.navigate(ScreenNavigationEnums.POST_DETAILS_SCREEN, {
      details: itemCardData,
    });
  };

  const handleSave = () => {
    dispatch(
      updatePostTitleById({postId: itemCardData.id, newTitle: postTitle}),
    );
    setExpanded(false);
  };

  const handleUpdateCard = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const containerStyle = expanded ? styles.containerExpanded : {};

  return (
    <Animated.View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.cardTitle}>{itemCardData.title}</Text>
        <View>
          <AnimatedPress onPress={handleUpdateCard} style={styles.buttonUpdate}>
            <Text style={styles.cardUpdateTitle}>
              {text.card.update_button}
            </Text>
          </AnimatedPress>
          <AnimatedPress
            onPress={handleDetailsCard}
            style={styles.buttonDetails}>
            <Text style={styles.cardDetailsTitle}>
              {text.card.details_button}
            </Text>
          </AnimatedPress>
        </View>
      </View>
      {expanded && (
        <InputBlock
          handleSave={handleSave}
          onChange={setPostTitle}
          value={postTitle}
          containerStyle={containerStyle}
        />
      )}
    </Animated.View>
  );
};

export default React.memo(MainCardPost);
