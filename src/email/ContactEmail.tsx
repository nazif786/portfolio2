import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
const ContactEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview> New Message from Portfolio site</Preview>
      <Tailwind>
        {" "}
        <Body className="bg-slate-600 text-blck">
          <Container>
            <Section className="bg-white border-background my-10 px-10 py-10">
              <Heading className="leading-tight">
                You received this message from Portfolio site
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>the senders email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
      <div>ContactEmail</div>
    </Html>
  );
};

export default ContactEmail;
