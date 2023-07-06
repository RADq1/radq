import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

import { FormWrapper,
  Label,
  Submit,
  Title,
  Input,
  TextArea,
  AfterSubmitIcon,
  ErrorIcon,
  ErrorText,
  ErrorBox,
  InfoBox,
  Info,
  TryAgain} from './ContactForm.styles';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleTryAgain = () => {
    setIsSubmitted(false);
    setIsClicked(false);
    setIsError(false);
  }

  const onSubmit = (data) => {
    const { name, email, phone, message } = data;

    setIsClicked(true);
    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone,
      message: message,
      to_email: 'radoslaw.gackowski.contact@gmail.com',
    };

    if(templateParams.from_name.length === 0 ||
      templateParams.from_email.length === 0 ||
      templateParams.message.length === 0) {
      setIsError(true);
      setIsSubmitted(true);
      return;
    }

    emailjs.send('service_cm22z4p', 'template_qbj1r5f', templateParams, 'H3TCqvOVxZQkAMrW-')
      .then((res) => {
        setIsSubmitted(true);
        // console.log('E-mail sent!', res.status, res.text);
      }, (error) => {
        setIsSubmitted(true);
        setIsError(true);
        // console.error('Error sending e-mail:', error);
      });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Title>ENTER YOUR NAME AND SURNAME*</Title>
        <Input isError={errors?.name} type="text" {...register('name', { required: true, maxLength: 50 })} />
        {/* {errors?.name && <div>Pole wymagane</div>} */}
      </Label>
      <Label>
        <Title>ENTER YOUR EMAIL*</Title>
        <Input
          isError={errors?.email}
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
        />
        {/* {errors?.email?.type === 'required' && <span>Pole wymagane</span>}
        {errors?.email?.type === 'pattern' && <span>Niepoprawny format emaila</span>} */}
      </Label>
      <Label>
        <Title>PHONE NUMBER (optional)</Title>
        <Input
          isError={errors?.phone}
          type="text"

          {...register('phone', {
            maxLength: 9
          })}
        />
        {/* {errors?.phone?.type === 'maxLength' && (
          <span>Maksymalna ilość znaków to 15</span>
        )} */}
      </Label>
      <Label>
        <Title>MESSAGE*</Title>
        <TextArea
          isError={errors?.message}
          {...register('message', {
            required: true,
            minLength: 6,
            maxLength: 500
          })}
        />
        {/* {errors?.message && <span>Pole wymagane</span>} */}
      </Label>
      {!isSubmitted ? (
        <Submit
          type="submit"
          onClick={handleSubmit}
          isSubmitted={isSubmitted}
          isClicked={isClicked}
        >
          SEND EMAIL
        </Submit>
      ) : (
        <>
        {isError ?
        <ErrorBox>
          <ErrorIcon isSubmitted={isSubmitted}/>
          <ErrorText isSubmitted={isSubmitted}>Email was not sent</ErrorText>
          <TryAgain isSubmitted={isSubmitted} onClick={handleTryAgain}>Try Again</TryAgain>
        </ErrorBox>
          : <InfoBox>
              <AfterSubmitIcon isSubmitted={isSubmitted}/>
              <Info isSubmitted={isSubmitted}>Email was successfully sended</Info>
            </InfoBox>}
        </>
      )}
    </FormWrapper>
  );
};

export default ContactForm;