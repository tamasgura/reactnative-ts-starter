import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { validate } from 'validate.js'
import DefaultInput from '../../../components/Inputs/DefaultInput/DefaultInput'
import DefaultText from '../../../components/Text/DefaultText'
import { spacing } from '../../../utility/styles'

interface IProps {
  style?: {}
}

interface IState {
  controls: {
    username: string
    password: string
  }
  errors: string[]
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      controls: {
        username: '',
        password: '',
      },
      errors: [],
    }
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
    )
  }

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
    )
  }

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
    }
    const errors = validate(this.state.controls, constraints) || []
    this.setState(previousState => ({
      ...previousState,
      errors,
    }))
  }

  // errorsList = () => {
  //   Object.keys(this.state.errors).map(e => (
  //     <Text key={e[0]} style={styles.errorMessage}>{this.state.errors[e][0]}</Text>
  //   ));
  // }

  render() {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        <DefaultInput
          style={styles.input}
          placeholder="Username"
          textContentType="username"
          autoComplete="username"
          autoCapitalize="none"
          onChangeText={this.usernameChangeHandler}
        />
        <DefaultInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          autoComplete="password"
          autoCapitalize="none"
          onChangeText={this.passwordChangeHandler}
        />
        <DefaultText text={this.state.controls.username} />
        <DefaultText text={this.state.controls.password} />
        {Object.keys(this.state.errors).map((e: any) => (
          <Text key={e[0]} style={styles.errorMessage}>
            {this.state.errors[e][0]}
          </Text>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {},
  errorMessage: {
    color: '#ff0000',
    fontSize: 20,
    marginVertical: spacing.m,
  },
})

export default Login
