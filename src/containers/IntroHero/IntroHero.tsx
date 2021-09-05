import Container from 'components/Container';
import Section, {
  SectionTitle,
  SectionType,
  TitleType,
} from 'components/Section';
import VerticalLine, { LinePosition } from 'components/VerticalLine';

import Background3DWorld from './Background3DWorld';
import { ReactComponent as FaceIcon } from './face.svg';
import { ReactComponent as HeartIcon } from './heart.svg';
import styles from './IntroHero.module.scss';

function IntroHero() {
  return (
    <Section className={styles.IntroHero} type={SectionType.Medm}>
      <Container>
        <FaceIcon className={styles.FaceIcon} />
        <SectionTitle className={styles.HeroTitle} type={TitleType.Primary}>
          Hi I&apos;m <span>Pradeep</span>&nbsp;<span>Sekar</span>, <br />
          and&nbsp;I&nbsp;<span>{'{'}</span>&nbsp;
          <span className={styles.HeartIcon}>
            <HeartIcon />
          </span>
          &nbsp;<span>{'}'}</span>
          &nbsp;to design and code great&nbsp;looking usable&nbsp;interfaces.
        </SectionTitle>
      </Container>

      <VerticalLine
        className={styles.VerticalLine}
        position={LinePosition.Bottom}
      />

      <Background3DWorld />
    </Section>
  );
}

export default IntroHero;
