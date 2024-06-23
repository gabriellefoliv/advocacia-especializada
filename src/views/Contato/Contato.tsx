import { useRef } from "react";
import emailjs from '@emailjs/browser';
import ThamiOab from '../../img/oab.jpeg'
import { Header } from "../../components/Header";

function Contato() {

    const form = useRef<HTMLFormElement>(null!);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        emailjs.sendForm('service_c6sj2kt', 'template_og52wc6', form.current, 'yeusvRmqeLwWt2Z2T')
            .then((result) => {
                console.log(result.text);
                alert("Mensagem enviada com sucesso!");
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Header
                title="Vamos conversar?"
                subtitle="Entre em contato com nosso escritório de advocacia 
                    e descubra como nossos advogados podem te ajudar!"
            />

            {/* // contact container */}
            <div className="mt-32 md:mt-10 w-full flex flex-col-reverse justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
                <img className="w-96 flex mx-40 justify-center items-center" src={ThamiOab} />
                <div className="w-96 md:w-40 flex-1 p-4 md:p-8 md:m-4 shadow-xl mb-8 md:mr-20">
                    <h1 className="font-bold text-xl text-center">Preencha o Formulário</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Nome</label>
                            <input className="w-full block flex-1 mb-4 outline-none border-2 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" name="user_name" required />
                            <label className="block text-sm font-medium leading-6 text-gray-900">Celular</label>
                            <input className="w-full block flex-1 mb-4 outline-none border-2 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" name="user_celular" required />
                            <label className="block text-sm font-medium leading-6 text-gray-900">Mensagem</label>
                            <textarea className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="message" required />
                            <button className="w-full bg-[#611C18] mt-4 p-3 text-white font-bold rounded-md" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contato