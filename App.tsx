import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Primary" size="sm" variant="primary" loading={false}/>
      <Button title="Secondary" size="sm" variant="outline" loading={false}/>
      <Button title="Ghost" size="sm" variant="ghost" loading={false}/>
      <Button title="Ghost" size="sm" variant="destructive"/>
      <Button title="Ghost" size="sm" variant="ghost" loading={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
