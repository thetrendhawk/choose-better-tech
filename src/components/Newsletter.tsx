import { Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

export function Newsletter() {
  return <Section className="bg-slate-950 text-white"><div className="mx-auto max-w-3xl text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-accent-100"><Mail size={28} aria-hidden="true" /></span><h2 className="mt-5 text-3xl font-bold">Get new guides when they launch</h2><p className="mt-4 text-base leading-7 text-slate-300">Join the early list for practical software comparisons and beginner-friendly explainers.</p><form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" aria-label="Newsletter signup"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input className="min-h-11 flex-1 rounded-md border border-slate-700 bg-white px-4 text-base text-slate-950 placeholder:text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-200" id="newsletter-email" name="email" type="email" placeholder="you@example.com" /><Button type="submit">Notify Me</Button></form></div></Section>;
}
