import { LinkedInIcon, GitHubIcon, TwitterIcon, InstagramIcon, YouTubeIcon, StackOverflowIcon } from './Icons';

export default function SocialLinks() {
  const socials = [
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/smile9', label: 'LinkedIn' },
    { icon: <GitHubIcon />, href: 'https://github.com', label: 'GitHub' },
    { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <YouTubeIcon />, href: 'https://youtube.com', label: 'YouTube' },
    { icon: <StackOverflowIcon />, href: 'https://stackoverflow.com', label: 'Stack Overflow' },
  ];

  return (
    <div className="flex gap-2">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors"
          aria-label={social.label}
        >
          <div className="text-brand-900 w-6 h-6">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
