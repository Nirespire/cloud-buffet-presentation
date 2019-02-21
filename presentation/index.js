import React from 'react';
import { Deck, Slide, Heading, List, ListItem, BlockQuote, Quote, Cite, Image, Appear, Fit, Fill, Layout, S } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import styled, { injectGlobal } from 'react-emotion';

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
  clouds: require('../assets/clouds.jpg'),
  booth: require('../assets/booth.jpg'),
  menu: require('../assets/menu.png'),
  salad: require('../assets/salad.jpg'),
  dessert: require('../assets/dessert.jpg'),
  soup: require('../assets/soup.jpg'),
  rolls: require('../assets/rolls.jpg'),
  burrito: require('../assets/burrito.jpg'),
  waiter: require('../assets/server.jpg'),
  plates: require('../assets/plates.jpg'),
  azure: require('../assets/azure.png'),
  aws: require('../assets/aws.png'),
  gcp: require('../assets/gcp.png'),
  spiderman: require('../assets/spiderman.jpg'),
  takeaway: require('../assets/takeaway.png'),
  mlaws: require('../assets/ml-aws.png'),
  mlgcp: require('../assets/mlgcp.png'),
  cashier: require('../assets/cashier.jpg'),
  dataflow: require('../assets/dataflow.png'),
  pubsub: require('../assets/pubsub.png'),
  iam: require('../assets/iam.png'),
  billing: require('../assets/billing.png')
};

const HeadingOutline = styled(Heading) `
  color: #1F2022;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #CECECE;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide bgImage={images.buffet}>
          <HeadingOutline>Cloud Platform Buffet</HeadingOutline>
        </Slide>

        <Slide>
          <Heading textColor="secondary">Agenda</Heading>
          <List textColor="white">
            <ListItem><S type="strikethrough">Make you very hungry</S></ListItem>
            <ListItem>Demystifying the the Cloud</ListItem>
            <ListItem>Cloud = Buffet</ListItem>
            <ListItem>Cloud Services = Tasty Treats</ListItem>
          </List>
        </Slide>

        <Slide bgColor="red">
          <Heading>DISCLAIMER</Heading>
          Not All You Can Eat
        </Slide>

        <Slide bgImage={images.clouds}>
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

        <Slide bgImage={images.clouds}>
          <Image src={images.spiderman}/>
        </Slide>

        <Slide bgImage={images.buffet}>
          <Image src={images.menu} height={750}/>
        </Slide>

        <Slide bgImage={ images.plates }>
          <Heading textColor="secondary">Platforms as a Service</Heading>
        </Slide>

        <Slide bgImage={ images.plates } bgDarken={0.5}>
          <List textColor="primary" bold>
            <ListItem>Application platform in the cloud</ListItem>
            <ListItem>No Worry, easy push</ListItem>
            <ListItem>Monitoring and Disaster Recovery</ListItem>
            <ListItem>Regional availability</ListItem>
            <ListItem textColor="tertiary">GAE, Elastic Beanstalk, Azure App Service</ListItem>
          </List>
        </Slide>

        <Slide bgImage={images.booth}>
          <HeadingOutline textColor="secondary" >Databases</HeadingOutline>
        </Slide>

        <Slide bgImage={images.booth} bgDarken={0.5}>
          <List bold textColor="tertiary">
            <ListItem>Managed database instances</ListItem>
            <ListItem>SQL and noSQL</ListItem>
            <ListItem>One click provisioning</ListItem>
            <ListItem>Automatic backups</ListItem>
            <ListItem>Regional replication </ListItem>
            <ListItem textColor="primary">Cloud SQL, Amazon RDS, Azure SQL</ListItem>
            <ListItem textColor="primary">Spanner, Dynamo DB, Cosmos DB</ListItem>
          </List>
        </Slide>


        <Slide bgImage={ images.salad }>
          <Heading bgColor="secondary">Compute</Heading>
        </Slide>

        <Slide bgImage={ images.salad } bgDarken={0.5}>
          <List textColor="primary" bold>
            <ListItem>Virtual Machines</ListItem>
            <ListItem>Autoscaling CPU and disk</ListItem>
            <ListItem>Charged by CPU and RAM over time</ListItem>
            <ListItem textColor="tertiary">GCE, EC2, Azure Compute</ListItem>
            <ListItem>Increasing popularity of Kubernetes</ListItem>
            <ListItem textColor="tertiary">GKE, EKS , Azure Container Service</ListItem>
          </List>
        </Slide>

        <Slide bgImage={images.burrito}>
          <Heading textColor="secondary" bgGradient="linear-gradient(to bottom right, #fd751c, #f4e242)">Object Storage</Heading>
        </Slide>

        <Slide bgImage={images.burrito} bgDarken={0.5}>
          <List textColor="tertiary" bold>
            <ListItem>Store files and other binary data </ListItem>
            <ListItem>Asset storage like media </ListItem>
            <ListItem textColor="primary">Types: multi-region, zonal, cold </ListItem>
            <ListItem>Charged based on type, network ingress and egress </ListItem>
            <ListItem textColor="primary">GCS, S3, Azure Storage</ListItem>
          </List>
        </Slide>

        <Slide bgImage={ images.soup }>
          <Heading textColor="secondary" bgColor="primary" bgGradient="linear-gradient(to bottom right, #fd751c, #f4e242)">Stream Data Processing</Heading>
        </Slide>

        <Slide bgImage={ images.soup } bgDarken={0.5}>
          <List bgGradient="linear-gradient(to bottom right, #fd751c, #f4e242)" bold>
            <ListItem>Streaming Data</ListItem>
            <ListItem>Pubsub Messaging</ListItem>
            <ListItem>Pubsub, SNS, Azure Service Bus</ListItem>
          </List>
          <Image src={images.pubsub} width={800}/>
        </Slide>

        <Slide bgImage={ images.soup } bgDarken={0.5}>
          <List bgGradient="linear-gradient(to bottom right, #fd751c, #f4e242)" bold>
            <ListItem>Streaming Data Pipelines </ListItem>
            <ListItem>More specialized tooling than running apps on a PaaS or Compute VM </ListItem>
            <ListItem>Usefull in high volume Applications</ListItem>
            <ListItem>Easily Integrates with other Manged Systems.</ListItem>
            <ListItem>Dataflow, Kinesis, Azure Stream Analytics</ListItem>
          </List>
          <Image src={images.dataflow} width={500}/>
        </Slide>

        <Slide bgImage={ images.dessert }>
          <Heading textColor="secondary" bgColor="white" bgGradient="linear-gradient(to bottom right, white, pink)">AI and ML</Heading>
        </Slide>

        <Slide bgImage={ images.dessert } bgDarken={0.5}>
          <List textColor="tertiary" bold>
            <ListItem>Increasing Popularity of AI and ML applications</ListItem>
            <ListItem>Pre-trained classifiers and models</ListItem>
            <ListItem>Large Public Datasets</ListItem>
            <ListItem>Integration for computer vision and NLP</ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={images.mlgcp}/>
          <Image src={images.mlaws}/>
        </Slide>

        <Slide>
          <Heading>Serverless</Heading>
          <Image src={images.waiter}/>
        </Slide>

        <Slide>
          <List bold>
            <ListItem>Runtime for self-contained functions</ListItem>
            <ListItem>Don't have to worry about compute resources</ListItem>
            <ListItem>Charged by number of invocations + running time</ListItem>
            <ListItem textColor="tertiary">Cloud Functions, AWS Lambda, Azure Functions</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Administration</Heading>
          <Image src={images.cashier} width={500}/>
        </Slide>

        <Slide>
          <List bold>
            <ListItem>Billing</ListItem>
            <ListItem>Identity Access Management</ListItem>
            <ListItem>Network Security</ListItem>
            <ListItem>Logging</ListItem>
            <ListItem>Metrics</ListItem>
          </List>
          <Image src={images.iam} width={800}/>
        </Slide>

        <Slide>
          <Heading>Takeaways</Heading>
          <Image src={images.takeaway}/>
        </Slide>

        <Slide>
          <List bold>
            <ListItem>The cloud can be seen as just a set of tools</ListItem>
            <ListItem>Those tools can help you become more productive</ListItem>
            <ListItem>Most cloud providers offer mostly the same types of tools</ListItem>
            <ListItem>Unlike actual Buffets, they are not all you can eat</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Questions</Heading>
          <Image src="https://media.giphy.com/media/cAEm5rSuuBEGY/giphy.gif"/>
        </Slide>

      </Deck>
    );
  }
}
