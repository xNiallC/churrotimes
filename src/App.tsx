import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  Box,
} from '@chakra-ui/react'
import './App.css';
import Destinations from "./components/Destinations";
import Destination from "./components/Destination";
import Park from "./components/Park";
import NavBar from "./components/NavBar";
import { useLocation, Route } from "wouter";

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
  const [location] = useLocation();
  console.log(location);
  return (
    <Box
      backgroundColor="brand.gray"
    >
      <NavBar />
      <Route path="/">
        <Destinations />
      </Route>
      <Route path="/destinations/:destinationId">
        <Destination />
      </Route>
      <Route path="/parks/:parkId">
        <Park />
      </Route>
    </Box>
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
