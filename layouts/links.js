import Container from '@/components/Container';

export default function Links({ children }) {
  return (
    <Container
      title="Links – Rohit Jacob Mathew"
      description="Random compilation of newsletters, podcasts, articles and videos I have found interesting."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Links
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Random compilation of <a href="links#newsletters" className="underline text-blue-600 hover:text-blue-800">newsletters</a>
          , <a href="links#podcasts" className="underline text-blue-600 hover:text-blue-800">podcasts</a>
          , <a href="links#articles" className="underline text-blue-600 hover:text-blue-800">articles</a>
          , and <a href="links#videos" className="underline text-blue-600 hover:text-blue-800">videos</a> I have found interesting.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
