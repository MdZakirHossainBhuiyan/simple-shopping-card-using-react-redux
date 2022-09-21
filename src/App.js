import { Provider } from "react-redux";
import Card from "./Components/Card";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="grid grid-cols-12 gap-6">
          <ProductList />
          <Card />
        </div>
      </div>
    </Provider>
  );
}

export default App;
