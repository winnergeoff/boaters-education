import { Text, Title } from '@mantine/core';
import { GetInTouchSimple } from '../../components/Contact/Contact';

const ContactUs = () => {
  return (
    <>
      <Title ta="center" mt={20}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Contact Us
        </Text>
      </Title>
      <GetInTouchSimple />
    </>
  );
}

export default ContactUs;
