import React from 'react';

import Footer from '../components/Footer';
import Layout from '../components/layout';
import Introduction from '../components/Introduction';
import ImageDivider from '../components/ImageDivider';
import PersonalPresentations from '../components/PersonalPresentations';

// TODO: Make this come from Netlify CMS
const sections = [
  {
    id: 1,
    title: 'Vilka är vi?',
    content: (
      <>
        <h1>Vilka är vi?</h1>
        <p>
          Vi på Awexa hjälper dig att komma in på rätt spår. Vi har lång
          erfarenhet (64 år) av att se till så du gör rätt saker i rätt tid på
          rätt plats.
        </p>
        <p>
          Allt ifrån din jobbkarriär till hur du fungerar i alla sammanhang.
          Ditt liv ska fungera på alla plan och vi ser till att det gör så.
        </p>
        <p>
          Känner Du att ditt liv inte fungerar som det ska hör du bara av dig så
          bokar vi in en timmes första samtal.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Agneta',
    content: (
      <>
        <h1>Agneta</h1>
        <p>
          Jag har 40 års erfarenhet av att hjälpa folk med sin personliga
          utveckling. Som kurator och psykoterapeut använder jag mig av mina
          kunskaper i att plocka fram din personlighet. Vad som har gjort dig
          till den du är idag finns bakåt i tiden. Vi börjar där och går sedan
          hela vägen till din framtid.
        </p>
        <p>
          Under mina år i Malmö är det många som har fått hjälp med både stora
          och små problem. Inget är för mig främmande.
        </p>
        <p>Av mig kan du få hjälp med</p>
        <ul>
          <li>Att kartlägga din personlighet</li>
          <li>Få reda på hur du ska lösa dina svårigheter</li>
          <li>Agera gentemot myndigheter</li>
          <li>Få ordning på ditt sociala liv</li>
          <li>Kristerapi</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: 'Johan',
    content: (
      <>
        <h1>Johan</h1>
        <p>
          Jag har sedan 1994 hjälpt folk att handera Word så att de kan skriva
          bra ansökningshandlingar. Mina kunskaper i Word är kompletta. Att läsa
          och tolka en platsannons och därefter skriva en bra ansökan är en
          konst som jag lärt mig och gärna delar med mig av.
        </p>
        <p>
          Är du på väg att hitta en ny karriär finns det mycket att ta hänsyn
          till. Dina kunskaper, egenskaper och färdigheter plockar vi fram för
          att därefter hitta rätt jobb åt dig.
        </p>
        <p>
          Vill du lära dig att hantera Excel hjälper jag dig gärna, för det är
          mitt favoritprogram.
        </p>
        <p>Av mig kan du få hjälp med:</p>
        <ul>
          <li>Ditt karriärbyte</li>
          <li>Ditt karriärbyte</li>
          <li>Kartläggning av dig</li>
          <li>Att skriva ett bra CV</li>
          <li>Att skriva en bra jobbansökan</li>
          <li>Kunskaper i Word</li>
          <li>Kunskaper i Excel</li>
          <li>Hantera e-post</li>
        </ul>
      </>
    ),
  },
];

const IndexPage = () => (
  <Layout>
    <Introduction content={sections[0].content} />
    <ImageDivider number={0} />
    <PersonalPresentations
      agneta={sections[1].content}
      johan={sections[2].content}
    />
    <ImageDivider number={1} />
    <Footer phone="0046 123 45 67" email="example@awexa.se" />
  </Layout>
);

export default IndexPage;
