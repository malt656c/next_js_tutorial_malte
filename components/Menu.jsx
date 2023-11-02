'use client'
import Link from "next/link";
import _JSXStyle from 'styled-jsx/style'
export default function Menu() {
  return (
    <nav className="navigation">
      <Link href={"./"} prefetch={false}>
        home
      </Link>
      <Link href={"./underside"} prefetch={false}>
        dawgs
      </Link>
<style jsx>
  {
    `
    .navigation{
      display:flex;
      gap:1rem;
    }
    `
  }
</style>
    </nav>
  );
}
