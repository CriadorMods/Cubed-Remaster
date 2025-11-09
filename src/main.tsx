import ReactDOM from "react-dom/client";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "@/css/index.css";

// API
import "@/api/index";

// Zustand
import { useModalsStore } from "./zustand/ModalStore";

// Components
import Nav from "@/components/Nav";
import Downloads from "@/components/modals/Downloads";
import Question from "@/components/modals/Question";
import MobileSidebar from "@/components/modals/MobileSidebar";

// Pages
import Home from "@/pages/Home";
import BattlePass from "@/pages/BattlePass";
import Register from "@/pages/Register";
import SignIn from "@/pages/Sign-In";
import News from "@/pages/News";
import NewsPost from "@/pages/NewsPost";
import Competitive from "@/pages/Competitive";
import HypeLeaderboard from "@/pages/HypeLeaderboard";
import Crew from "@/pages/Subscription";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const { downloads, question, mobileSidebar } = useModalsStore();

  return (
    <>
      <Helmet>
        <title>Epic Games' Fortnite</title> {/* this is a default value so if you dont set a value for a page it just defaults to this one :D */}
      </Helmet>

      <Nav />

      <AnimatePresence>{downloads && <Downloads />}</AnimatePresence>

      <AnimatePresence>{question && <Question />}</AnimatePresence>

      <AnimatePresence>{mobileSidebar && <MobileSidebar />}</AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battle-pass/cubed" element={<BattlePass />} />
        <Route path="/fortnite-crew-subscription" element={<Crew />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:header" element={<NewsPost />} />
        <Route path="/flux/competitive" element={<Competitive />} />
        <Route path="/flux/competitive/hype/leaderboard" element={<HypeLeaderboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

document.addEventListener("contextmenu", (e) => e.preventDefault());

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
