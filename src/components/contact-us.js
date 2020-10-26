import React from 'react';
import tw from 'twin.macro';

import contactDetails from './contact-details.json';
import { MailIcon, WhatsAppIcon } from '../utils/icons';

const Button = tw.button`
  ml-6
  bg-white py-1 px-3 w-32 h-10
  border border-black border-3 rounded-lg
  hover:(border-transparent text-white)
  text-black font-semibold
`;
const Container = tw.div`my-8 flex content-center items-start mx-auto`;

const waLink = contactDetails['whatsappLinkPrefix'] + contactDetails['number'];
const mailLInk = contactDetails['mailPrefix'] + contactDetails['email'];

export const Mail = () => (
  <Container>
    <span tw="content-center pt-2">
      <MailIcon/>
    </span>
    <a href={mailLInk} target="_blank" rel="noopener noreferrer">
      <Button tw="text-lg hover:bg-purple-800">
        Email Us
      </Button>
    </a>
  </Container>
);

export const WhatsApp = () => (
  <Container>
    <span tw="content-center pt-2">
      <WhatsAppIcon/>
    </span>
    <a href={waLink} target="_blank" rel="noopener noreferrer">
      <Button tw="text-base hover:bg-green-800">
        Message Us
      </Button>
    </a>
  </Container>
);
