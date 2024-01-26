import { useRef } from "react";
import { ContactContainer, ContactImg, ContactSubtitle, ContactTextGroup, ContactTitle, FormContainer, StyledButton, StyledForm, StyledInput, StyledLabel, StyledTextarea, StyledTitle } from "./ContatoStyle"
import emailjs from '@emailjs/browser';
import ThamiOab from '../../img/oab.jpeg'

// interface IProps {
//     form: React.MutableRefObject<HTMLInputElement | null>
// }

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
            <ContactTextGroup>
                <ContactTitle>Vamos conversar?</ContactTitle>
                <ContactSubtitle>
                    Entre em contato com nosso escritório de advocacia 
                    e descubra como nossos advocados podem te ajudar!
                </ContactSubtitle>
            </ContactTextGroup>
            <ContactContainer>
                <ContactImg src={ThamiOab}/>
                <FormContainer>
                    <StyledTitle>Preencha o Formulário</StyledTitle>
                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <StyledLabel>Nome</StyledLabel>
                        <StyledInput type="text" name="user_name" required/>
                        <StyledLabel>Celular</StyledLabel>
                        <StyledInput type="text" name="user_celular" required/>
                        <StyledLabel>Mensagem</StyledLabel>
                        <StyledTextarea name="message" required/>
                        <StyledButton className="sending" type="submit">Enviar</StyledButton>
                    </StyledForm>
                </FormContainer>
            </ContactContainer>
        </>
    )
}

export default Contato
