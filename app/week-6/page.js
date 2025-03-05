import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-black min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
