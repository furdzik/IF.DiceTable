import React from 'react';

import { Config } from 'interfaces';

import {
  Section
} from './Rules.styles';

export type OptionsProps = {
  config: Config;
  className?: string;
  numberOfRounds?: number;
  numberOfColumns?: number;
}

const Rules = ({ config, className = '', numberOfRounds = 0, numberOfColumns = 0 }: OptionsProps) => {
  console.log('config', config);
  return (
    <div className={className}>
      <Section>
        <p>Gra składa się z <b>{numberOfRounds} rund</b> (przy ilości kolumn: {numberOfColumns}). W każdej rundzie gracz otrzymuje trzy rzuty kośćmi, chociaż może zakończyć swoją turę po jednym lub dwóch rzutach. Za wynik z <b>pierwszej</b> ręki - rezultat mnożymy razy trzy, z <b>drugiej</b> ręki - mnożymy razy dwa.</p>
        <p>Po pierwszym rzucie gracz może zapisać dowolne kości i rzucić ponownie pozostałymi kośćmi. Procedurę tę powtarza się po drugim rzucie. Gracz ma pełny wybór, którymi kośćmi rzucić. </p>
        <p></p>
      </Section>
      <Section>
        <h1>Szkoła</h1>
        <p>TODO</p>
      </Section>
      <Section>
        <h1>Figury</h1>
        <p>TODO</p>
      </Section>
    </div>
  );
};

export default Rules;
