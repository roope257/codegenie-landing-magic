
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { socialLinksData } from "@/constants/socialLinks";

const iconMap = {
  Twitter,
  Github,
  Linkedin,
  Instagram,
};

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinksData.map((link) => {
        const IconComponent = iconMap[link.iconName as keyof typeof iconMap];
        return (
          <a 
            key={link.label}
            href={link.href} 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={link.label}
          >
            <IconComponent size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
