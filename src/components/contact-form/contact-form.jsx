import { Formik, Form, Field, ErrorMessage } from "formik";
import { useForm } from "@formspree/react";
import * as Yup from "yup";
import tw, { styled } from "twin.macro";

const ContactForm = () => {
  const [
    { submitting: isSubmitting, succeeded: isSucceeded },
    handleSubmit,
    resetFormspree,
  ] = useForm("mlezleng", {
    data: {
      subject: "Сообщение с формы обратной связи сайта-резюме",
    },
  });

  return (
    <Formik
      initialValues={{ name: ``, email: ``, message: `` }}
      validationSchema={Yup.object({
        name: Yup.string().required(`Поле обязательно для заполнения`),
        email: Yup.string()
          .email(`Некорректно указан адрес электронной почты`)
          .required(`Поле обязательно для заполнения`),
        message: Yup.string().required(`Поле обязательно для заполнения`),
      })}
      onSubmit={(values, { resetForm }) =>
        handleSubmit(values).then(() => {
          setTimeout(() => {
            resetFormspree();
            resetForm();
          }, 3000);
        })
      }
    >
      {({ errors, touched }) => (
        <StyledForm>
          <InputWrapper>
            <TextField
              name="name"
              id="name"
              className={
                touched.name ? (errors.name ? `is-invalid` : `is-valid`) : null
              }
              placeholder={touched.name && errors.name ? errors.name : ` `}
              disabled={isSubmitting}
            />
            <Label htmlFor="name">
              Ваше имя <span tw="text-red-300">*</span>
            </Label>
          </InputWrapper>

          <InputWrapper>
            <TextField
              name="email"
              id="email"
              className={
                touched.email
                  ? errors.email
                    ? `is-invalid`
                    : `is-valid`
                  : null
              }
              placeholder={touched.email && errors.email ? errors.email : ` `}
              disabled={isSubmitting}
            />
            <Label htmlFor="email">
              Email <span tw="text-red-300">*</span>
            </Label>
          </InputWrapper>

          <InputWrapper>
            <TextArea
              name="message"
              id="message"
              component="textarea"
              className={
                touched.message
                  ? errors.message
                    ? `is-invalid`
                    : `is-valid`
                  : null
              }
              placeholder={
                touched.message && errors.message ? errors.message : ` `
              }
              disabled={isSubmitting}
            />
            <Label tw="top-8" htmlFor="message">
              Текст сообщения <span tw="text-red-300">*</span>
            </Label>
          </InputWrapper>
          {isSucceeded ? (
            <SubmitButton type="submit" tw="bg-lime-700" disabled>
              <span tw="align-middle">Отправлено</span>{" "}
              <span tw="align-middle text-xl">✔️</span>
            </SubmitButton>
          ) : (
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? `Отправка...` : `Отправить`}
            </SubmitButton>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

const StyledForm = styled(Form)`
  ${tw`
    sm:col-span-6
    col-span-12
    flex
    flex-col
    w-full
  `}
`;

const Label = styled.label`
  ${tw`
    absolute
    top-1/2
    left-4
    text-lg
    -translate-y-1/2
    opacity-80
  `}

  & ~ label {
    ${tw`
      hidden
    `}
  }
`;

const TextField = styled(Field)`
  ${tw`
    w-full
    h-16
    pl-4
    pt-4
    text-lg
    rounded
    resize-y
    border-transparent
    outline-none
    align-bottom

    hocus:shadow-lg
    disabled:opacity-50
  `}

  &:not(:placeholder-shown) + label,
  &.is-invalid + label {
    ${tw`
      top-1
      left-4
      text-base
      translate-y-0
      transition-all
    `}
  }

  &.is-invalid {
    &::placeholder {
      ${tw`
      text-red-300
        text-sm
      `}
    }

    ${tw`
      bg-red-50
    `}
  }

  &:focus + label {
    ${tw`
      top-1
      left-4
      text-base
      translate-y-0
      transition-all
    `}
  }

  &:disabled + label {
    ${tw`
      opacity-50
    `}
  }
`;

const TextArea = tw(TextField)`
  pt-8
  h-40
`;

const InputWrapper = tw.div`
  relative
  mb-4
`;

const SubmitButton = tw.button`
  h-16
  w-full
  rounded-lg
  bg-[#647c72]
  outline-none
  font-bold
  text-sm
  text-white
  uppercase
  tracking-widest
  
  hocus:opacity-80
  disabled:opacity-50
`;

export default ContactForm;
