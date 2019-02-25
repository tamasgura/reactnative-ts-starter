import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import DefaultButton from '../../../components/Touchables/DefaultButton';
import DefaultText from '../../../components/Text/DefaultText';
import { loadJSONPlaceholder } from '../../../store/actions';
import { JSONPlaceholderSelector } from '../../../store/selectors';

interface IProps {
  style?: {};
  onLoadJSONPlaceholder?: () => any;
  JSONPlaceholder?: string;
}

class DemoI18N extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        <DefaultButton text="load json" onPress={this.props.onLoadJSONPlaceholder} />
        <DefaultText text={this.props.JSONPlaceholder} />
      </View>
    );
  }
}

const mapStateToProps = (state: { JSONPlaceholder: string }) => {
  const JSONPlaceholder = JSONPlaceholderSelector(state);
  return {
    JSONPlaceholder,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onLoadJSONPlaceholder: () => dispatch(loadJSONPlaceholder()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoI18N);

const styles = StyleSheet.create({
  container: {},
});
