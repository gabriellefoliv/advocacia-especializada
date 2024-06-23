import Whatsapp from "../img/whatsapp.png";

function WppButton() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[700px]">
        <a
          className=""
          href="https://wa.me/message/V72SURNAJ3EKD1"
          target="_blank"
        >
          <div className="bg-lime-600 transition duration-500 hover:transition hover:duration-500 hover:opacity-70 w-full md:rounded-2xl flex px-5 py-3 justify-center items-center">
            <img className="w-5 h-5 object-cover mr-2" src={Whatsapp} />
            <p className="text-white font-bold">Tenha um atendimento personalizado</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default WppButton;
