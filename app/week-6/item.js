export default function Item({ name, quantity, category }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
        <p className="font-bold text-lg">{name}</p>
        <p className="text-gray-400">Buy {quantity} in {category}</p>
      </div>
    );
  }
  