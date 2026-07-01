import { Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

export function Newsletter() {
  return <Section className="bg-slate-50"><div className="mx-auto max-w-3xl text-center"><Mail className="mx-auto text-brand-700" size={32} aria-hidden="true" /><h2 className="mt-4 text-3xl font-bold text-slate-950">Get new guides when they launch</h2><p className="mt-4 text-base leading-7 text-slate-700">Join the early list for practical software comparisons and beginner-friendly explainers.</p><form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" aria-label="Newsletter signup"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input className="min-h-11 flex-1 rounded-md border border-slate-300 px-4 text-base text-slate-950 placeholder:text-slate-500" id="newsletter-email" name="email" type="email" placeholder="you@example.com" /><Button type="submit">Notify Me</Button></form></div></Section>;
}
