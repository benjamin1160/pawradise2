export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Unlimited Dog Baths for Just $49/Month? Yup. Really.</h1>
      
      <p className="text-lg text-gray-600 mb-6">
        Finally, a way to keep your pup fresh without draining your wallet — or your bathtub.
      </p>

      <a
        href="/unlimited-bathing"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition"
      >
        Click Here
      </a>
    </main>
  );
}
