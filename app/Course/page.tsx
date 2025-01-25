// app/quiz/[page]/page.tsx
'use client';  // Enable client-side rendering for React hooks

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button, Container, Title, Text } from '@mantine/core';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

// Define the shape of the question data
interface Question {
  question: string;
  options: string[];
  answer: string;
}

// The list of quiz questions
const questions: Question[] = [
  {
    question: "What's the capital of France?",
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris'
  },
  {
    question: "What's the largest planet in our solar system?",
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter'
  },
  {
    question: "Which programming language is used in React?",
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    answer: 'JavaScript'
  }
];

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { page } = searchParams.get('page');
  const currentPage = parseInt(page as string);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNextPage = () => {
    if (currentPage < questions.length) {
      router.push(`/quiz/${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(`/quiz/${currentPage - 1}`);
    }
  };

  const currentQuestion = questions[currentPage - 1];

  return (
    <Container style={{ maxWidth: '600px', marginTop: '50px' }}>
      <Title order={2}>Question {currentPage}</Title>
      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div style={{ marginTop: '20px' }}>
        <Button variant="outline" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={handleNextPage} style={{ marginLeft: '10px' }} disabled={!selectedOption}>
          Next
        </Button>
      </div>
    </Container>
  );
}
