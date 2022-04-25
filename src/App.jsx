import { Routes, Route } from "react-router-dom";

import Navigation from "./route/navigation/Navigation.components";
import Home from "./route/home/Home.component";

const Some = () => <h1>its shop</h1>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Some />} />
      </Route>
    </Routes>
  );
}
