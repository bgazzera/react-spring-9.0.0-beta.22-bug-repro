import React from "react";
import { Text, View } from "react-native";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

// This works on web but doesn't work on iOS
//
// const AnimatedTitle = animated(Text);
// const AnimatedStyledTitle = styled(AnimatedTitle)`
//   font-size: 15;
//   text-align: center;
//   color: palevioletred;
//   opacity: ${props => (!!props && !!props.opacity ? props.opacity : 1)};
// `;
//
// Console shows:
//
// Starting Metro Bundler on port 19001.
// Tunnel ready.
// Finished building JavaScript bundle in 2583ms.
// Finished building JavaScript bundle in 88ms.
// Running application on iPhone X.
// Warning: Failed prop type: Invalid props.style key `0` supplied to `Text`.
// Bad object: {
//   "0": {
//     "fontSize": 15,
//     "textAlign": "center",
//     "color": "palevioletred",
//     "opacity": 1
//   },
//   "1": {
//     "opacity": {
//       "children": [],
//       "animatedStyles": {},
//       "done": true,
//       "value": 0,
//       "startPosition": 0,
//       "lastPosition": 0
//     }
//   }
// }
// Valid keys: [
//   "display",
//   "width",
//   "height",
//   "start",
// ...

// This works on web and iOS
const StyledTitle = styled(Text)`
  font-size: 15;
  text-align: center;
  color: palevioletred;
  opacity: ${props => (!!props && !!props.opacity ? props.opacity : 1)};
`;
const AnimatedStyledTitle = animated(StyledTitle);

const StyledView = styled(View)`
  background-color: papayawhip;
  flex: 1;
  margin-top: 100;
`;

export default function App() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 }
  });

  return (
    <StyledView>
      <AnimatedStyledTitle style={{ opacity: props.opacity }}>
        Hello world
      </AnimatedStyledTitle>
    </StyledView>
  );
}
