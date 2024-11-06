import { StatusBar } from "expo-status-bar";
import Home from "./src/Pages/Home";
import Header from "./src/Components/Header";
import Feed from "./src/Components/Feed";

export default function App() {
  return (
    <>
      <StatusBar />
      <Header />
      <Home/>
    </>
  );
}
