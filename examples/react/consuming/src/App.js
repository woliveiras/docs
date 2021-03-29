import {RaguComponent} from "ragu-client-react";

const App = () => {
  return <div>
    <h1>My micro-frontend:</h1>
    <RaguComponent src="http://localhost:3100" />
  </div>;
}

export default App;
