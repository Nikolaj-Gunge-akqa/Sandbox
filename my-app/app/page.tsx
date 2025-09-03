export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-4xl font-bold underline rainbow">Hello World</h1>
      <p className="text-2xl">This is a paragraph</p>
      <button className="bg-blue-500 text-white p-2 rounded-md">Click me</button>
      <input type="text" className="border-2 border-gray-300 rounded-md p-2" />
      <textarea className="border-2 border-gray-300 rounded-md p-2" />
      <select className="border-2 border-gray-300 rounded-md p-2">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
