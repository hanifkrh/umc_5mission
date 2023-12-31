import {BrowserRouter, Route, Routes } from "react-router-dom";
import Celebrity from "./pages/Celebrity";
import TV from "./pages/TV";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movie' element={<Movies/>} />
      <Route path='/tv' element={<TV/>} />
      <Route path='/person' element={<Celebrity/>} />
      <Route path='/*' element={<NotFound/>} />
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
