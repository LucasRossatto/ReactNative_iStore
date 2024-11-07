import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Pages/Home";
import Profile from "./src/Pages/Profile";
import Header from "./src/Components/Header";
import DetalhesProduto from "./src/Pages/DetalhesProduto";
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true, // Exibe o header
          header: () => <Header />, // Chamando custom Header
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
