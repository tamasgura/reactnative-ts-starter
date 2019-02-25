import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors, fontSizes } from '../../../utility/styles';
import { isEqual } from 'lodash';

interface IProps {
  autoCapitalize?: string;
  autoComplete?: string;
  inputRef?: any;
  onChangeHandler: (arg1: any) => any;
  placeholder: string;
  secureTextEntry?: boolean;
  style?: {};
  // TODO add enum for prop types
  textContentType?: any;
  valid?: boolean;
}

class DefaultInput extends Component<IProps, { value: string }> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: '',
    };
  }

  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    return (
      <TextInput
        {...this.props}
        onChangeText={text => {
          this.setState({ value: text });
          this.props.onChangeHandler(text);
        }}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        style={[
          styles.input,
          this.props.style,
          this.state.value.length > 0 && !this.props.valid ? styles.invalid : null,
        ]}
      />
    );
  }
}

export default DefaultInput;

const styles = StyleSheet.create({
  input: {
    fontSize: fontSizes.s,
    width: 300,
    height: 42,
    margin: 12,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    borderRadius: 6,
  },
  invalid: {
    borderColor: colors.danger,
    borderWidth: 2,
  },
});
