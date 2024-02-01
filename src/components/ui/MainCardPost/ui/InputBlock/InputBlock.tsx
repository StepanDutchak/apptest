import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {text} from 'locale/en';
import themes from 'theme/colors';

import {styles} from './styles';
import AnimatedPress from 'components/base/AnimatedPress';

interface IInputBlock {
  containerStyle?: object;
  onChange: (text: string) => void;
  value: string;
  handleSave: () => void;
}

const InputBlock = ({
  containerStyle,
  onChange,
  value,
  handleSave,
}: IInputBlock) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholderTextColor={themes.dark.WHITE}
        placeholder={text.placeholder.updatePostTitle}
        style={styles.inputContainer}
        onChangeText={onChange}
        value={value}
      />
      <AnimatedPress onPress={handleSave} style={styles.buttonSaveContainer}>
        <Text style={styles.buttonSaveTitle}>{text.button.post_save}</Text>
      </AnimatedPress>
    </View>
  );
};

export default React.memo(InputBlock);
