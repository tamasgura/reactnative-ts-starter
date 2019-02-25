import { isEqual } from 'lodash';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, fonts, fontSizes } from '../../utility/styles';

interface IProps {
  style?: {};
  text?: string;
}

class DefaultText extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: IProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    return (
      <Text style={[styles.text, this.props.style]} {...this.props}>
        {this.props.text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: colors.textPrimary,
    fontFamily: fonts.primary,
    fontSize: fontSizes.m,
  },
});

export default DefaultText;
