import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    color: themes.dark.WHITE,
    width: '100%',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: themes.dark.WHITE,
    padding: 10,
  },
  buttonSaveContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: themes.dark.WHITE,
    padding: 6,
    width: '50%',
  },
  buttonSaveTitle: {
    ...fonts.title14,
  },
});
