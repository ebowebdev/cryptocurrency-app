import { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDataAction, fetchNewsAction } from "./redux/actions";
import Home from "./pages/home/Home";
import NewsPage from "./pages/news/News";
import CryptoCurrency from "./pages/cryptoCurrency/CryptoCurrency";
import Crypto from "./pages/crypto/Crypto";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import TotalMarket from "./components/totalMarket/TotalMarket";
import ThemeBtn from "./components/themeBtn/ThemeBtn";
import { initialstate, themeReducer } from "./themeReducer";
import "./app.css";

function App() {
  const dispatch = useDispatch();
  const [state, dispatchTheme] = useReducer(themeReducer,initialstate)

  console.log({staApp:state})

  const changeTheme = () => {
    dispatchTheme({
      type: 'CHANGE_THEME'
    })
  }

  useEffect(() => {
    dispatch(fetchDataAction());
    dispatch(fetchNewsAction());
  }, [dispatch]);

  return (
      <BrowserRouter>
        <div className={state?.darke ? "app" : "light app"}>
          <div className="theme-total-container">
            <TotalMarket />
            <ThemeBtn changeTheme={changeTheme} darke={state?.darke}/>
          </div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home darke={state?.darke}/>} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/news" element={<NewsPage />} />
            <Route exact path="/cryptocurrency" element={<CryptoCurrency />} />
            <Route
              exact
              path="/cryptocurrency/filterBy/:filterBy"
              element={<CryptoCurrency />}
            />
            <Route exact path="/cryptocurrency/:uuid" element={<Crypto />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
