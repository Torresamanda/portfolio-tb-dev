export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Tecnologias">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
