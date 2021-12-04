---
title: "Arbeta med examinationsuppgifter"
metaTitle: "1DV025 | Komma igång med examinationsuppgift"
metaDescription: "metaDescription"
---

import Hint from 'components/mdxComponents/Hint'
import Youtube from 'YoutubeEmbed'

Här hittar du steg-för-steganvisningar om hur du kommer igång med arbetet med examinationsuppgifterna i kursen. 

## 1. Kom igång med uppgiften
Det första du behöver göra är att klona ner din examinationsuppgift som du hittar i din grupp i kursen på Gitlab. (Ex: https://gitlab.lnu.se/1dv025/student/ln222xx)

Gå in i det aktuella examinationsprojektet och välj "Clone". 

På din dator navigerar du till den katalog där du vill spara uppgiften. Exempelvis:
```bash
$ cd kurser/1dv025/examination
```

Hämta sedan hem uppgiften från gitlab genom:
```bash
$ git clone git@gitlab.lnu.se:1dv025/student/ln222xy/assignment-a2-descriptive-statistics.git
```
där ln222xy ersätts av ditt användarnamn och assignment-a2-descriptive-statistics.git är namnet på examinationsuppgiften.

Byt katalog till examinationsuppgiften. Ex:
```bash
$ cd asignment-a2-descriptive-statistics
```

För att komma igång behöver vi installera de externa beroenden som uppgiften har. Gör:

```bash
$ npm install
```

## 2. Arbetsgång med examinationsuppgiften
Nu är det dags att börja arbeta med uppgiften. Du gör detta genom att editera befintliga filer och eventuellt skapa nya filer beroende på uppgift. Instruktioner hittar du i uppgiftens README.md-fil.

### 2.1. Köra din kod
Om du vill exekvera, köra, ditt program gör du det med
```bash
$ npm start
```

### 2.2. Kodstandard
Det är viktigt att kodstandarden följs. Denna veriferar att koden är läsbar och att ex. kommentarer har skrivits.
Testa om koden uppfyller kodstandarden genom kommandot:
```bash
$ npm run lint
```

För att försöka automatiskt korrigera vissa stilfel kan du skriva:
```bash
$ npm run lint:fix
```

### 2.3. Testning
På vissa uppgifter finns det färdigskrivna tester som vi kan kontrollera vår lösning mot. Om detta finns så körs testerna genom:
```bash
$ npm test
```

## 3. Inlämning via Merge Request
För att lämna in uppgiften är det viktigt att du nogrant följer nedanstående instruktioner. Du kommer då att göra inlämningen i form av en "Merge request". Vid bedömningen kommer kursledningen att göra en kodgranskning (Code Review) och resultetet kommuniceras enligt:

* (G) Godkänd på uppgiften kommuniceras genom att mergeförfrågan godkänns och kodbasen sammfogas med grenen (branch) "release".
* (Fx) Mindre fel som efter åtgärd leder till godkänt kommuniceras i den fortsatt öppna mergeförfrågan. Diskussion kan föras direk i mergeförfrågan i form av kommentarer. 
* (U) Om uppgiften är underkänd så stängs mergeförfrågan utan att godkännas och du behöver lämna in uppgiften på nytt vid nästa deadline för förnyad examination.

<Youtube link="https://www.youtube.com/embed/aV_7q5PpztM" />

### 3.0 Förberedelse
När du anser dig vara klar med uppgiften så kontrollerar du:

1. Samtliga obligatoriska krav på uppgiften är uppfyllda
2. Koden följer kodstandarden (npm run lint)
3. Eventuella tester är uppfyllda (npm test)
4. Senaste kodbasen finns på GitLab (git push)
5. Du har stängt alla issues du genomfört men inte de du inte genomfört.

### 3.1 Starta en ny Merge Request
Starta en ny "Merge Request" (MR) på Gitlab genom att:

1. Navigera till din uppgifts projektöversikt.
2. Klicka på "Merge Request" i vänstermenyn.
3. Välj "New merge request"
4. Välj "master" som source branch och "release" som target branch.
5. Klicka på "Compare branches and continue"

### 3.2 Fyll i formuläret "New Merge Request"
Fyll i formuläret enligt:

1. **Title:** `SUBMIT: Assignment {UPPGIFTSNUMMER}` där {UPPGIFTSNUMMER} ersätts med uppgiftens nummer. Exempelvis A2.
2. **Description** Välj template `RELEASE`
3. Fyll nu i uppgiftsrapporten genom att kryssa i kryssrutorna med ett "x" enligt exemplet "I have started working on the assignment."
4. Om du stängt alla ISSUES du gjort (3.0.5) behöver du inte fylla i datum bredvid varje ISSUE i tabellen. Om du inte stängd dina issues så måste du göra detta så att examinatorn kan få en överblick över vilka krav som är genomförda.
5. I slutet (Assignment report) har du möjlighet att ge dina personliga reflektioner kring uppgiften samt ge feedback till kursledningen.
6. **Assignee:** Lämnas `Unassigned`.
7. **Milestone:** Här anger du det examinationstillfälle som inlämningen avseer. I normalfallet är det nästkommande examinationstillfälle. Väl rätt uppgift och datum.
8. **Labels:** Välj `Submitted`
9. **Merge request dependencies:** lämnas oförändrad.
10. **Approval rules:** lämnas oförändrad.
11. **Merge options:** lämnas oförändrad.

### 3.3 Genomför inlämningen
Genomför nu inlämningen genom att klicka på **"Submit merge request"**.

Nu händer följande:
1. En ny pipeline med tester börjar köras. Dessa tester kan vara samma som du tidigare kört men kan även innehålla ytterligare tester.
2. Pipelinen testar också att kodstandarden uppgfylls. (på samma sätt som lokalt)
3. Pipelinen testar till sist att inlämningen gjorts innan deadlinen passerat. Om deadline passerat så ser examinatorn detta och meddelar om du behöver göra en ny inlämning vid nästa deadline.

_OBS! När du lämnat in uppgiften så ska du inte stänga merger requesten eller godkänna denna. Bara låt den vara som den är._

### 3.4 Lös eventuella konflikter. (Temporärt)
På första examinationsuppgiften A2, så finns det en risk att det uppstår smärre konflikter som gör att det inte kommer gå att automatiskt godkänna mergeförfrågan. _Troligtvis har du också fått ett mail som säger något liknande: "Merge Request !1 can no longer be merged due to conflict" som en bekräftelse på detta._ För att underlätta för kursledningen vore det därför supersnällt om du löste dessa konflikter:

1. Bläddra ner på sidan över sammanfattningen av din Merge Request. 
2. Där det står "There are merge conflicts" klicka på `Resolve conflicts`
3. Välj vilka ändringar som ska gälla. Klicka på den gröna `Use ours` för att lösa alla eventuella konflikter.
4. Nu ska det gå att klicka på "Commit to source branch" längst ner op sidan. (Om inte har du missat att klicka på någon av `Use ours`)
5. Du bör mötas av meddelandet "All merge conflicts were resolved. The merge request can now be merged" och du är klar med inlämningen.
6. Gör en `git pull` lokalt på din dator så att denna är i synk med Gitlab.

### 3.5 Buggfixar med mera efter inlämning
Det är inte ovanligt att du inser att din kod har mindre buggar eller skönhetsfel som du vill åtgärda efter inlämningen genomförts. Du kan då fortsätta att göra commits precis som vanligt i ditt projekt och dessa läggs automatiskt till i inlämningen och bedöms av examinatorn. Om du dock gör en förändring efter deadline så kommer hela inlämningen att flaggas som "Inlämnad efter deadline" så undvik om möjligt detta.
