
import { socialLinks } from "@/constants/socialLinks";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a 
          key={link.label}
          href={link.href} 
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
