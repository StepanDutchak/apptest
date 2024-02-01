import React from 'react';
import {Text, View} from 'react-native';

import {ScreenWrapper} from '@components';

import {text} from 'locale/en';

import {styles} from './styles';

type IPostDetailsScreen = {
  route: any;
};

const PostDetailsScreen: React.FC<IPostDetailsScreen> = ({route}) => {
  const {details} = route.params;

  return (
    <ScreenWrapper isGoBack headerTitle={text.post_details} isScrollable>
      <View style={styles.container}>
        <View>
          <Text style={styles.titlePlaceholder}>
            {text.card.details_title_placeholder}
          </Text>
          <Text style={styles.bodyPlaceholder}>
            {text.card.details_body_placeholder}
          </Text>
        </View>
        <View>
          <Text style={styles.title}>{details.title}</Text>
          <Text style={styles.body}>{details.body}</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PostDetailsScreen;
