import { Text, Title } from '@mantine/core';

const ContactUs = () => {
  return (
    <>
      <Title ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Contact Us
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Contact Us Page
      </Text>
    </>
  );
}

export default ContactUs;
