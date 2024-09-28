import Image from 'next/image';
import './style.css';

interface FounderCardProps {
  name: string;
  role: string;
  github: string;
  linkedin: string;
  imageUrl: string;
}

export default function FounderCard({
  name,
  role,
  github,
  linkedin,
  imageUrl,
}: FounderCardProps) {
  return (
    <div className="founder-card">
      <Image src={`/${imageUrl}`} alt={`${name} profile`} width={260} height={260} />
      <h4>{name}</h4>
      <p>
        {role}
      </p>
      <div className='founder-socials'>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="github.svg" alt='Github.' width={44} height={44} />
        </a>
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="linkedin.svg" alt='Github.' width={44} height={44} />
        </a>
      </div>
    </div>
  );
}
