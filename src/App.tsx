import Section, { SectionType } from 'components/Section';

import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.App}>
      <Section type={SectionType.Light}>
        <h1>Who I have worked&nbsp;with.</h1>

        <p>
          I&apos;ve worked with a variety of clients, from smaller start-ups to
          larger global&nbsp;organisations, to create brand identities,
          websites, campaigns and&nbsp;much&nbsp;more.
        </p>
      </Section>

      <Section type={SectionType.Light}>
        <h1>Who I have worked&nbsp;with.</h1>

        <p>
          I&apos;ve worked with a variety of clients, from smaller start-ups to
          larger global&nbsp;organisations, to create brand identities,
          websites, campaigns and&nbsp;much&nbsp;more.
        </p>
      </Section>

      <Section type={SectionType.Medm}>
        <h1>Who I have worked&nbsp;with.</h1>

        <p>
          I&apos;ve worked with a variety of clients, from smaller start-ups to
          larger global&nbsp;organisations, to create brand identities,
          websites, campaigns and&nbsp;much&nbsp;more.
        </p>
      </Section>

      <Section type={SectionType.Medm}>
        <h1>Who I have worked&nbsp;with.</h1>

        <p>
          I&apos;ve worked with a variety of clients, from smaller start-ups to
          larger global&nbsp;organisations, to create brand identities,
          websites, campaigns and&nbsp;much&nbsp;more.
        </p>
      </Section>

      <Section type={SectionType.Dark}>
        <h1>Who I have worked&nbsp;with.</h1>

        <p>
          I&apos;ve worked with a variety of clients, from smaller start-ups to
          larger global&nbsp;organisations, to create brand identities,
          websites, campaigns and&nbsp;much&nbsp;more.
        </p>
      </Section>

      <Section type={SectionType.Dark}>
        <h1>Who I have worked&nbsp;with.</h1>

        <p>
          I&apos;ve worked with a variety of clients, from smaller start-ups to
          larger global&nbsp;organisations, to create brand identities,
          websites, campaigns and&nbsp;much&nbsp;more.
        </p>
      </Section>
    </main>
  );
}

export default App;
