import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function SiteLayout() {
  return <div className="flex min-h-screen flex-col bg-white text-slate-950"><Navbar /><main className="flex-1"><Outlet /></main><Footer /></div>;
}
