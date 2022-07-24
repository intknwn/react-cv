import { H2, Section } from "../../styles/components.js";
import tw, { styled } from "twin.macro";

import ContactForm from "../contact-form/contact-form.jsx";

const ContactMe = () => {
  return (
    <ContactsSection id="contacts">
      <H2>Контакты</H2>
      <ContactsWrapper>
        <TextWrapper>
          <Text>
            Если Вы считаете, что я могу быть полезен вашей компании,
            пожалуйста, свяжитесь со мной удобным для Вас способом.
          </Text>
          <ContactsList>
            <ContactItem>
              <SocialLink href="mailto:intknwn@gmail.com">
                <span tw="sr-only">Мой адрес электронной почты</span>
                <Icon role="img" width="40" height="40">
                  <use href="img/sprite_auto.svg#icon-mail"></use>
                </Icon>
              </SocialLink>
            </ContactItem>
            <ContactItem>
              <SocialLink href="https://telegram.me/nemitya">
                <span tw="sr-only">Мой аккаунт в Telegram</span>
                <Icon role="img" width="40" height="40">
                  <use href="img/sprite_auto.svg#icon-telegram"></use>
                </Icon>
              </SocialLink>
            </ContactItem>
            <ContactItem>
              <SocialLink href="https://wa.me/79811082256">
                <span tw="sr-only">Мой аккаунт в WhatsApp</span>
                <Icon role="img" width="40" height="40">
                  <use href="img/sprite_auto.svg#icon-whatsapp"></use>
                </Icon>
              </SocialLink>
            </ContactItem>
          </ContactsList>
        </TextWrapper>
        <ContactForm />
      </ContactsWrapper>
    </ContactsSection>
  );
};

const ContactsSection = styled(Section)`
  ${tw`
    pb-12
  `}
`;

const TextWrapper = tw.div`
  sm:col-span-6
  col-span-12
  sm:pr-20
`;

const Text = tw.p`
  text-lg
  mb-5
`;

const ContactsWrapper = tw.div`
  grid
  grid-cols-12
  grid-flow-col
  grid-rows-[auto auto]
  sm:grid-rows-none
`;

const ContactsList = tw.ul`
  flex
  sm:justify-start
  justify-center
  mb-8
`;

const ContactItem = tw.li`
  mr-4
  last:mr-0
`;

const SocialLink = styled.a`
  ${tw`
    outline-none
  `}

  &:hover svg,
  &:focus svg {
    ${tw`
      transition
      duration-300
      scale-110
    `}
  }
`;

const Icon = tw.svg`
  fill-[#647c72]
`;

export default ContactMe;
