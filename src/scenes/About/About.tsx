import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

import { navigate } from '../../navigation/services';

import DefaultButton from '../../components/Touchables/DefaultButton';

interface IProps {
  counter: number;
}

interface IState {
  title: string;
}

class About extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: 'About',
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        <DefaultButton text="to dashboard" onPress={() => navigate('Dashboard')} />
        <Text>Counter: {this.props.counter}</Text>
        <TextInput
          style={{ backgroundColor: 'yellow' }}
          onChangeText={text => {
            console.log(text);
          }}
        />
      </View>
    );
  }
}

export default About;
