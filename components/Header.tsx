import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" }
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Time Acceleration home">
        <span className="brand-mark" aria-hidden="true">
          TA
        </span>
        <span>
          <strong>Time Acceleration</strong>
          <small>Mobile Game Studio</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
