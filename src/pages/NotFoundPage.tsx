import { Link } from "react-router-dom";
import emptyState from "../assets/empty-state.svg";
import { SEO } from "../components/SEO";
import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export function NotFoundPage() {
  return <><SEO title="Page Not Found" description="The page you were looking for could not be found on Choose Better Tech." path="/404" /><Container className="py-20 text-center sm:py-28"><img className="mx-auto h-auto w-full max-w-sm" src={emptyState} alt="Simple illustration of a document search with no matching result" /><p className="mt-8 text-sm font-semibold uppercase tracking-wide text-brand-700">404</p><h1 className="mt-3 text-4xl font-bold text-slate-950">Page not found</h1><p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-700">The page may have moved, or the guide may not be published yet. Start from the homepage to find the latest sections.</p><div className="mt-8"><ButtonLink to="/">Return Home</ButtonLink></div><p className="mt-6 text-sm text-slate-500">Looking for a policy page? Visit <Link className="font-medium text-brand-700 underline" to="/privacy">Privacy</Link> or <Link className="font-medium text-brand-700 underline" to="/terms">Terms</Link>.</p></Container></>;
}
