import { useMediaQuery } from './hooks';
import DocsGPT3 from './assets/swisscom-vector.svg';

export default function Hero({ className = '' }: { className?: string }) {
  // const isMobile = window.innerWidth <= 768;
  const { isMobile } = useMediaQuery();
  const randomMemes = [
    'https://media.makeameme.org/created/meanwhile-at-swisscom.jpg',
    'https://media.makeameme.org/created/swisscom-das-beste.jpg',
    'https://media.makeameme.org/created/mach-witz-ber-cwnaxq.jpg',
    'https://pbs.twimg.com/media/FexwUQnXoAEG7kO?format=png&name=900x900',
    'https://static.demilked.com/wp-content/uploads/2022/06/funny-history-memes-explained-1.jpeg',
    'https://i.ibb.co/T2fS95F/2023-12-03-07-36.png',
    'https://i.ibb.co/pjSYtCf/2023-12-03-08-13.png',
  ];
  return (
    <div className={`mt-14 ${isMobile ? 'mb-2' : 'mb-12'}flex flex-col `}>
      <div className=" mb-2 flex items-center justify-center sm:mb-10">
        <img className="mb-2 mr-2 h-14" src={DocsGPT3} alt="LauzCom" />
        <p className="mr-2 text-4xl font-semibold"> Lauzcom Assistant</p>
        <img
          className="mb-2 ml-1 h-14"
          src="../public/lauzhack-logo.ico"
          alt="LauzHack"
        />
      </div>
      {isMobile ? (
        <p className="mb-3 text-center leading-6 text-black-1000">
          Welcome to Lauzcom Assistant, your personal assistant for any
          information about Swisscom! Start by entering your question in the
          input field below and Lauzcom Assistant will provide you with the most
          relevant answers.
        </p>
      ) : (
        <>
          <p className="mb-3 text-center leading-6 text-black-1000">
            Welcome to Lauzcom Assistant, your personal assistant for any
            information about Swisscom!
          </p>
          <p className="mb-3 text-center leading-6 text-black-1000">
            Start by entering your question in the input field below and Lauzcom
            Assistant will provide you with the most relevant answers.
          </p>
        </>
      )}
      <div className="mt-10 flex items-center justify-center">
        <img
          src={randomMemes[Math.floor(Math.random() * randomMemes.length)]}
          className="max-h-[575px]"
        />
      </div>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Random meme :)
      </p>
      <div
        className={`sections ${
          isMobile ? '' : 'mt-1'
        } flex flex-wrap items-center justify-center gap-2 sm:gap-1 md:gap-0`}
      ></div>
    </div>
  );
}
