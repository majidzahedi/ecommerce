import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation.components";
import Home from "./routes/home/Home.component";
import SignIn from "./routes/sign-in/sing-in.component";

const Some = () => <h1>its shop</h1>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Some />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
