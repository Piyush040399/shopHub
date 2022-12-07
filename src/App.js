import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Header from "./Header";
import Home from "./Home";
import Page from "./Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Page>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </Page>
      </BrowserRouter>
    </>
  );
}

export default App;
