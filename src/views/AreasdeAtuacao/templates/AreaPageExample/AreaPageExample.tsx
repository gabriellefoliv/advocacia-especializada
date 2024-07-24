import { Header } from "../../../../components/Header";
import WppButton from "../../../../components/WppButton";

interface ExampleProps {
  ETitle: string;
  EImg: string;
  EText: Array<string>;
}

function AreaPageExample({ ETitle, EImg, EText }: ExampleProps) {
  return (
    <>
      <Header title={ETitle} />
      <div className="max-w-6xl mx-auto px-0 md:px-0 overflow-hidden mt-32 md:mt-10 p-8 border-none flex flex-col md:flex-row shadow-xl">
        <img
          className="w-96 rounded-sm bg-cover py-2 px-5 flex justify-center"
          src={EImg}
        />
        <div className="flex justify-center items-center">
          <p className="px-5 text-justify text-gray-500 whitespace-pre-line">
            {EText}
          </p>
        </div>
      </div>
      <WppButton />
    </>
  );
}

export default AreaPageExample;
