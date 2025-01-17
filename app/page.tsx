import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { LeadGrid } from '../components/Grid/LeadGrid';
import { BadgeCard } from '../components/Card/Card';
import { Hero } from '../components/Hero/Hero';
import classes from './page.module.css';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LeadGrid />
      <div className={classes.cardContainer}>
        <BadgeCard />
        <BadgeCard />
        <BadgeCard />
      </div>
      <ColorSchemeToggle />
    </>
  );
}
