interface FounderCardProps {
  name: string;
  rm: string;
  github: string;
  imageUrl: string;
}

export default function FounderCard({
  name,
  rm,
  github,
  imageUrl,
}: FounderCardProps) {
  return (
    <div className="founder-card">
      <img src={imageUrl} alt={`${name} profile`} />
      <h4>{name}</h4>
      <p>
        <strong>RM:</strong> {rm}
      </p>
      <p>
        <strong>GitHub: </strong>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {github}
        </a>
      </p>
    </div>
  );
}
