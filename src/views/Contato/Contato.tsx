import React, { useRef } from "react";
import { ContactContainer, ContactSubtitle, ContactTextGroup, ContactTitle, FormContainer, StyledButton, StyledForm, StyledInput, StyledLabel, StyledTextarea } from "./ContatoStyle"
import emailjs from '@emailjs/browser';

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
                console.log('message sent');
                console.log(form.current);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <ContactTextGroup>
                <ContactTitle>VAMOS CONVERSAR?</ContactTitle>
                <ContactSubtitle>
                    Entre em contato com nosso escritório de advocacia 
                    e descubra como nossos advocados podem te ajudar!
                </ContactSubtitle>
            </ContactTextGroup>
            <ContactContainer>
                <FormContainer>
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