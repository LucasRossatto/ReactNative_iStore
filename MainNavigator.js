import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Pages/Home";
import Profile from "./src/Pages/Profile";
import Header from "./src/Components/Header";
import DetalhesProduto from "./src/Pages/DetalhesProduto";
import SplashScreen from "./src/Pages/Splash"; 
import CriarProduto from "./src/Pages/CriarProduto";
import EditarProduto from "./src/Pages/EditarProduto";
import DeletarProduto from "./src/Pages/DeletarProduto";
import VizualizarEstoque from "./src/Pages/VizualizarEstoque";


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash" 
        screenOptions={{
          headerShown: true, 
          header: () => <Header />, 
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="CriarProduto" component={CriarProduto} />
        <Stack.Screen name="EditarProduto" component={EditarProduto} />
        <Stack.Screen name="FeedEstoque" component={VizualizarEstoque} />
        <Stack.Screen name="DeletarProduto" component={DeletarProduto} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
