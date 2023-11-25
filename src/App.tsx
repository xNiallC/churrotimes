import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig
} from '@chakra-ui/react'
import './App.css';
import Destinations from "./components/Destinations";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

const theme: ThemeConfig = extendTheme({
  colors: {
    brand: {
      darkGray: "#393434",
      midGray: "#544f4c",
      gray: "#6e6868",
    }
  },
});

const App = () => {
  return (
    <>
      <NavBar />
      <Destinations />
    </>
  )
}

const Providers = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </QueryClientProvider>
)

export default Providers
