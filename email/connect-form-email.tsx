import {
  Html,
  Body,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ConnectFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ConnectFormEmail({
  message,
  senderEmail,
}: ConnectFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="my-10 px-10 py-4 bg-white borderBlack rounded-lg shadow-md">
              <Text className="text-2xl font-bold leading-tight">
                From Portfolio Connect
              </Text>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
