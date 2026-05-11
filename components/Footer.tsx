import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-brand" href="/">
          Time Acceleration
        </Link>
        <p>
          Shenyang Time Acceleration Technology Co., Ltd. builds compact,
          thoughtful mobile games for everyday play.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/games">Snake Jam</Link>
        <Link href="/about">About</Link>
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
      <div className="footer-contact">
        <span>Contact</span>
        <a href="mailto:contact@timeaccel.com">contact@timeaccel.com</a>
        <small>
          Copyright 2026 Shenyang Time Acceleration Technology Co., Ltd.
        </small>
      </div>
    </footer>
  );
}
