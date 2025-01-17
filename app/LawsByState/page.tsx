import { Text, Title } from '@mantine/core';

const LawsByState = () => {
  return (
    <>
      <Title ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Laws by State
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Laws By State Page
      </Text>
    </>
  );
}

export default LawsByState;
