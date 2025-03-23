import { StyleSheet } from 'react-native';
import Home from './src/pages/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NewTransaction from './src/pages/NewTransaction';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="NewTransaction" component={NewTransaction}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
