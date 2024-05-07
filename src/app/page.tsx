'use client'

import styles from './page.module.css';
import AbilityBlock from "@/components/ability-block";
import Stack from '@/components/library/stack';
import Traits from '@/components/traits';
import { character, CharacterContext } from "@/utility/character";

export default function Home() {
  return (
    <CharacterContext.Provider value={character}>
      <div className={styles.page}>
        <Stack>
          <AbilityBlock />
          <Traits />
        </Stack>
      </div>
    </CharacterContext.Provider>
  );
}
