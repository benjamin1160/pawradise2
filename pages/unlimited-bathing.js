import Head from 'next/head';

export default function UnlimitedBathing() {
  return (
    <>
      <Head>
        <title>Unlimited Bathing Membership - Pawradise Estero</title>
        <meta name="description" content="Unlimited dog baths, nail trims, ear cleaning, and more for just $49/month at Pawradise Estero." />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-4">Unlimited Bathing Membership</h1>
        <p className="text-center text-lg mb-8 text-gray-600">Keep your pup fresh, clean, and happy — every week, all month long.</p>

        <img
          src="/happy-dog.jpg"
          alt="Clean happy dog"
          className="w-full rounded-xl shadow-md mb-8"
        />

        <section className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Unlimited Baths (Tuesday–Saturday, 8 AM – 2:30 PM)</li>
            <li>Nail Trimming</li>
            <li>Ear Cleaning</li>
            <li>Teeth Brushing</li>
            <li>Towel Drying</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-8 border">
          <h2 className="text-2xl font-semibold mb-2">Price</h2>
          <p className="text-xl font-bold text-green-600">$49/month</p>
          <p className="text-sm text-gray-500">No contracts. Cancel anytime.</p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-2">Optional Add‑Ons</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Blow Drying:</strong> +$10–$25 depending on coat</li>
            <li><strong>Tidy Trim:</strong> Eye, feet & sanitary trim available</li>
          </ul>
        </section>

        <div className="text-center mb-12">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Join Now
          </a>
        </div>

        <section className="border-t pt-8">
          <h2 className="text-lg font-semibold mb-2">Frequently Asked Questions</h2>
          <p className="mb-2"><strong>When can I bring my dog in?</strong> Any day Tuesday–Saturday between 8 AM and 2:30 PM.</p>
          <p className="mb-2"><strong>Do I need an appointment?</strong> No — we always keep availability for members.</p>
          <p className="mb-2"><strong>Can I cancel anytime?</strong> Yes! You're not locked in.</p>
        </section>
      </main>
    </>
  );
}

