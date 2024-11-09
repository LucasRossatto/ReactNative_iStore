import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Pages/Home";
import Profile from "./src/Pages/Profile";
import Header from "./src/Components/Header";
import DetalhesProduto from "./src/Pages/DetalhesProduto";
import Estoque from "./src/Pages/Estoque";
import SplashScreen from "./src/Pages/Splash"; // Importando a tela de Splash


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash" // Inicializando com a tela de Splash
        screenOptions={{
          headerShown: true, // Exibe o header
          header: () => <Header />, // Chamando o Header customizado
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen} // Adicionando a tela de Splash
          options={{ headerShown: false }} // Não mostrar o header na tela de Splash
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Estoque" component={Estoque} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
