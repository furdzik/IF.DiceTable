import React from 'react';

import Icon from '@mdi/react';
import {
  mdiDice1Outline,
  mdiDice2Outline,
  mdiDice3Outline,
  mdiDice4Outline,
  mdiDice5Outline,
  mdiDice6Outline
} from '@mdi/js';

import { Config, ConfigElement } from 'interfaces';

import {
  Section
} from './Rules.styles';
import { FigureId } from '../../constant';

export type OptionsProps = {
  config: Config;
  className?: string;
  numberOfRounds?: number;
  numberOfColumns?: number;
};

// 1 - &#9856; 2 - &#9857; 3 - &#9858; 4 - &#9859; 5 - &#9860; 6 - &#9861;

const Rules = ({ config, className = '', numberOfRounds = 0, numberOfColumns = 0 }: OptionsProps) => {
  const small = Object.entries(config?.figures.section6.superSmall.value).map(([key, value]) => (
    `<span class="value">${key}: ${value} ptk.</span>`
  ));
  const big = Object.entries(config?.figures.section6.superBig.value).map(([key, value]) => (
    `<span class="value">${key}: ${value} ptk.</span>`
  ));
  const description: { [kay: string]: string } = {
    default: 'Brak opisu',
    [FigureId.TwoOfKind]: '<p>Dwie takie same kości. Np.: ' +
    '<i>&#9861;</i> <i>&#9861;</i></p>',
    [FigureId.TwoOfTwoOfKind]: '<p>Dwa razy dwie takie same kości. Np.: ' +
    '<i>&#9861;</i> <i>&#9861;</i> / <i>&#9859;</i> <i>&#9859;</i></p>',
    [FigureId.ThreeOfKind]: '<p>Trzy takie same kości. Np.: ' +
    '<i>&#9860;</i> <i>&#9860;</i> <i>&#9860;</i></p>',
    [FigureId.FourOfKind]: '<p>Cztery takie same kości. Np.: ' +
    '<i>&#9861;</i> <i>&#9861;</i> <i>&#9861;</i> <i>&#9861;</i></p>',
    [FigureId.Vice]: '<p>Pięć takich samych kości. Np.: ' +
    '<i>&#9857;</i> <i>&#9857;</i> <i>&#9857;</i> <i>&#9857;</i> <i>&#9857;</i></p>',
    [FigureId.General]: '<p>Sześć takich samych kości. Np.: ' +
    '<i>&#9856;</i> <i>&#9856;</i> <i>&#9856;</i> <i>&#9856;</i> <i>&#9856;</i> <i>&#9856;</i></p>',
    [FigureId.SmallTriangle]: '<p>Tylko sekwencje kości: ' +
    '<i>&#9856;</i> / <i>&#9857;</i> <i>&#9857;</i> / <i>&#9858;</i> <i>&#9858;</i> <i>&#9858;</i> ' +
    'lub <i>&#9857;</i> / <i>&#9858;</i> <i>&#9858;</i> / <i>&#9859;</i> <i>&#9859;</i> <i>&#9859;</i></p>',
    [FigureId.BigTriangle]: '<p>Tylko sekwencje kości: <i>&#9859;</i> / <i>&#9860;</i> <i>&#9860;</i> / <i>&#9861;</i> <i>&#9861;</i> <i>&#9861;</i> ' +
    'lub <i>&#9858;</i> / <i>&#9859;</i>, <i>&#9859;</i> / <i>&#9860;</i>, <i>&#9860;</i>, <i>&#9860;</i></p>',
    [FigureId.Goat]: '<p>Tylko kości o wartości: <i>&#9858;</i> i <i>&#9859;</i></p>',
    [FigureId.SmallStraight]: '<p>Sekwencja 5 kości: <i>&#9856;</i> <i>&#9857;</i> <i>&#9858;</i> <i>&#9859;</i> <i>&#9860;</i></p>',
    [FigureId.BigStraight]: '<p>Sekwencja 5 kości: <i>&#9857;</i> <i>&#9858;</i> <i>&#9859;</i> <i>&#9860;</i> <i>&#9861;</i></p>',
    [FigureId.Runner]: '<p>Sekwencja 6 kości: <i>&#9856;</i> <i>&#9857;</i> <i>&#9858;</i> <i>&#9859;</i> <i>&#9860;</i> <i>&#9861;</i></p>',
    [FigureId.Evens]: '<p>Wszystkie kości są parzyste. Np.: <i>&#9857;</i> / <i>&#9859;</i> <i>&#9859;</i> / <i>&#9861;</i> <i>&#9861;</i> <i>&#9861;</i></p>',
    [FigureId.Odds]: '<p>Wszystkie kości są nieparzyste. Np.: <i>&#9856;</i> / <i>&#9858;</i> <i>&#9858;</i> <i>&#9858;</i> / <i>&#9860;</i> <i>&#9860;</i></p>',
    [FigureId.ThreeToThree]: 'Dwa razy po trzy takie same kości. Np.: ' +
    '<i>&#9856;</i> <i>&#9856;</i> <i>&#9856;</i> / <i>&#9859;</i> <i>&#9859;</i> <i>&#9859;</i>',
    [FigureId.TwoToFour]: 'Cztery takie same kości + dwie takie same kości. ' +
    'Np: <i>&#9861;</i> <i>&#9861;</i> <i>&#9861;</i> <i>&#9861;</i> / <i>&#9858;</i> <i>&#9858;</i>',
    [FigureId.FullHouse]: '<p>Dwie takie same kości + Trzy takie same kości. Np.: <i>&#9858;</i> <i>&#9858;</i> / <i>&#9859;</i> <i>&#9859;</i> <i>&#9859;</i></p>',
    [FigureId.ThreeOfTwoOfKind]: '<p>Trzy razy dwie takie same kości. Np.: <i>&#9856;</i> <i>&#9856;</i> / <i>&#9858;</i> <i>&#9858;</i> / <i>&#9861;</i> <i>&#9861;</i></p>',
    [FigureId.SuperSmall]: `<p>Tylko kości: <i>&#9856;</i> <i>&#9857;</i> <i>&#9858;</i>*</p>
    <p>Suma wszystkich kości od 6 - 10.</p>
    <p>Przeliczamy sumę oczek na ilośc punktów:</p>
    <p>${small}</p>`,
    [FigureId.SuperBig]: `<p>Tylko kości: <i>&#9859;</i>* <i>&#9860;</i> <i>&#9861;</i></p>
    <p>Suma wszystkich kości od 32 - 36.</p><p>Przeliczamy sumę oczek na ilośc punktów:</p>
    <p>${big}</p>`,
    [FigureId.Chance]: '<p>Można wpisać każdy wynik.</p>'
  };

  return (
    <div className={className}>
      <Section>
        <p>W gra w kości dla bridżistów gra się <b>6 kośćmi</b>.</p>
        <p>Gra składa się z <b>{numberOfRounds} rund</b> (przy ilości kolumn: {numberOfColumns}). W każdej rundzie gracz
          otrzymuje trzy rzuty kośćmi, chociaż może zakończyć swoją turę po jednym lub dwóch rzutach.
          Za wynik z <b>pierwszej</b> ręki - rezultat mnożymy razy trzy, z <b>drugiej</b> ręki - mnożymy razy dwa.</p>
        <p>Po pierwszym rzucie gracz może zostawić dowolne kości i rzucić ponownie pozostałymi kośćmi, lub nawet rzucić
          ponownie wszystkimi 6 kośćmi. Procedurę tę powtarza się po drugim rzucie. Gracz ma pełny wybór, którymi kośćmi
          rzucić oraz po zakończeniu tury, gracz w pełni decyduje gdzie dany wynik wpisać do tabeli.</p>
        <p>Jeśli gracz zdecyduje, że rezultatu z rzutów nie chce nigdzie wpisywać, możne dowolny wynik skreślić (jedynie nie można skreślać wyników w Szkole).</p>
      </Section>
      <Section>
        <h1>Szkoła</h1>
        <p><b>Szkoła</b> jest najważniejsza w całej grze, ponieważ za Szkołę dostaje się
          największe <b>dodatnie</b> lub <b>ujemne</b> punkty.</p>
        <p>Szkoła składa się z rzędów od 1 - 6, gdzie każda liczba reprezentuje rodzaj kości.</p>
        <p>Szkoła polega na uzupełnieniu <b>WSZYSTKICH</b> rzędów w każdej z {numberOfColumns} kolumn. W rząd
          określający typ kości wpisujemy wynik w sposób poniżej:</p>
        <p><code>{`(3 * - {kość}) + ({kość} * {liczba takich samych kości})`}</code></p>
        <table>
          <tr>
            <th></th>
            <th>0 kości</th>
            <th>1 kość</th>
            <th>2 kości</th>
            <th>3 kości</th>
            <th>4 kości</th>
            <th>5 kości</th>
            <th>6 kości</th>
          </tr>
          <tr>
            <td>
              <Icon path={mdiDice1Outline} size={1.6} color="#188369"/>
            </td>
            <td>
              <p>-3 + 0 = <b>-3</b></p>
            </td>
            <td>
              <p>-3 + 1 = <b>-2</b></p>
            </td>
            <td>
              <p>-3 + 2 = <b>-1</b></p>
            </td>
            <td>
              <p>-3 + 3 = <b>0</b></p>
            </td>
            <td>
              <p>-3 + 4 = <b>+1</b></p>
            </td>
            <td>
              <p>-3 + 5 = <b>+2</b></p>
            </td>
            <td>
              <p>-3 + 6 = <b>+3</b></p>
            </td>
          </tr>
          <tr>
            <td>
              <Icon path={mdiDice2Outline} size={1.6} color="#188369"/>
            </td>
            <td>
              <p>-6 + 0 = <b>-6</b></p>
            </td>
            <td>
              <p>-6 + 2 = <b>-4</b></p>
            </td>
            <td>
              <p>-6 + 4 = <b>-2</b></p>
            </td>
            <td>
              <p>-6 + 6 = <b>0</b></p>
            </td>
            <td>
              <p>-6 + 8 = <b>+2</b></p>
            </td>
            <td>
              <p>-6 + 10 = <b>+4</b></p>
            </td>
            <td>
              <p>-6 + 12 = <b>+6</b></p>
            </td>
          </tr>
          <tr>
            <td>
              <Icon path={mdiDice3Outline} size={1.6} color="#188369"/>
            </td>
            <td>
              <p>-9 + 0 = <b>-9</b></p>
            </td>
            <td>
              <p>-9 + 3 = <b>-6</b></p>
            </td>
            <td>
              <p>-9 + 6 = <b>-3</b></p>
            </td>
            <td>
              <p>-9 + 9 = <b>0</b></p>
            </td>
            <td>
              <p>-9 + 12 = <b>+3</b></p>
            </td>
            <td>
              <p>-9 + 15 = <b>+6</b></p>
            </td>
            <td>
              <p>-9 + 18 = <b>+9</b></p>
            </td>
          </tr>
          <tr>
            <td>
              <Icon path={mdiDice4Outline} size={1.6} color="#188369"/>
            </td>
            <td>
              <p>-12 + 0 = <b>-12</b></p>
            </td>
            <td>
              <p>-12 + 4 = <b>-8</b></p>
            </td>
            <td>
              <p>-12 + 8 = <b>-4</b></p>
            </td>
            <td>
              <p>-12 + 12 = <b>0</b></p>
            </td>
            <td>
              <p>-12 + 16 = <b>+4</b></p>
            </td>
            <td>
              <p>-12 + 20 = <b>+8</b></p>
            </td>
            <td>
              <p>-12 + 24 = <b>+12</b></p>
            </td>
          </tr>
          <tr>
            <td>
              <Icon path={mdiDice5Outline} size={1.6} color="#188369"/>
            </td>
            <td>
              <p>-15 + 0 = <b>-15</b></p>
            </td>
            <td>
              <p>-15 + 5 = <b>-8</b></p>
            </td>
            <td>
              <p>-15 + 10 = <b>-4</b></p>
            </td>
            <td>
              <p>-15 + 15 = <b>0</b></p>
            </td>
            <td>
              <p>-15 + 20 = <b>+4</b></p>
            </td>
            <td>
              <p>-15 + 25 = <b>+15</b></p>
            </td>
            <td>
              <p>-15 + 30 = <b>+15</b></p>
            </td>
          </tr>
          <tr>
            <td>
              <Icon path={mdiDice6Outline} size={1.6} color="#188369"/>
            </td>
            <td>
              <p>-18 + 0 = <b>-18</b></p>
            </td>
            <td>
              <p>-18 + 6 = <b>-12</b></p>
            </td>
            <td>
              <p>-18 + 12 = <b>-6</b></p>
            </td>
            <td>
              <p>-18 + 18 = <b>0</b></p>
            </td>
            <td>
              <p>-18 + 24 = <b>+6</b></p>
            </td>
            <td>
              <p>-18 + 30 = <b>+12</b></p>
            </td>
            <td>
              <p>-18 + 36 = <b>+18</b></p>
            </td>
          </tr>
        </table>
        <p>Minimalny sumaryczny wynik w kolumnie to <b>{config?.bonuses.columnBonus.minimalSum} ptk.</b></p>
        <p>Bonus na każdy punk powyżej tego wyniku to <b>50 ptk</b>. Kara za każdy punkt poniżej tego wyniku <b>-50 ptk</b>.</p>
        <p>Uzupełnianie Szkoły jest <b>OBOWIĄZKOWE</b>. Jeśli pod koniec gry Szkoła jest nieuzupełniona, np. brakuje
          w niej 3 wyników, na maksymalnie 3 rundy przed końcem należy wpisać wynik w brakujące komórki, nawet jeśli
          będą to
          maksymalne ujemne wyniki (na przykład przy braku danej kości w rezultacie z rzutów). W szkole wyniku nie
          można skreślić.</p>
      </Section>
      <Section>
        <h1>Figury</h1>
        <p>Gra składa się z następujących Figur:</p>
        <table className="figure-table">
          <tr>
            <th>Figura</th>
            <th>Opis</th>
          </tr>
          <tr>
            <td colSpan={2}><b>Sekcja 1</b></td>
          </tr>
          {
            Object.values(config?.figures?.section1).map((element: ConfigElement) => (
              <tr>
                <td>{element.name} {element?.fullName ? `(${element?.fullName})` : ''}</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: description?.[`${element?.id}`] }} />
                </td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={2}><b>Sekcja 2</b></td>
          </tr>
          {
            Object.values(config?.figures?.section2).map((element: ConfigElement) => (
              <tr>
                <td>{element.name} {element?.fullName ? `(${element?.fullName})` : ''}</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: description?.[`${element?.id}`] }}/>
                </td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={2}><b>Sekcja 3</b></td>
          </tr>
          {
            Object.values(config?.figures?.section3).map((element: ConfigElement) => (
              <tr>
                <td>{element.name} {element?.fullName ? `(${element?.fullName})` : ''}</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: description?.[`${element?.id}`] }}/>
                </td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={2}><b>Sekcja 4</b></td>
          </tr>
          {
            Object.values(config?.figures?.section4).map((element: ConfigElement) => (
              <tr>
                <td>{element.name} {element?.fullName ? `(${element?.fullName})` : ''}</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: description?.[`${element?.id}`] }}/>
                </td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={2}><b>Sekcja 5</b></td>
          </tr>
          {
            Object.values(config?.figures?.section5).map((element: ConfigElement) => (
              <tr>
                <td>{element.name} {element?.fullName ? `(${element?.fullName})` : ''}</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: description?.[`${element?.id}`] }}/>
                </td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={2}><b>Sekcja 6</b></td>
          </tr>
          {
            Object.values(config?.figures?.section6).map((element: ConfigElement) => (
              <tr>
                <td>{element.name} {element?.fullName ? `(${element?.fullName})` : ''}</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: description?.[`${element?.id}`] }}/>
                </td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={2}><b>Sekcja 7</b></td>
          </tr>
          {
            Object.values(config?.figures?.section7).map((element: ConfigElement) => (
              <tr>
                <td>{element.name} {element?.fullName ? `(${element?.fullName})` : ''}</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: description?.[`${element?.id}`] }}/>
                </td>
              </tr>
            ))
          }
        </table>
        <p>* - Do uzgodnienia miedzy graczami, czy kości oznaczone gwiazdką powinny wliczać się do figury.</p>
      </Section>
      <Section>
        <h1>Bonusy i kary</h1>
        <p>Gracz może dostać następujące bonusy lub kary:</p>
        <table className="figure-table">
          <tr>
            <th>Bonus</th>
            <th>Jak go zdobyć?</th>
          </tr>
          <tr>
            <td>Bonus za Szkołe</td>
            <td>
              <p>Minimalny sumaryczny wynik w kolumnie to <b>{config?.bonuses.schoolGeneral.minimalSum} ptk</b>.</p>
              <p>Bonus na każdy punk powyżej tego wyniku to <b>{`${config?.bonuses.schoolGeneral.value} ptk`}</b>.</p>
              <p>Kara za każdy punkt poniżej tego wyniku <b>{`-${config?.bonuses.schoolGeneral.value} ptk`}</b>.</p>
            </td>
          </tr>
          <tr>
            <td>Bonus {`> 1000`}</td>
            <td>
              <p>Pierwszy gracz który przekroczy sumę punktów {config?.bonuses.thousandBonus.minimalSum} (bez bonusów),
                dostaje bonus <b>{`${config?.bonuses.thousandBonus.value} ptk`}</b>.
              </p>
            </td>
          </tr>
          <tr>
            <td>Bonus za kolumnę</td>
            <td>
              <p>Bonus za każdą uzupełnioną kolumnę (razem ze
                szkołą) <b>{`${config?.bonuses.columnBonus.value} ptk`}</b>.</p>
            </td>
          </tr>
          <tr>
            <td>Takie same Vicki</td>
            <td>
              <p>Bonus za takie same kości Vicków <b>{`${config?.bonuses.sameValueVice.value} ptk`}</b>.</p>
            </td>
          </tr>
          <tr>
            <td>Takie same Generały</td>
            <td>
              <p>Bonus za takie same kości Generałów <b>{`${config?.bonuses.sameValueGeneral.value} ptk`}</b>.</p>
            </td>
          </tr>
          <tr>
            <td>Wszystkie wyniki w sekcji pierwszej i drugiej</td>
            <td>
              <p>Bonus <b>{`${config?.bonuses.section1AllResults.value} ptk`}</b>.</p>
            </td>
          </tr>
          <tr>
            <td>Wszystkie wyniki w sekcji trzeciej</td>
            <td>
              <p>Bonus <b>{`${config?.bonuses.section3AllResults.value} ptk`}</b>.</p>
            </td>
          </tr>
          <tr>
            <td>Wszystkie wyniki w sekcji czwartej</td>
            <td>
              <p>Bonus <b>{`${config?.bonuses.section4AllResults.value} ptk`}</b>.</p>
            </td>
          </tr>
          <tr>
            <td>Wszystkie wyniki w sekcji piątej</td>
            <td>
              <p>Bonus <b>{`${config?.bonuses.section5AllResults.value} ptk`}</b>.</p>
            </td>
          </tr>
          <tr>
            <td>Wszystkie wyniki w sekcji szóstej</td>
            <td>
              <p>Bonus <b>{`${config?.bonuses.section6AllResults.value} ptk`}</b>.</p>
            </td>
          </tr>
        </table>
      </Section>
    </div>
  );
};

export default Rules;
