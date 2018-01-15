import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';
import Button from '../components/Button';
import SermonCard from '../components/SermonCard';
import genesis from '../images/genesis.jpg';
import EventCard from '../components/EventCard';

const IndexPage = () => (
  <div>
    <p>TODO: Home Page</p>

    <SermonCard
      image={genesis}
      title="Genesis 37 - Did It Have To Go This Way?"
      date="8/20/17"
      speaker=" Pastor Ben Helton"
      passage="Genesis 37"
    />

    <EventCard
      title="Ice Cream Social"
      date="August 25"
      linkTo="events/ice-cream"
    />

    <Card>
      <Button>I'm a button</Button>
      <p>I'm a paragraph</p>
    </Card>

    <Button linkTo="http://www.google.com">I am a button!</Button>
    <Button linkTo="contact">No, I am a button!</Button>
  </div>
);

export default IndexPage;