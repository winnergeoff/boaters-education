import { Text, Title } from '@mantine/core';

const Account = () => {
  return (
    <>
      <Title ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Account
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Account Page
      </Text>
    </>
  );
}

export default Account;
