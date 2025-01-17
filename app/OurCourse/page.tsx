import { Text, Title } from '@mantine/core';

const OurCourse = () => {
  return (
    <>
      <Title ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Our Course Page
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Our Course Page
      </Text>
    </>
  );
}

export default OurCourse;
