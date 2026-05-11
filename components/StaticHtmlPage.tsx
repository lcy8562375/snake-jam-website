import fs from "node:fs";
import path from "node:path";

const pages = [
  { href: "/", label: "Home", fileName: "index.html" },
  { href: "/games", label: "Games", fileName: "games.html" },
  { href: "/about", label: "About", fileName: "about.html" },
  { href: "/support", label: "Support", fileName: "support.html" },
  { href: "/privacy", label: "Privacy", fileName: "privacy.html" },
  { href: "/terms", label: "Terms", fileName: "terms.html" }
];

const linkReplacements: Array<[RegExp, string]> = [
  [/href="index\.html"/g, 'href="/"'],
  [/href="games\.html"/g, 'href="/games"'],
  [/href="about\.html"/g, 'href="/about"'],
  [/href="support\.html"/g, 'href="/support"'],
  [/href="privacy\.html"/g, 'href="/privacy"'],
  [/href="terms\.html"/g, 'href="/terms"'],
  [new RegExp("\\u6f0f 2026", "g"), "&copy; 2026"]
];

const icons: Record<string, string> = {
  alternate_email:
    '<path d="M12 2a10 10 0 1 0 6.32 17.75.9.9 0 0 0-1.14-1.4A8.2 8.2 0 1 1 20.2 12v1.3c0 .85-.54 1.35-1.18 1.35-.62 0-1.02-.42-1.02-1.1V8.2h-1.72l-.18 1.1A4.12 4.12 0 0 0 12.7 8a4.2 4.2 0 0 0 0 8.4 4 4 0 0 0 3.02-1.3 3.02 3.02 0 0 0 3.3 1.2c1.74-.4 2.98-1.82 2.98-3V12A10 10 0 0 0 12 2Zm.7 12.55a2.35 2.35 0 1 1 0-4.7 2.35 2.35 0 0 1 0 4.7Z"/>',
  android:
    '<path d="M7 9h10v7.5A2.5 2.5 0 0 1 14.5 19h-5A2.5 2.5 0 0 1 7 16.5V9Zm1.3-3.6L6.7 3.8 5.6 4.9 7.4 6.7A6.8 6.8 0 0 0 5.2 8h13.6a6.8 6.8 0 0 0-2.2-1.3l1.8-1.8-1.1-1.1-1.6 1.6A8.5 8.5 0 0 0 12 4.6a8.5 8.5 0 0 0-3.7.8ZM9.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
  arrow_forward:
    '<path d="M13.2 5.3 20 12l-6.8 6.7-1.4-1.4 4.35-4.3H4v-2h12.15L11.8 6.7l1.4-1.4Z"/>',
  business:
    '<path d="M4 21V5.5C4 4.12 5.12 3 6.5 3h7C14.88 3 16 4.12 16 5.5V9h1.5c1.38 0 2.5 1.12 2.5 2.5V21h-6v-4h-4v4H4Zm3-12h2V7H7v2Zm0 4h2v-2H7v2Zm0 4h2v-2H7v2Zm5-8h2V7h-2v2Zm0 4h2v-2h-2v2Zm4 2h2v-2h-2v2Zm0 4h2v-2h-2v2Z"/>',
  check_circle:
    '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.1 14.2-4-4 1.4-1.4 2.6 2.6 5.8-5.8 1.4 1.4-7.2 7.2Z"/>',
  cookie:
    '<path d="M21 12.4A9 9 0 1 1 11.6 3a4 4 0 0 0 4.8 4.8A4 4 0 0 0 21 12.4ZM8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
  copyright:
    '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.1 15a5 5 0 1 1 3.5-8.55l-1.42 1.4a3 3 0 1 0 0 4.3l1.42 1.4A4.92 4.92 0 0 1 12.1 17Z"/>',
  database:
    '<path d="M12 3c4.42 0 8 1.57 8 3.5V17c0 1.93-3.58 3.5-8 3.5S4 18.93 4 17V6.5C4 4.57 7.58 3 12 3Zm0 2c-3.7 0-6 1-6 1.5S8.3 8 12 8s6-1 6-1.5S15.7 5 12 5Zm0 5c-2.45 0-4.62-.48-6-1.25V12c0 .5 2.3 1.5 6 1.5s6-1 6-1.5V8.75C16.62 9.52 14.45 10 12 10Zm0 5.5c-2.45 0-4.62-.48-6-1.25V17c0 .5 2.3 1.5 6 1.5s6-1 6-1.5v-2.75c-1.38.77-3.55 1.25-6 1.25Z"/>',
  extension:
    '<path d="M9 3h6v4h2.25a2.75 2.75 0 0 1 0 5.5H15V21H9v-3.1a2.75 2.75 0 1 1 0-5.3V10H3V7h6V3Zm2 2v4H5v-1h6V5Zm6.25 4H13V5h-1v6H7v3.75l-1.55-.9A.75.75 0 1 0 5.45 15L7 14.1V19h6v-8.5h4.25a.75.75 0 0 0 0-1.5Z"/>',
  gavel:
    '<path d="m13.1 4.2 6.7 6.7-2.1 2.1-1.4-1.4-3.1 3.1 6.4 6.4-1.5 1.5-6.4-6.4-3 3-5.3-5.3 3-3L5 9.5l2.1-2.1 6.7 6.7 1.1-1.1-6.7-6.7 4.9-2.1Z"/>',
  info:
    '<path d="M11 17h2v-6h-2v6Zm0-8h2V7h-2v2Zm1 13a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"/>',
  inventory_2:
    '<path d="M4 3h16v5H4V3Zm2 7h12v10H6V10Zm3 3v2h6v-2H9ZM6 5v1h12V5H6Z"/>',
  link:
    '<path d="M3.9 12a5 5 0 0 1 5-5h4v2h-4a3 3 0 1 0 0 6h4v2h-4a5 5 0 0 1-5-5Zm5.1 1v-2h6v2H9Zm2-4V7h4a5 5 0 0 1 0 10h-4v-2h4a3 3 0 1 0 0-6h-4Z"/>',
  mail:
    '<path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 8 8-5V7l-8 5-8-5v1l8 5Z"/>',
  manage_accounts:
    '<path d="M10 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0 2c2.7 0 6 1.35 6 4v1H4v-1c0-2.65 3.3-4 6-4Zm9.5 1.1.8.45-.8 1.38v.14l.8 1.38-.8.45-.8-1.38a2.6 2.6 0 0 1-.16.1l-.8 1.38-.8-.45.8-1.38v-.2l-.8-1.38.8-.45.8 1.38.16-.1.8-1.38Z"/>',
  palette:
    '<path d="M12 3a9 9 0 0 0 0 18h1.5a2.2 2.2 0 0 0 .8-4.25 1.45 1.45 0 0 1 .55-2.75H16a5 5 0 0 0 0-10H12Zm-4 8a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 8 11Zm3-3a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 11 8Zm4 1a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 15 9Z"/>',
  phone_iphone:
    '<path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 3v14h8V5H8Zm3 15h2v1h-2v-1Z"/>',
  policy:
    '<path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1 14-3.5-3.5L9 11l2 2 4-4 1.5 1.5L11 16Z"/>',
  psychology:
    '<path d="M10 2a6 6 0 0 0-6 6c0 2.7 1.8 5 4.2 5.75V17h7.6v-3.25A6 6 0 0 0 16 2h-6Zm-2 17h8v2H8v-2Zm4-13a2 2 0 0 1 1 3.73V12h-2V9.73A2 2 0 0 1 12 6Z"/>',
  public:
    '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.1a15.2 15.2 0 0 0-1.15-5A8.05 8.05 0 0 1 18.9 11ZM12 4.05A13.5 13.5 0 0 1 13.8 11h-3.6A13.5 13.5 0 0 1 12 4.05ZM5.1 13h3.1c.18 1.8.58 3.55 1.15 5A8.05 8.05 0 0 1 5.1 13Zm3.1-2H5.1A8.05 8.05 0 0 1 9.35 6 15.2 15.2 0 0 0 8.2 11ZM12 19.95A13.5 13.5 0 0 1 10.2 13h3.6A13.5 13.5 0 0 1 12 19.95ZM14.65 18c.57-1.45.97-3.2 1.15-5h3.1A8.05 8.05 0 0 1 14.65 18Z"/>',
  route:
    '<path d="M6 3a3 3 0 0 0-3 3c0 2.25 3 5.5 3 5.5S9 8.25 9 6a3 3 0 0 0-3-3Zm0 4.2A1.2 1.2 0 1 1 6 4.8a1.2 1.2 0 0 1 0 2.4ZM18 12.5s-3 3.25-3 5.5a3 3 0 0 0 6 0c0-2.25-3-5.5-3-5.5Zm0 6.7a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4ZM8 14h3a3 3 0 1 0 0-6h-1V6h1a5 5 0 1 1 0 10H8a2 2 0 1 0 0 4h5v2H8a4 4 0 1 1 0-8Z"/>',
  share:
    '<path d="M18 16.1a3 3 0 0 0-2.25 1.02L8.9 13.55a3.25 3.25 0 0 0 0-3.1l6.85-3.57A3 3 0 1 0 15 5a3.3 3.3 0 0 0 .05.55L8.2 9.12a3 3 0 1 0 0 5.76l6.85 3.57A3 3 0 1 0 18 16.1Z"/>',
  smartphone:
    '<path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 3v14h8V5H8Zm3 15h2v1h-2v-1Z"/>',
  speed:
    '<path d="M12 4a10 10 0 0 1 10 10 9.7 9.7 0 0 1-1.2 4.7H3.2A9.7 9.7 0 0 1 2 14 10 10 0 0 1 12 4Zm0 3a7 7 0 0 0-6.7 9.7h13.4A7 7 0 0 0 12 7Zm4.2 3.4-3.4 5.9a2 2 0 0 1-3.45-2l5.9-3.4.95-.5Z"/>',
  sports_esports:
    '<path d="M7 8h10a5 5 0 0 1 4.7 6.72l-.8 2.18A2.5 2.5 0 0 1 16.7 18L14.8 16h-5.6l-1.9 2a2.5 2.5 0 0 1-4.2-1.1l-.8-2.18A5 5 0 0 1 7 8Zm1 3v2H6v2h2v2h2v-2h2v-2h-2v-2H8Zm7.5 2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm3 3a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"/>',
  update:
    '<path d="M12 6a6 6 0 1 1-5.65 8H4.26A8 8 0 1 0 6.1 5.75L4 3.65V10h6.35L7.52 7.17A5.95 5.95 0 0 1 12 6Zm1 2h-2v5l4 2.4 1-1.7-3-1.7V8Z"/>',
  videogame_asset:
    '<path d="M7 8h10a5 5 0 0 1 4.7 6.72l-.8 2.18A2.5 2.5 0 0 1 16.7 18L14.8 16h-5.6l-1.9 2a2.5 2.5 0 0 1-4.2-1.1l-.8-2.18A5 5 0 0 1 7 8Zm1 3v2H6v2h2v2h2v-2h2v-2h-2v-2H8Zm7.5 2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm3 3a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"/>',
  warning:
    '<path d="M12 2 1 21h22L12 2Zm1 15h-2v-2h2v2Zm0-4h-2V8h2v5Z"/>'
};

function extractBody(html: string) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match?.[1] ?? html;
}

function removeOriginalHeader(html: string) {
  return html
    .replace(/<!--\s*TopNavBar\s*-->[\s\S]*?<\/header>/i, "")
    .replace(/<header\b[\s\S]*?<\/header>/i, "")
    .replace(/<!--\s*TopNavBar\s*-->[\s\S]*?<\/nav>/i, "")
    .replace(/<nav\b[\s\S]*?<\/nav>/i, "");
}

function renderIcon(iconName: string) {
  const pathData =
    icons[iconName] ??
    '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 6 4 4-4 4-4-4 4-4Z"/>';

  return `<svg aria-hidden="true" focusable="false" style="width:1em;height:1em;vertical-align:-0.125em;display:inline-block" viewBox="0 0 24 24" fill="currentColor">${pathData}</svg>`;
}

function replaceMaterialIcons(html: string) {
  return html.replace(
    /<span([^>]*class="[^"]*material-symbols-outlined[^"]*"[^>]*)>([^<]+)<\/span>/g,
    (_match, attributes: string, iconName: string) =>
      `<span${attributes} aria-hidden="true">${renderIcon(iconName.trim())}</span>`
  );
}

function renderHeader(fileName: string) {
  const links = pages
    .map((page) => {
      const isActive = page.fileName === fileName;
      const activeClass = isActive
        ? "text-primary after:scale-x-100"
        : "text-on-surface hover:text-primary after:scale-x-0";

      return `<a class="timeaccel-nav-link ${activeClass}" href="${page.href}" aria-current="${isActive ? "page" : "false"}">${page.label}</a>`;
    })
    .join("");

  return `
    <header class="timeaccel-site-header">
      <div class="timeaccel-header-inner">
        <a class="timeaccel-brand" href="/" aria-label="Time Acceleration home">Time Acceleration</a>
        <nav class="timeaccel-primary-nav" aria-label="Primary navigation">
          ${links}
        </nav>
        <a class="timeaccel-contact-button" href="mailto:contact@timeaccel.com">Contact</a>
      </div>
    </header>
  `;
}

function prepareHtml(fileName: string) {
  const filePath = path.join(process.cwd(), "static-site", fileName);
  let html = extractBody(fs.readFileSync(filePath, "utf8"));
  html = removeOriginalHeader(html);

  for (const [pattern, replacement] of linkReplacements) {
    html = html.replace(pattern, replacement);
  }

  return `${renderHeader(fileName)}${replaceMaterialIcons(html)}`;
}

export default function StaticHtmlPage({ fileName }: { fileName: string }) {
  return (
    <div
      className="timeaccel-page-shell"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: prepareHtml(fileName) }}
    />
  );
}
