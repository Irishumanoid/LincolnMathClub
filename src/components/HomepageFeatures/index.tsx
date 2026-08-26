import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Typography } from '@mui/material';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'New Math Year-Round',
    description: (
      <>
        At Lincoln Math Club, we meet multiple times during each school week to go through engaging student officer-led
        concept lectures, prepare for various competitions like the AMC, AIME, Math is Cool, PCMM, SMT, WSMC, etc., and just
        talk math with others that share our interests.
      </>
    ),
  },
  {
    title: 'Hosting Math Competitions',
    description: (
      <>
        In 2024, we hosted our first annual Lincoln Math Competition, where we brought in over 100 elementary schools to the
        Lincoln campus to participate in individual and teams rounds of problems while also getting a sneak peak of the high
        school experience.
      </>
    ),
  },
  {
    title: 'Tutoring Services',
    description: (
      <>
        We are hosting summer sessions to further instill a love for math in younger students via our tutoring sessions and
        competitive math practice courses. Throughout July, some of our club members will be teaching free and interactive
        problem-based lessons accompanied by supplemental practice and fun games.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 'bold', }}>
          Our Mission
        </Typography>
        <Typography variant='h6' 
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // semi-transparent black background 
            padding: '8px', // optional padding
            display: 'inline-block', // to ensure padding is applied properly 
          }}>
          We aim to empower our club members and students in the Greater Seattle Area to pursue competitive math and math-related
          careers by providing opportunities for their learning. Our math club members participate in numerous local and national math competitions, engage with accredited lecturers, and learn about topics
          that aren't covered in regular school curricula. We also offer various programs for elementary school students to cultivate a passion for math from a young age, such as our annual Lincoln Math Competition and our summer tutoring sessions.
        </Typography>
        <div className={clsx('row', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
