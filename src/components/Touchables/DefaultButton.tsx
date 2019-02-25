import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';

import { colors, spacing } from '../../utility/styles';

import DefaultText from '../Text/DefaultText';

interface IProps {
  size?: 'small' | undefined;
  containerStyle?: {};
  disabled?: boolean;
  text: string;
  textStyle?: {};
  onPress?: () => any;
}

class DefaultButton extends React.Component<IProps> {
  size: {
    width: number;
    height: number;
  };
  content: JSX.Element;
  touchableContent: JSX.Element;
  renderContent: JSX.Element;

  constructor(props: IProps) {
    super(props);
    this.size = {
      width: this.props.size === 'small' ? 90 : 220,
      height: this.props.size === 'small' ? 25 : 40,
    };
    this.content = (
      <View style={[{ ...this.size }, styles.container, this.props.containerStyle]}>
        <DefaultText
          text={this.props.text}
          style={[styles.text, this.props.textStyle, this.props.disabled ? styles.disabledText : null]}
        />
      </View>
    );
    this.touchableContent = (
      <TouchableNativeFeedback style={{ ...this.size }} onPress={props.onPress}>
        {this.content}
      </TouchableNativeFeedback>
    );
    this.renderContent = this.props.disabled ? this.content : this.touchableContent;
  }

  render() {
    return this.renderContent;
  }
}

export default DefaultButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonPrimary,
    borderRadius: 6,
    marginVertical: spacing.m,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonPrimary,
    borderRadius: 6,
  },
  text: {
    color: colors.textLight,
  },
  disabledText: {},
  touchable: {},
});
