import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({ children, className = "", containerClassName = "", id }: { children: ReactNode; className?: string; containerClassName?: string; id?: string }) {
  return <section className={["py-16 sm:py-20", className].join(" ")} id={id}><Container className={containerClassName}>{children}</Container></section>;
}
