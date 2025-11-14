import { LinkedInIcon, GitHubIcon, TwitterIcon, InstagramIcon, YouTubeIcon, StackOverflowIcon } from './Icons';

export default function SocialLinks() {
  const socials = [
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/smile9', label: 'LinkedIn' },
    { icon: <GitHubIcon />, href: 'https://github.com/haismile9', label: 'GitHub' },
    { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <StackOverflowIcon />, href: 'https://stackoverflow.com/users/27633417/nguy%e1%bb%85n-h%e1%ba%a3i', label: 'Stack Overflow' },
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
