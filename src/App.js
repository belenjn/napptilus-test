import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./components/Details";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { fetchGetOompaLoompas } from "./features/oompaLoompasSlice";

function App() {
  const { oompaLoompas } = useSelector((state) => state.oompaLoompas);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGetOompaLoompas(page));
  }, [dispatch, page]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home oompaLoompas={oompaLoompas} setPage={setPage} />}
        />
        
        <Route 
        path="/:id" 
        element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
