import React from 'react';
import { Deck, Slide, Heading, List, ListItem, BlockQuote, Quote, Cite, Image, Appear } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import styled from 'react-emotion';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  buffet: require('../assets/buffet.jpg'),
  dessert: require('../assets/dessert.jpg'),
  soup: require('../assets/soup.jpg'),
  rolls: require('../assets/rolls.jpg'),
  waiter: require('../assets/waiter.jpg'),
  plates: require('../assets/plates.jpg'),
  azure: require('../assets/azure.png'),
  aws: require('../assets/aws.png'),
  gcp: require('../assets/gcp.png')
};

const CustomHeading = styled(Heading) `
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  background: rgb(204, 204, 204);
  background: rgba(204, 204, 204, 0.9);
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide bgImage={images.buffet}>
          <CustomHeading size={3} fit caps>Cloud Platform Buffet</CustomHeading>
        </Slide>

        <Slide>
          <Heading>Agenda</Heading>
          <List>
            <ListItem>Cloud = Buffet</ListItem>
            <ListItem>Cloud Services = All You Can Eat Tasty Treats</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>The Cloud Provider</Heading>
        </Slide>

        <Slide bgImage={ images.rolls }>
          <Heading>Compute</Heading>
        </Slide>

        <Slide>
          <Heading>Object Storage</Heading>
        </Slide>

        <Slide>
          <Heading>Databases</Heading>
        </Slide>

        <Slide bgImage={ images.plates }>
          <Heading>Platforms as a Service</Heading>
        </Slide>

        <Slide bgImage={ images.waiter }>
          <Heading >Serverless</Heading>
        </Slide>

        <Slide>
          <Heading bgImage={ images.soup }>Stream Data Processing</Heading>
        </Slide>

        <Slide bgImage={ images.dessert }>
          <Heading>AI and ML</Heading>
        </Slide>

        <Slide>
          <Image src={images.goodWork} width={500} />
        </Slide>

      </Deck>
    );
  }
}
