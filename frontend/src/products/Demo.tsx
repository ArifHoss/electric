const Demo = () => {
    const funFacts = [
        "💡 Bananas once ran for president in 1872. They lost by a *slim peel*.",
        "🦄 Unicorns were removed from history books for winning too many spelling bees.",
        "📡 Wi-Fi signals are stronger when you compliment your router.",
        "🛸 Aliens once visited Earth but left because we only offered decaf.",
        "🎩 Top hats were invented by giraffes trying to go incognito.",
        "🧀 Scientists agree: the moon is only 3% cheese now due to inflation.",
        "🐧 Penguins are just cold-weather ninjas in tuxedos.",
        "🍕 Pizza was originally invented as a plate you could eat out of pure laziness.",
        "🐌 Snails are just sloths with portable homes and better data plans.",
        "🦖 Dinosaurs went extinct after losing a universal game of hide and seek."
    ];

    return (
        <section className="p-6 space-y-4">
            <h1 className="text-2xl font-bold mb-4">😂 Totally True* Fun Facts</h1>
            <ul className="list-disc pl-6 space-y-2">
                {funFacts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">*Absolutely not verified. Use at your own giggle risk.</p>
        </section>
    );
};

export default Demo;