'use client'
import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import HeroImage from '../../public/images/boat_photo_one.png';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Get your Boater's Safety Card now!
          </Title>
          <Text c="dimmed" mt="md">
            Take our easy to understand course to take and pass the boater safety test and get your card today!
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Easy to use</b> – our easy to understand course test makes taking the test a breeze!
            </List.Item>
            <List.Item>
              <b>All online</b> – no need for an in person course, take our easy to use course from the comfort of your home!
            </List.Item>
            <List.Item>
              <b>At your own pace</b> – take the course at your own pace, save your course progress and come back later!
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Enroll Now
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              FAQ
            </Button>
          </Group>
        </div>
        <Image src={HeroImage.src} className={classes.image} />
      </div>
    </Container>
  );
}