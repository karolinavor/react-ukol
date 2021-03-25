# react-ukol

## Zadání 

Vaším cílem je vytvořit nástroj pro zjednodušení práce, jehož primárním cílem je naceňování nových projektů. V potaz se musí brát, že s nástrojem budou pracovat také juniorní členové týmu a nevývojářské pozice. Systém bude mít níže zadané funkce:

1) Do nástroje půjde nahrát CSV soubor s níže zobrazeným formátem.
Na prvním řádku souboru je hlavička, první sloupec označuje název dané části webu a další sloupce označují míru složitosti, sloupců složitostí může být neomezeně. Na dalších řádcích jsou jednotlivé části webu a jejich časový odhad v hodinách pro jednotlivé složitosti. Soubor by měl být uložen na straně backendu (např. NodeJS server) a být použitelný opakovaně pro všechna zařízení bez nutnosti opětovného nahrání.
(Soubor si vytvořte, ale nemusí být obsahem řešení, využijeme vlastní pro lepší
kontrolu)

~~~
“název”;”triviální”;”složitá grafika”;”pokročilé”;... 
“menu”;3;8;6;...
“HP”;6;12;10;...
...
~~~

2) Nástroj bude obsahovat formulář formou tabulky (nebude se zobrazovat, pokud
nebude nahráno CSV), kde rozložení bude stejné jako v CSV souboru. V každém řádku půjde vybrat buď jedna nebo žádná z obtížností. Poslední sloupec, který nebude v CSV, ale ve formuláři ano, je sloupec jiné, kde po zaškrtnutí se objeví input, do kterého půjde vypsat číslo.

3) Pod tabulkou bude součet hodin za vybrané části a pole pro hodinovou sazbu vedle něhož bude celková částka, která se ze zadaných údajů vypočítá.

4) Stránka bude obsahovat tlačítko pro export, které stáhne vyplněné hodnoty ve formátu CSV (na řádku název;hodiny a na konci součet).

## Spusteni projektu

~~~
npm install
~~~

Spusteni React aplikace na portu 3000

~~~
npm run start
~~~

Spusteni Node.js serveru na portu 8000

~~~
npm run dev
~~~


