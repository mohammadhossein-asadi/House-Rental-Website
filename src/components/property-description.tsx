const fallbackDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
repellat totam enim ut libero cumque eos, molestiae cupiditate, nemo
iste dolorem doloribus quas facere perspiciatis aut error culpa
necessitatibus explicabo amet. Voluptatibus soluta totam corrupti vitae
officia officiis ducimus consectetur, placeat mollitia sed ab culpa
possimus nulla ea inventore nesciunt.`;

interface PropertyDescriptionProps {
  description?: string;
}

export default function PropertyDescription({
  description,
}: PropertyDescriptionProps) {
  return (
    <p
      className="text-text-muted leading-relaxed"
      style={{ maxWidth: 700, marginBottom: 50 }}
    >
      {description || fallbackDescription}
    </p>
  );
}
