---
title: "Node.js - applikationsmiljön"
metaTitle: "1DV025 | Node.js"
metaDescription: "metaDescription"
---

import Hint from 'components/mdxComponents/Hint'

Node.js är den applikationsmiljö i vilken du kommer att köra dina JavaScript-applikationer. Du kanske tidigare känner till att Javascript används på webbsidor och således körs i webbläsare. I denna kurs kommer du dock att exekvera (köra) dina applikationer utanför webbläsaren och Node.js är det verktyg du kommer att använda för att göra detta.
npm hjälper dig att hålla reda på beroenden till olika paket i dina applikationer. Det finns många paket med färdig kod du kan använda dig av. Det är här npm kommer in i bilden och hjälper dig att hämta hem och underhålla dessa beroenden.

## Steg 1. Installera Node.js och npm

Hämta hem och installera de senaste versionerna av Node.js och npm från [https://nodejs.org](https://nodejs.org). Du hittar mer information angående installationen på sidan [Installing Node.js and updating npm](https://docs.npmjs.com/getting-started/installing-node).

<Hint type="warning"><b>OBS!</b> Var noga med att se till att du i installationen väljer att installera versionen <i>Current</i> (och inte <i>LTS</i>) av Node.js; se även till att installera npm.</Hint>

## Steg 2. Öppna ett terminalfönster

Öppna ett terminalfönster (Bash).

<details>
  <summary>Windows</summary>

Bash installerades när du installerade Git. Sök efter och välj Git Bash.

![assets_search-git-bash-win](https://gitlab.lnu.se/instructions/get-started/-/wikis/uploads/8a54776e5eefcf4fe1ae6b528b791e6c/assets_-LHI2OtWMVXv7Nf7dYAi_-LHI2U_UvHzjO4pKREwy_-LHI2Vsx9kD2frMMuvBV_search-git-bash-win.gif)
</details>

<details>
  <summary>macOS</summary>

Bash är en del av din plattform från början. Sök efter och välj Terminal, som är applikationen du ska använda.

Kan du inte hitta terminalen? Ta en titt på [How to Get to the Command Line on a Mac](https://www.wikihow.com/Get-to-the-Command-Line-on-a-Mac).

Rekommenderad läsning: [How to use Terminal on Mac](https://www.macworld.co.uk/how-to/mac-software/how-use-terminal-on-mac-3608274/).
</details>

<details>
  <summary>Linux</summary>

Bash är en del av din plattform från början. Sök efter och välj Terminal, som är applikationen du ska använda.

Kan du inte hitta terminalen? Ta en titt på [How to Open a Terminal Window in Ubuntu](https://www.wikihow.com/Open-a-Terminal-Window-in-Ubuntu).
</details>

## Steg 3. Kontrollera versionen av Node.js

Ta reda på Node.js version med kommandot `node --version` som du skriver i terminalfönstret.

```bash
node --version
```

Exempelutskrift (beroende på version av Node.js, och din plattform, kan utskriften variera):

```bash
v14.9.0
```

## Steg 4. Kontrollera versionen av npm

Ta reda på npms version med kommandot `npm --version` som du skriver i terminalfönstret.

```bash
npm --version
```

Exempelutskrift:

```bash
6.14.5
```

## Steg 5. Klart!

Nu är allt klart för att du ska kunna börja arbeta med Node.js och npm.
