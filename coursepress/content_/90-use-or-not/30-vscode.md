---
title: "Visual Studio Code - utvecklingsverktyg"
metaTitle: "1DV025 | Visual Studio Code"
metaDescription: "metaDescription"
---

import Hint from 'components/mdxComponents/Hint'

Visual Studio Code är en enkel men kraftfull utvecklingsverktyg, som körs på skrivbordet, för redigering av källkod och är tillgänglig för Linux, macOS och Windows. Den levereras med inbyggt stöd för JavaScript och Node.js och har ett rikt ekosystem med tillägg för många andra språk.

<Hint type="info"><p>Redan nyfiken på vad Visual Studio Code egentligen är? För att få reda på mer läs <a href="https://code.visualstudio.com/docs">https://code.visualstudio.com/docs</a>.</p>

<p>Du är fri att använda annat utvecklingsverktyg än Visual Studio Code. Dock kommer vi i guider och vid handledning använda Visual Studio Code.</p></Hint>

## Steg 1. Installera Visual Studio Code

Hämta hem och installera Visual Studio Code för din plattform, [Linux](https://code.visualstudio.com/docs/setup/linux), [Mac](https://code.visualstudio.com/docs/setup/mac) eller [Windows](https://code.visualstudio.com/docs/setup/windows). Läs mer allmänt om hur du kan gå till väga på [https://code.visualstudio.com/docs/setup/setup-overview](https://code.visualstudio.com/docs/setup/setup-overview).

## Steg 2. Starta Visual Studio Code

Sök efter och starta Visual Studio Code på din plattform.

## Steg 3. Installera tillägget ESLint

Öppna __Quick Open__ (`Ctrl+P`, `Cmd+P`) i Visual Studio Code och lägg till följande kommando och tryck på enter-tangenten.

```shell
ext install ext install dbaeumer.vscode-eslint
```

<Hint type="info">Gå till <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint</a> för mer information om tillägget <i>ESLint</i>.</Hint>

## Steg 4. Installera tillägget gi

Öppna __Quick Open__ (`Ctrl+P`, `Cmd+P`) i Visual Studio Code och lägg till följande kommando och tryck på enter-tangenten.

```bash
ext install gi
```

<Hint type="info">Detta tillägg använder du för att skapa och underhålla .gitignore-filer. Tillägget använder gitignore.io, <a href="https://www.gitignore.io/">https://www.gitignore.io/</a>, en tjänst du även kan använda direkt online (eller köra från kommandoraden i ett terminalfönster).</Hint>

## Steg 5. Andra intressanta tillägg

Det finns en stor mängd tillägg som kan vara intressant för dig att installera. Några skulle kunna vara:

- [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis), `ext install docthis`
- [npm Intellisens](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense), ext install npm-intellisense
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons), ext install vscode-icons

## Steg 6. Klart!

Nu är allt klart för att du ska kunna börja arbeta med Visual Studio Code. För en genomgång av Visual Studio Code rekommenderas följande resurser:

- [Introductory Videos](https://code.visualstudio.com/docs/getstarted/introvideos)
- [User Interface](https://code.visualstudio.com/docs/getstarted/userinterface)
- [Intergrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
- [JavaScript in VS Code](https://code.visualstudio.com/docs/languages/javascript)
- [Node.js Tutorial in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial) (fram till och med rubriken Express Tutorial)
- [Debugging](https://code.visualstudio.com/docs/editor/debugging)
