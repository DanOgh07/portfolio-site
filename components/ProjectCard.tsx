type Props = {
  title: string;
  tools: string;
  description: string;
};

export default function ProjectCard({ title, tools, description }: Props) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{tools}</p>
      <p>{description}</p>
    </div>
  );
}
