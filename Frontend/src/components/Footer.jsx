const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/philip.nnake",
    hoverClass: "hover:text-blue-600",
    icon: (
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.54V9.86c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.57v1.88h2.8l-.45 2.9h-2.35V22c4.78-.73 8.44-4.9 8.44-9.93Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/philipnnake?igsh=YmRlYnc0dWJ6eDNx",
    hoverClass: "hover:text-pink-500",
    icon: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
        <path d="M16.5 11.37a4.5 4.5 0 1 1-8.99 1.26 4.5 4.5 0 0 1 8.99-1.26Z" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/philip-ekalale",
    hoverClass: "hover:text-blue-400",
    icon: (
      <>
        <path d="M6.94 8.5H3.56V20h3.38V8.5Z" />
        <path d="M5.25 7a1.97 1.97 0 1 0 0-3.94A1.97 1.97 0 0 0 5.25 7Z" />
        <path d="M20 20h-3.37v-5.6c0-1.34-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.95V20H9.24V8.5h3.24v1.57h.04c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.06 2.26 4.06 5.2V20Z" />
      </>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/EKALALE",
    hoverClass: "hover:text-white",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.04.36.32.68.93.68 1.88 0 1.36-.01 2.46-.01 2.79 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    ),
  },
];

function SocialIcon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 border-t border-gray-700">
      {/* Social Icons */}
      <div className="flex justify-start gap-6 mb-4 px-6">
        {socialLinks.map(({ name, href, hoverClass, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`text-gray-400 transition ${hoverClass}`}
          >
            <SocialIcon>{icon}</SocialIcon>
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-xl text-center">
        © {new Date().getFullYear()} Philip Ekalale. All rights reserved.
      </p>
    </footer>
  );
}
