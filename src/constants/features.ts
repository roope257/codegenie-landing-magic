
import { Check, Code, Cpu, PuzzleIcon, ShieldCheck, Zap } from "lucide-react";
import { Feature } from "@/types";

export const features: Feature[] = [
  {
    icon: <Zap size={24} className="text-white" />,
    title: "AI-Powered Code Optimization",
    description: "Our advanced AI analyzes your code to suggest optimizations that improve performance and readability.",
  },
  {
    icon: <ShieldCheck size={24} className="text-white" />,
    title: "Error Detection",
    description: "Catch bugs before they happen with real-time error detection and intelligent fix suggestions.",
  },
  {
    icon: <PuzzleIcon size={24} className="text-white" />,
    title: "Smart Integrations",
    description: "Seamlessly connect with your favorite IDEs, code repositories, and collaboration tools.",
  },
  {
    icon: <Code size={24} className="text-white" />,
    title: "Language Support",
    description: "Works with all popular programming languages including JavaScript, Python, Java, and many more.",
  },
  {
    icon: <Check size={24} className="text-white" />,
    title: "Code Completion",
    description: "Context-aware code suggestions that understand your project's structure and coding style.",
  },
  {
    icon: <Cpu size={24} className="text-white" />,
    title: "Performance Analysis",
    description: "Get insights into potential performance bottlenecks and optimization opportunities.",
  },
];
