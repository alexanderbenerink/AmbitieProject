# Ambitie Project
<p align="center"><img src="https://i.imgur.com/8P8yYJ8.png" width="300" height="300"></p>

### Beschrijving

Het project wordt gerealiseerd in Vue.JS - een JavaScript framework - en Bulma, een CSS framework. Dit is voor het vak "Ambitieproject" tijdens het derde leerjaar van mijn opleiding (Applicatie- en Mediaontwikkeling MBO-4). 

Door Alexander Benerink.

### Doel:

Het doel van het project is om een uitdaging voor jezelf te verzinnen en het te realiseren. Er wordt gekeken naar de voortgang van het project, de documentatie en de leerdoelen en ontzorging die je hebt bereikt voor jezelf d.m.v. dit project.

# Installatie

### Pre-Installatie

Zorg dat Node.JS en NPM (Node Package Manager) is geinstalleerd.

### Installatie
* Navigeer naar de project directory via CMD of Terminal
* In de directory run in CMD het commando
```
    npm install @vue/cli-service
```
* Vervolgens run je in de directory het commando
```
    npm run serve 
```
* Navigeer naar het URL dat aangegeven wordt in de terminal

#### Voor het fixen van (lint) issues

```
npm run lint
```

### Fixes voor installatie problemen
Het kan voorkomen dat er problemen bij de installatie voorkomen (geen sass, sassloader of missende node modules).
Om dit te fixen kun je de volgende commandos uitvoeren in CMD (binnen de directory van het project):

```
npm install -g @vue/cli
```

```
npm install bulma
```

```
npm install sass
```
en/of (nog niet geprobeerd)

```
npm install -g vue
```
Maar als het goed is HOORT er geen probleem te zijn nadat de vue-cli-service is geinstalleerd.

# Goals

Hieronder een aantal punten die ik terug zou willen zien in dit project voor in de toekomst:

- Zo veel mogelijk gebruikersvriendelijk maken.

Op dit moment zijn er een aantal componenten op pagina's ge-'hardcode' (Projecten, Media). Omdat deze site een JAMstack is en ik het op netlify host, zijn mijn opties gelimiteerd tot het gebruik van Airtable (of alternatieve varianten) of FaunaDB, om extern de componenten gebruiksvriendelijk te kunnen manipuleren.

- Zo veel mogelijk opschonen en optimaliseren (richtlijn site niet meer dan 1mb-3mb totaal, html verzoeken onder of rond de 20 houden).

- Blog/artikelen systeem met tags maken waar ik bevindingen/tutorials/updates kan neerzetten.

- Voeg een snelmenu en evt topic cloud (tags voor blog) toe aan home?
