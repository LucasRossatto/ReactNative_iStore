import { StatusBar } from "expo-status-bar";
import Home from "./src/Pages/Home";
import Header from "./src/Components/Header";
import CategoriasMenu from "./src/Components/CategoriasMenu";

export default function App() {
  return (
    <>
      <StatusBar />
      <Header />
      <CategoriasMenu/>
    </>
  );
}
