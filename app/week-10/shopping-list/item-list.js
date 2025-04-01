export default function ItemList({ items, onDeleteItem }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="flex justify-between p-2 border-b">
          <span>
            <strong>{item.name}</strong>
            <br />
            Buy {item.quantity} in {item.category.toLowerCase()}
          </span>
          <button className="text-red-500" onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
