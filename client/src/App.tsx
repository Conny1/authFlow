import "./App.css";
import { Route, Routes } from "react-router";
import { Auth, Dashboard } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
