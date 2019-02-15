import React from 'react';
import { Deck, Slide, Heading, List, ListItem, BlockQuote, Quote, Cite, Image, Appear, Fit, Fill, Layout, S } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import styled from 'react-emotion';

const theme = createTheme(
  {
    primary: '#fd751c', // Orange
    secondary: '#1F2022', // Light Grey
    tertiary: '#CECECE', // White
    quaternary: '#f4e242' // Yellow
  },
  {
    primary: 'Montserrat',
    secondary: 'Montserrat'
  }
);

const images = {
  buffet: require('../assets/buffet.jpg'),
  dessert: require('../assets/dessert.jpg'),
  soup: require('../assets/soup.jpg'),
  rolls: require('../assets/rolls.jpg'),
  waiter: require('../assets/server.jpg'),
  plates: require('../assets/plates.jpg'),
  azure: require('../assets/azure.png'),
  aws: require('../assets/aws.png'),
  gcp: require('../assets/gcp.png'),
  spiderman: require('../assets/spiderman.jpg'),
  takeaway: require('../assets/takeaway.png')
};

const TitleHeading = styled(Heading) `
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
          <TitleHeading size={3} fit caps>Cloud Platform Buffet</TitleHeading>
        </Slide>

        <Slide>
          <Heading textColor="secondary">Agenda</Heading>
          <List textColor="tertiary">
            <ListItem>Cloud = Buffet</ListItem>
            <ListItem>Cloud Services = All You Can Eat Tasty Treats</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="secondary">The Cloud Provider</Heading>
          <Layout>
            <Fill>
              <Image src={images.aws} width={200}/>
            </Fill>
            <Fill>
              <Image src={images.gcp} width={200}/>
            </Fill>
            <Fill>
              <Image src={images.azure} width={300}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Image src={images.spiderman}/>
        </Slide>

        <Slide bgImage={ images.rolls }>
          <Heading textColor="secondary">Compute</Heading>
        </Slide>

        <Slide bgImage={ images.rolls } bgDarken={0.5}>
          <List textColor="primary" bold>
            <ListItem>Virtual Machines </ListItem>
            <ListItem>Includes autoscaling CPU and disk </ListItem>
            <ListItem>Charged by CPU and RAM over time </ListItem>
            <ListItem>Mention Vulcan and Aurora </ListItem>
            <ListItem>GCE, EC2, Azure Compute</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="secondary">Object Storage</Heading>
          <List>
            <ListItem>Upload and access files and other binary data </ListItem>
            <ListItem>Good for asset storage like media </ListItem>
            <ListItem>Different types: multi-region, zonal, cold </ListItem>
            <ListItem>Charged based on type, network ingress and egress </ListItem>
            <ListItem>GCS, S3, Azure Storage</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="secondary">Databases</Heading>
          <List>
            <ListItem>Managed database instances</ListItem>
            <ListItem>SQL and noSQL</ListItem>
            <ListItem>One click provisioning </ListItem>
            <ListItem>Easy automatic backups and regional replication </ListItem>
            <ListItem>Charged by type of instance, amount of compute resources </ListItem>
            <ListItem>Cloud SQL, Amazon RDS, Azure SQL Database </ListItem>
            <ListItem>Spanner, Dynamo DB, Cosmos DB</ListItem>
          </List>
        </Slide>

        <Slide bgImage={ images.plates }>
          <Heading textColor="secondary">Platforms as a Service</Heading>
        </Slide>

        <Slide bgImage={ images.plates } bgDarken={0.5}>
          <List textColor="primary" bold>
            <ListItem>Deploy apps without worrying about the infrastructure </ListItem>
            <ListItem>Available monitoring, disaster recovery, regional availability </ListItem>
            <ListItem>Charged based on compute resources allocated to running apps </ListItem>
            <ListItem>GAE, Elastic Beanstalk, Azure App Service</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Serverless</Heading>
          <Image src={images.waiter}/>
        </Slide>

        <Slide>
          <List>
            <ListItem>Deploy a self-contained function to a platform </ListItem>
            <ListItem>Don't have to worry about compute resources </ListItem>
            <ListItem>Charged by number of invocations and running time </ListItem>
            <ListItem>Cloud Functions, AWS Lambda, Azure Functions </ListItem>
          </List>
        </Slide>

        <Slide bgImage={ images.soup }>
          <Heading textColor="secondary" bgColor="primary" bgGradient="linear-gradient(to bottom right, #fd751c, #f4e242)">Stream Data Processing</Heading>
        </Slide>

        <Slide bgImage={ images.soup } bgDarken={0.5}>
          <List bgGradient="linear-gradient(to bottom right, #fd751c, #f4e242)">
            <ListItem>Need to process large amounts of data fast </ListItem>
            <ListItem>Pubsub messaging </ListItem>
            <ListItem>Streaming data pipelines </ListItem>
            <ListItem>More specialized tooling than running apps on a PaaS or Compute VM </ListItem>
            <ListItem>Pubsub, SNS, Azure Service Bus</ListItem>
          </List>
        </Slide>

        <Slide bgImage={ images.dessert }>
          <Heading textColor="secondary" bgColor="white" bgGradient="linear-gradient(to bottom right, white, pink)">AI and ML</Heading>
        </Slide>

        <Slide>
          <List>
            <ListItem>Public API's into trained classifiers and models </ListItem>
            <ListItem>Easy integration for computer vision and NLP</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Takeaways</Heading>
          <Image src={images.takeaway}/>
        </Slide>

      </Deck>
    );
  }
}
