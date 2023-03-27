import ButtonLink from "./components/ButtonLink";

function App() {
  return (
    <div>
      <div className="max-w-2xl mx-auto mt-20">
        <h1 className="text-red-dark">Tailwind CSS</h1>
        <p>
          A utility-first CSS framework packed with classes that can be composed
          to build any design, directly in your markup.
        </p>
        <ButtonLink
          className="mt-2"
          size="md"
          color="red"
          href="http://www.tailwindcss.com"
        >
          Get Started
        </ButtonLink>
      </div>
    </div>
  );
}

export default App;
