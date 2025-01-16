import { HStack, Button } from "@chakra-ui/react";

/* Components */
import * as UI from "./components/index.ts";

const App = () => {
  return (
    <HStack>
      <UI.Demo></UI.Demo>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
};

export default App;
