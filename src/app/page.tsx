'use client'

import AbilityBlock from "@/components/ability-block";
import Bonds from "@/components/bonds";
import Currency from "@/components/currency";
import Details from '@/components/details';
import Flaws from "@/components/flaws";
import Ideals from "@/components/ideals";
import Items from "@/components/items";
import Stack from "@/components/library/stack";
import Personality from "@/components/personality";
import Proficiencies from "@/components/proficiencies";
import Traits from '@/components/traits';
import { character, CharacterContext } from "@/utility/character";
import { Gap } from "@/utility/library/spacing";
import styles from './page.module.css';

export default function Home() {
  return (
    <CharacterContext.Provider value={character}>
      <div className={styles.page}>
        <div className={styles.layout}>
          <div className={styles.player}>
            <Details />
          </div>
          <div className={styles.abilities}>
            <AbilityBlock />
          </div>
          <div className={styles.traits}>
            <Traits />
          </div>
          <div className={styles.side}>
            <Stack gap={Gap.tiny}>
              <Currency />
              <Items />
              <Proficiencies />
              <Personality />
              <Ideals />
              <Bonds />
              <Flaws />
            </Stack>
          </div>
        </div>
      </div>
    </CharacterContext.Provider>
  );
}
