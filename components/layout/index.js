import { Footer1 } from "../footer";
import { Footer2 } from "../footer";

export function Layout1({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer1 />
    </>
  );
}

export function Layout2({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer2 />
    </>
  );
}
