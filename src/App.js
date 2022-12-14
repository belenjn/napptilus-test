import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./components/Details";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { getOompaLoompas } from "./features/oompaLoompasSlice";

export const endpoint = "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas"


function App() {
  const { oompaLoompas } = useSelector((state) => state.oompaLoompas);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getOompaLoompas(page));
  }, [dispatch, page]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home oompaLoompas={oompaLoompas} setPage={setPage} />}
        />

        <Route path="/:id"  element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
