import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    marginTop: 24,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderColor: themes.dark.white,
  },
  titlePlaceholder: {
    ...fonts.h1Title,
  },
  bodyPlaceholder: {
    marginTop: 10,
    ...fonts.h1Title,
  },
  body: {
    marginTop: 10,
    alignSelf: 'flex-end',
    ...fonts.title14,
  },
  title: {
    alignSelf: 'flex-end',
    ...fonts.title14,
  },
});
