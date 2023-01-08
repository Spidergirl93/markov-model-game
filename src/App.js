import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories/1" element={<></>} />
      <Route path="/stories/2" element={<></>} />
      <Route path="/stories/3" element={<></>} />
      <Route path="*" element={<></>} />
    </Routes>
  );
};

export default App;
