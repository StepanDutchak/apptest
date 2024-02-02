import {StyleSheet} from 'react-native';
import {fonts} from '../../../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    ...fonts.h1Title,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
