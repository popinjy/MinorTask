import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.signIn}>
        <Link href="/sign-in" style={styles.button}>
          Sign In
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signIn: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#2e89ff',
    fontWeight: 'bold',
  },
});
