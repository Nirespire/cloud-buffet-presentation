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
  buffet: require('../assets/buffet.jpg')
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

        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1}>Typography</Heading>
        </Slide>

        <Slide>
          <List>
            <Appear>
              <ListItem>Item 1</ListItem>
            </Appear>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
        </Slide>
      </Deck>
    );
  }
}
