import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'components/ProjectLayout';
import { Table, TableCell, TableRow } from 'components/Table';
import Link from 'components/Link';
import Icon from 'components/Icon';
import Footer from 'components/Footer';
import { useScrollRestore } from 'hooks';
import prerender from 'utils/prerender';
import usesBackground from 'assets/uses-background.mp4';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import './index.css';

const Uses = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>Uses | Cody Bennett</title>
        <meta
          name="description"
          content="A list of hardware and software I use to do my thing"
        />
      </Helmet>
      <ProjectContainer className="uses">
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
          entered={!prerender}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things."
        />
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    <Link href="https://www.adobe.com/in/products/xd.html">Adobe XD</Link> is my primary tool for UI
                    design these days. Made the switch from InVision in 2020 and haven't
                    looked back.
                  </li>
                  <li>
                    Any motion graphics I create are created in Adobe After Effects





                    . So
                    far I haven't found a non-Adobe product that's as good. If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </li>
                  <li>
                    For any 3D models I use{' '}
                    <Link href="https://blender.org">Blender</Link>. Since 2.8 it's become
                    way simpler to use and in a lot of ways better than expensive paid
                    tools like 3DS Max or Maya.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    I use{' '}
                    <Link href="https://code.visualstudio.com">Visual Studio Code</Link>{' '}
                    as my text editor, with the Base 16 Tomorrow Dark theme and Jetbrains
                    Mono as my typeface of choice.
                  </li>
                  <li>
                    <Link href="https://www.google.com/intl/en_in/chrome/dev/">
                      Chrome Development Edition
                    </Link>{' '}
                    is my main browser for both development and general use.
                  </li>
                  <li>
                    <Link href="https://reactjs.org">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </li>
                  <li>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it. I
                    have a few <Link href="https://dribbble.codyb.co">experiments</Link>{' '}
                    and{` `}
                    <Link to="/articles">articles</Link> about it.
                  </li>
                  <li>
                    For CSS I've used a myriad of pre-processors and css-in-js solutions
                    like{` `}
                    <Link href="https://styled-components.com">styled-components</Link>,
                    but these days I'm using vanilla CSS with{' '}
                    <Link href="https://postcss.org">PostCSS</Link> to get upcoming CSS
                    features today.
                  </li>
                  <li>
                    For Javascript animations I use{' '}
                    <Link href="https://popmotion.io/api">Popmotion Pure 8</Link>, it's a
                    great way to add spring animations to three.js. All other animations
                    are CSS with{' '}
                    <Link href="https://reactcommunity.org/react-transition-group">
                      React Transition Group
                    </Link>{' '}
                    for enter/exit transitions.
                  </li>
                  <li>
                    For building and testing UI components in isolation I use{' '}
                    <Link href="https://storybook.js.org">Storybook</Link>. Check out the{' '}
                    <Link href="https://storybook.codyb.co">
                      storybook for this website
                    </Link>
                    .
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableRow>
                  <TableCell>
                    <strong>CPU</strong>
                  </TableCell>
                  <TableCell>Intel i3 540</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>GPU</strong>
                  </TableCell>
                  <TableCell>NVIDIA GTX 710</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Keyboard</strong>
                  </TableCell>
                  <TableCell>Keychron K8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Motherboard</strong>
                  </TableCell>
                  <TableCell>Intel DH55TC (XU1)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Headphones</strong>
                  </TableCell>
                  <TableCell>JBL Headphones</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Microphone</strong>
                  </TableCell>
                  <TableCell>Not Particular</TableCell>
                </TableRow>
                
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Uses;
