// app/page.tsx
'use client';  // Enable client-side rendering for React hooks

import { Button, Container, Title, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function OurCourse() {
  const router = useRouter();

  const startCourse = () => {
    router.push('/quiz/1'); // Navigate to the first question
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Add more text and cards describing the course costs and what it entails */}
      <Title order={1}>Welcome to the Course!</Title>
      <Text size="lg" style={{ marginBottom: '20px' }}>
        Begin course here!
      </Text>
      <Button onClick={startCourse} size="lg">
        Start Course
      </Button>
    </Container>
  );
}
