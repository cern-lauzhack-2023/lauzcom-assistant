//TODO - Add hyperlinks to text
//TODO - Styling
import DocsGPT3 from './assets/swisscom-vector.svg';

export default function About() {
  return (
    <div className="mx-5 grid min-h-screen md:mx-36">
      <article className="place-items-left mx-auto my-auto flex w-full max-w-6xl flex-col gap-4 rounded-3xl bg-gray-100 p-6 text-jet lg:p-6 xl:p-10">
        <div>
          <p className="mt-4 ml-2">
          
          We've come up with a genius retrieval system that can extract Swisscom's juiciest 
          secrets faster than you can say "chocolate fondue" at a Swiss ski lodge.
           This innovative solution empowers our support team to respond 
          to customer queries swiftly, elevating the overall user experience. In implementing this project,
          we utilized cutting-edge technologies, including langchain, tiktoken, nltk, 
          and the ever-so-mysterious huggingface_sentence-transformers/all-mpnet-base-v2.

          So, while we're not guaranteeing a lifetime supply of Swiss chocolate, our system is here to make 
          customer support as sweet as a box of assorted pralines. Just don't ask us to yodel, that's a whole 
          different kind of Swiss expertise! 🍫🏔️🇨🇭
          </p>
        </div>
      </article>
    </div>
  );
}
