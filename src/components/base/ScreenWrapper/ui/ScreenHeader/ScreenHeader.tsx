import React from 'react';
import {Text, View} from 'react-native';
import {BackIcon} from '@icons';
import AnimatedPress from 'components/base/AnimatedPress';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

interface IScreenHeader {
  title?: string;
  additionalHeaderIcon?: () => React.ReactNode;
  isGoBack?: boolean;
}

const ScreenHeader = ({
  title,
  additionalHeaderIcon,
  isGoBack,
}: IScreenHeader) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {isGoBack && (
        <AnimatedPress onPress={handleGoBack} style={styles.leftContent}>
          <BackIcon />
        </AnimatedPress>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.rightContent}>
        {additionalHeaderIcon && additionalHeaderIcon()}
      </View>
    </View>
  );
};

export default React.memo(ScreenHeader);
