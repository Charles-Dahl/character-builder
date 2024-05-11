'use client'

import AbilityBlock from "@/components/ability-block";
import Details from '@/components/details';
import Traits from '@/components/traits';
import { character, CharacterContext } from "@/utility/character";
import styles from './page.module.css';
import Attacks from "@/components/attacks";
import Inline from "@/components/library/inline";

export default function Home() {
  return (
    <CharacterContext.Provider value={character}>
      <div className={styles.page}>
        <div className={styles.layout}>
          <Details />
          <Inline>
            <Attacks />
            <AbilityBlock /></Inline>
          <Traits />
        </div>
      </div>
    </CharacterContext.Provider>
  );
}
