import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

import Button from '../components/UI/Button';
import CardView from '../components/UI/CardView';
import BorderView from '../components/UI/BorderView';
import TouchableText from '../components/UI/TouchableText';

import { authenticate } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, showSignup] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) Alert.alert('An error occured', error, [{ text: 'OK' }]);
  }, [error]);

  const switchHandler = () => {
    showSignup(signup => !signup);
  };

  const authHandler = async () => {
    setLoading(true);
    let action;
    if (signup) {
      action = authenticate(email, password, true);
    } else {
      action = authenticate(email, password);
    }

    try {
      setError(null);
      await dispatch(action);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <CardView>
        <View style={styles.cardViewContainer}>
          <BorderView style={styles.textInputContainer}>
            <TextInput
              value={email}
              placeholder={'Email'}
              onChangeText={setEmail}
              style={styles.textInput}
            />
          </BorderView>
          <BorderView style={styles.textInputContainer}>
            <TextInput
              value={password}
              placeholder={'Password'}
              onChangeText={setPassword}
              style={styles.textInput}
              secureTextEntry
            />
          </BorderView>
          <View style={styles.buttonContainer}>
            {!loading ? (
              <Button
                title={!signup ? 'Login' : 'Signup'}
                onPress={authHandler}
                style={styles.button}
              />
            ) : (
              <ActivityIndicator size={'large'} color={Colors.primaryColor} />
            )}
          </View>
          <TouchableText
            title={!signup ? 'Go to Signup' : 'Go to Login'}
            onPress={switchHandler}
          />
        </View>
      </CardView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  cardViewContainer: {
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
  },
  textInputContainer: {
    width: '80%',
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
    width: '50%',
  },
  button: {
    borderRadius: 25,
  },
});

export default AuthScreen;
