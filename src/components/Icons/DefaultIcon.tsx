import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fontSizes } from '../../utility/styles';

interface IProps {
  name: string;
  size?: number;
  color?: string;
}

class DefaultIcon extends React.PureComponent<IProps> {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={this.props.size || fontSizes.l}
        color={this.props.color || colors.lightGrey}
        {...this.props}
      />
    );
  }
}

export default DefaultIcon;
