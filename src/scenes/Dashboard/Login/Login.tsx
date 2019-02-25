import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { validate } from 'validate.js';
import DefaultInput from '../../../components/Inputs/DefaultInput/DefaultInput';
import DefaultText from '../../../components/Text/DefaultText';
import ErrorsList from './ErrorsList';

interface IProps {
  style?: {};
}

interface IState {
  controls: {
    username: string;
    password: string;
  };
  errors: {
    username: string[];
    password: string[];
  };
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      controls: {
        username: '',
        password: '',
      },
      errors: {
        username: [],
        password: [],
      },
    };
  }

  usernameChangeHandler = (text: string) => {
    this.setState(
      previousState => ({
        ...previousState,
        controls: {
          ...previousState.controls,
          username: text,
        },
      }),
      () => this.validateInputs()
    );
  };

  passwordChangeHandler = (text: string) => {
    this.setState(
      previousState => ({
        ...previousState,
        controls: {
          ...previousState.controls,
          password: text,
        },
      }),
      () => this.validateInputs()
    );
  };

  validateInputs = () => {
    const constraints = {
      username: {
        email: true,
        exclusion: {
          within: ['nicklas'],
          message: "'%{value}' is not allowed",
        },
      },
      password: {
        length: {
          minimum: 6,
          message: 'must be at least 6 characters',
        },
      },
    };
    const errors = validate(this.state.controls, constraints) || [];

    console.log('validating', errors);
    this.setState(
      previousState => ({
        ...previousState,
        errors,
        controls: {
          ...previousState.controls,
        },
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        <DefaultInput
          style={styles.input}
          placeholder="Username"
          textContentType="username"
          autoComplete="username"
          autoCapitalize="none"
          onChangeHandler={this.usernameChangeHandler}
        />
        <DefaultInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          autoComplete="password"
          autoCapitalize="none"
          onChangeHandler={this.passwordChangeHandler}
        />
        <DefaultText text={this.state.controls.username} />
        <DefaultText text={this.state.controls.password} />
        <ErrorsList errors={this.state.errors} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {},
});

export default Login;
