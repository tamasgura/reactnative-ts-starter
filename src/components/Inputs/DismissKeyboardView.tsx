import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

interface IProps {
  children?: any;
}

const DismissKeyboardHOC = (Comp: any) => {
  return (props: IProps) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1, width: '100%', backgroundColor: 'yellow' }}>
      <Comp props={props}>{props.children}</Comp>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardHOC(View);
