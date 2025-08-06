import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '@/components/Button';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.topLeft}>
      Back
      </Link>
      <Text style={styles.text}>Log In</Text>
      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginTop: 12 }}
      />

      <View style={styles.footerContainer}>
        <Button theme="primary" label="Sign In" />
      </View>

      <Link href="/create-account" style={styles.createAccountStyle}>
        Create Account
      </Link>
    </View>
  );
}

// 🔧 Reusable InputField component
function InputField({ placeholder, value, onChangeText, secureTextEntry, style }) {
  return (
    <View style={[styles.inputWrapper, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    bottom: 75,
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    bottom: 50,
    width: 320,
    height: 60,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 14,
    backgroundColor: '#ffffff3f',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  textInput: {
    color: '#fff',
    fontSize: 18,
  },
  footerContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  createAccountStyle: {
    top: 20,
    color: '#2e89ff',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  topLeft: {
    position: 'absolute',
    top: 50,
    left: 30,
    color: '#2e89ff',
    textDecorationLine: 'none',
    fontSize: 20,
  },
});

