import Badge from './Badge';
import Button from './Button';
import { CodeIcon, CheckIcon } from './Icons';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  codeUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  codeUrl,
  demoUrl
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded overflow-hidden hover:shadow-lg transition-shadow border border-neutral-100">
      <div className="w-full h-[299px] bg-gray-100 relative">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-brand-900 mb-2 leading-tight">{title}</h3>
        <p className="text-neutral-900 mb-4 leading-relaxed text-base">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
        <div className="flex gap-3">
          {codeUrl && (
            <Button href={codeUrl} icon={<CodeIcon />}>
              Code
            </Button>
          )}
          {demoUrl && (
            <Button href={demoUrl} icon={<CheckIcon />}>
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
