import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultIcon from '../../components/Icons/DefaultIcon';
import DefaultText from '../../components/Text/DefaultText';
import Counter from './Counter/Counter';
import DemoI18N from './DemoI18N/DemoI18N';
import Login from './Login/Login';

class Dashboard extends Component {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <DefaultText text="Dashboard" />
        <DefaultIcon name="ios-at" />
        <Counter />
        <DemoI18N />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
