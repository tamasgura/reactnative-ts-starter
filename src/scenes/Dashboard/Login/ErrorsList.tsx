import React from 'react';
import { StyleSheet } from 'react-native';
import DefaultText from '../../../components/Text/DefaultText';
import { colors, fontSizes, spacing } from '../../../utility/styles';
import { isEqual } from 'lodash';

interface IProps {
  errors: {
    username: string[];
    password: string[];
    [key: string]: string[];
  };
}

class ErrorsList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.list = this.list.bind(this);
    this.errorCategory = this.errorCategory.bind(this);
    this.error = this.error.bind(this);
  }

  list = () => Object.keys(this.props.errors).map((key: string) => this.errorCategory(this.props.errors[key]));

  errorCategory = (errorList: string[]) => errorList.map((errorMsg: string) => this.error(errorMsg));

  error = (errorMsg: string) => <DefaultText key={errorMsg} text={errorMsg} style={styles.errorMessage} />;

  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    return !isEqual(this.props, nextProps);
  }

  render() {
    return this.list();
  }
}

export default ErrorsList;

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.red,
    fontSize: fontSizes.s,
    marginVertical: spacing.m,
  },
});
