import { Outlet } from "react-router-dom";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { menuOpen, isDark } = useSelector((state) => state.preferences);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <section className="overflow-hidden font-sans dark:bg-gray-950">
      <Header />
      <main
        className={`max-w-[1300px] w-full mx-auto border-b border-slate-800 mb-4 pt-4 pb-16 ${
          menuOpen ? "blur-sm" : ""
        } dark:bg-slate-950 dark:text-white`}
      >
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </section>
  );
}

export default App;
