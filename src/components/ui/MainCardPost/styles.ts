import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: themes.dark.WHITE,
    marginTop: 24,
    borderRadius: 12,
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  containerExpanded: {
    height: 120,
  },
  buttonUpdate: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: themes.dark.WHITE,
  },
  buttonDetails: {
    marginTop: 12,
    padding: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: themes.dark.WHITE,
  },
  cardTitle: {
    ...fonts.h3Title,
  },
  cardUpdateTitle: {
    ...fonts.title14,
  },
  cardDetailsTitle: {
    ...fonts.title14,
  },
});
