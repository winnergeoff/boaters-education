import { Text, Title } from '@mantine/core';

const AboutUs = () => {
  return (
    <>
      <Title ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          About Us
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        About Us Page
      </Text>
    </>
  );
}

export default AboutUs;
