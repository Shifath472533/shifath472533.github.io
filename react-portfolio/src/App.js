import './App.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello Tailwind CSS!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a simple React component styled with Tailwind CSS.
      </p>
      <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700">
        Test Button
      </button>
    </div>
  );
}

export default App;
