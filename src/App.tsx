import Container from 'components/Container';
import Page from 'components/Page';
import Section, {
  SectionText,
  SectionTitle,
  SectionType,
} from 'components/Section';

import styles from './App.module.scss';

function App() {
  return (
    <Page>
      <main className={styles.App}>
        <Section type={SectionType.Light}>
          <Container>
            <SectionTitle>Who I have worked&nbsp;with.</SectionTitle>

            <SectionText>
              I&apos;ve worked with a variety of clients, from smaller start-ups
              to larger global&nbsp;organisations, to create brand identities,
              websites, campaigns and&nbsp;much&nbsp;more.
            </SectionText>
          </Container>
        </Section>

        <Section type={SectionType.Light}>
          <Container>
            <SectionTitle>Who I have worked&nbsp;with.</SectionTitle>

            <SectionText>
              I&apos;ve worked with a variety of clients, from smaller start-ups
              to larger global&nbsp;organisations, to create brand identities,
              websites, campaigns and&nbsp;much&nbsp;more.
            </SectionText>
          </Container>
        </Section>

        <Section type={SectionType.Medm}>
          <Container>
            <SectionTitle>Who I have worked&nbsp;with.</SectionTitle>

            <SectionText>
              I&apos;ve worked with a variety of clients, from smaller start-ups
              to larger global&nbsp;organisations, to create brand identities,
              websites, campaigns and&nbsp;much&nbsp;more.
            </SectionText>
          </Container>
        </Section>

        <Section type={SectionType.Medm}>
          <Container>
            <SectionTitle>Who I have worked&nbsp;with.</SectionTitle>

            <SectionText>
              I&apos;ve worked with a variety of clients, from smaller start-ups
              to larger global&nbsp;organisations, to create brand identities,
              websites, campaigns and&nbsp;much&nbsp;more.
            </SectionText>
          </Container>
        </Section>

        <Section type={SectionType.Dark}>
          <Container>
            <SectionTitle>Who I have worked&nbsp;with.</SectionTitle>

            <SectionText>
              I&apos;ve worked with a variety of clients, from smaller start-ups
              to larger global&nbsp;organisations, to create brand identities,
              websites, campaigns and&nbsp;much&nbsp;more.
            </SectionText>
          </Container>
        </Section>

        <Section type={SectionType.Dark}>
          <Container>
            <SectionTitle>Who I have worked&nbsp;with.</SectionTitle>

            <SectionText>
              I&apos;ve worked with a variety of clients, from smaller start-ups
              to larger global&nbsp;organisations, to create brand identities,
              websites, campaigns and&nbsp;much&nbsp;more.
            </SectionText>
          </Container>
        </Section>
      </main>
    </Page>
  );
}

export default App;
