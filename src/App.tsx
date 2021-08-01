import Page from 'components/Page';
import IntroHero from 'containers/IntroHero';

import styles from './App.module.scss';

function App() {
  return (
    <Page>
      <main className={styles.App}>
        <IntroHero />
      </main>
    </Page>
  );
}

export default App;
