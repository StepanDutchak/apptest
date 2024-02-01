import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const StartIcon = (props: SvgProps) => (
  <Svg
    fill="#fff"
    width={175}
    height={175}
    stroke="#fff"
    viewBox="0 0 100 100"
    {...props}>
    <Path d="M49.2 21.7c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7.3.5.4 1.1.2 1.6l-2.8 8.9c-.5 1.6 1 3 2.6 2.5l8.8-3.1c.6-.2 1.2-.1 1.7.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-.2-15.5-13.6-28-30.1-28z" />
  </Svg>
);
export default StartIcon;
