// app/components/QuestionCard.tsx
'use client';  // Enable client-side rendering

import { Card, RadioGroup, Radio, Text } from '@mantine/core';

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedOption: string | null;
  setSelectedOption: (value: string | null) => void;
}

export default function QuestionCard({
  question,
  options,
  selectedOption,
  setSelectedOption
}: QuestionCardProps) {
  return (
    <Card padding="lg">
      <Text size="xl" style={{ marginBottom: '20px' }}>
        {question}
      </Text>
      <RadioGroup
        value={selectedOption}
        onChange={setSelectedOption}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {options.map((option, index) => (
          <Radio key={index} value={option} label={option} />
        ))}
      </RadioGroup>
    </Card>
  );
}
