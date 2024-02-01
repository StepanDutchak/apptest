import * as React from 'react';
import Svg, {SvgProps, G, Circle, Path} from 'react-native-svg';
const AddPostIcon = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...props}>
    <G strokeWidth={1.5}>
      <Circle cx={12} cy={12} r={10} opacity={0.5} />
      <Path strokeLinecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3" />
    </G>
  </Svg>
);
export default AddPostIcon;
