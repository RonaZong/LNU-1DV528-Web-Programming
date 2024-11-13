---
title: "Att komma igång med en övningsuppgift"
metaTitle: "1DV025 | Komma igång med övningsuppgift"
metaDescription: "metaDescription"
---

import Hint from 'components/mdxComponents/Hint'

Här hittar du anvisningar som visar dig steg för steg de moment du är tvungen att utföra för att hämta hem en övningsuppgift så att du kan arbeta med den i ditt egna privata repo för övningsuppgifter.

<Hint type="warning">
<strong>Kontrollera att du gjort nedanstående innan du påbörjar denna guide</strong>
<ul>
  <li>Git är installerat och konfigurerat</li>
  <li>Node.js och NPM är installerat</li>
  <li>Visual Studio Code är installerat</li>
  <li>SSH-nycklar är skapde och dess publika nykel tillagd till GitLab</li>
  <li>Du är inloggad på <a href="https://gitlab.lnu.se">GitLab</a></li>
</ul></Hint>

## Steg 1. Välj övningsuppgift

På sidan [Övningsuppgifter, Delkurs A](/02-ovningsuppgifter/delkurs-a) eller [Övningsuppgifter, Delkurs B](02-ovningsuppgifter/delkurs-a) hittar du länkar till de olika övningsuppgifterna på GitLab. Välj exempelvis övningsuppgift [Hello World](https://gitlab.lnu.se/1dv025/content/exercises/module-a/exercise-hello-world) genom att klicka på dess länk.

## Steg 2. "Forka" övningsuppgiften till din "Exercises"-mapp

### 2.1 
Klicka på "Fork" uppe i högra hörnet på övningsuppgiften för att kopiera övningsuppgiften.

### 2.2
 I listan av möjliga ställen (namespace) att placera din kopia av övningsuppgiften, välj `Client-side Web Programming (1DV025) / Student Projects / {ditt användarnamn} / Exercises`

## Steg 3. Klona övningsuppgiften till din dator

Nu har du en kopia av övningsuppgiften (inkl. instruktioner och lösningsförslag). I denna kopia kan du helt fritt laborera med övningsuppgiften. Men först behöver vi hämta hem den till den lokala datorn.

### 3.1

Klicka på "Clone" och kopiera texten under "Clone with SSH".

### 3.2

Öppna ett terminalfönster (Bash) på din dator.

### 3.3

Byt till en katalog i vilken du vill lägga dina övningsuppgifter.

```bash
cd 1dv025/exercises
```

### 3.4.

Klona ner övningsuppgiften.

```bash
git clone git@gitlab.lnu.se:1dv025/student/{DITT ANVÄNDARNAMN}/exercises/exercise-hello-world.git
```

<Hint type="info">Texten efter "git clone" ovan är den text du kopierade under 3.1.</Hint>

## Steg 4. Byt till den skapade katalogen

```bash
cd exercise-hello-world
```

## Steg 5. Verifiera att kataloger och filer hämtats

Kontrollera att katalogen `exercise-hello-world` innehåller kataloger och filer.

```bash
ls -A
```

Exempelutskrift:

```bash
.git/       .readme/      package.json     test/
.gitignore  README.md     src/
```

## Steg 6. Arbeta med filerna

Nu har du kommit så långt att du kan börja arbeta med filerna som finns lokalt på din dator. Till varje övningsuppgift finns en README.md-fil i vilken du hittar instruktionerna för övningsuppgiften.

### 6.1 Visual Studio

Börja med att starta Visual Studio och öppna den katalog i vilken övningsuppgiften ligger.

### 6.2 Ändra i en fil

Nu kan du läsa instruktionerna (README.md) och börja koda. Testa att ändra ditt namn i någon av filerna.

1. Välj filen "hello.js" (Gäller Hello World).
2. Ta bort texten `// TODO: YOUR NAME <YOUR EMAIL>` på rad 7 och ersätt den med ditt namn och mejladress. Exempelvis:

```javascript
* @author Ellen Nu <en999zz@student.lnu.se>
```

### 6.3 Spara

Spara filen.

## Steg 7. Versionshantera

### 7.3 Spåra ändringen

Du behöver nu tala om för versionshanteraren Git att du vill att den förändring du nyss gjorde ska tas med i nästa version av övningsuppgiftens historik.

```bash
git add .
```

### 7.4 Lagra ändringarna

Vi fastslår förändringarna och skriver ett "commit"-meddelande som talar om vad denna förändring gör.

```bash
git commit -m "Add name and email of author"
```

<Hint type="info">Tips på hur dina "commit"-meddelanden bör vara utformade hittar du här, <a href="https://gitlab.lnu.se/instructions/students/get-started/-/blob/master/git-commit-messages.md">Git commit messages</a>.</Hint>

### 7.5 Synkronisera dina ändringar

Ändringarna du gjort nu ligger fortfarande lokalt på din dator. För att skicka dessa till GitLab skriv:

```bash
git push
```

Exempelutskrift:

```bash
Counting objects: 15, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (13/13), done.
Writing objects: 100% (15/15), 4.69 KiB | 0 bytes/s, done.
Total 15 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
To git@gitlab.lnu.se:1dv025/student/exempelstudent/exercises/exercise-hello-world.git
   bc0d25e..1846bc5  master -> master
```

Dina ändringar finns nu på din övningsuppgift på Gitlab. Gå dit och titta efter!

## Steg 8. Få tips på lösning?

När du är på GitLab kan du passa på att klicka på nedrullningsmenyn i vilken det står "master". Där hittar du alla förgreningar (branches) av koden. Klickar du på "solutions" så byter du över till lösningsförslaget på uppgiften och du kan gå in i `hello.js` för att se hur en lösning kan se ut.
