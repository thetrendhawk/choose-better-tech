import { Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

const mailchimpActionUrl = "https://gmail.us22.list-manage.com/subscribe/post?u=2b6b599ff49439c3c3a6a5927&id=b33e3d79ce&f_id=0074c2e1f0";

export function Newsletter() {
  return <Section className="bg-slate-950 text-white"><div className="mx-auto max-w-3xl text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-accent-100"><Mail size={28} aria-hidden="true" /></span><h2 className="mt-5 text-3xl font-bold">Get the free Software Buyer Checklist</h2><p className="mt-4 text-base leading-7 text-slate-300">Join for beginner-friendly software guides and get a practical checklist to help compare tools before you pay for another subscription.</p><form action={mailchimpActionUrl} method="post" target="_blank" rel="noopener noreferrer" className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" aria-label="Newsletter signup"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input className="min-h-11 flex-1 rounded-md border border-slate-700 bg-white px-4 text-base text-slate-950 placeholder:text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-200" id="newsletter-email" name="EMAIL" type="email" placeholder="you@example.com" autoComplete="email" required /><Button type="submit">Get the Checklist</Button></form><p className="mt-3 text-sm text-slate-400">No spam. Unsubscribe anytime.</p></div></Section>;
}
