---
date: "2042-01-01"
title: "SRS Guide"
summary: "En snabb guide för hur du kommer igång med vår SRS instans."
description: "En snabb guide för hur du kommer igång med vår SRS instans."
tags:
- "Nyheter"
- "Guide"
author: "Nabel"
published: false
image: "/images/Logo-ASG_Svart&Vit.png"
---

# Intro
Vi använder SRS för att kummunicera effektivare under events. SRS ger oss möjligheten att förberreda flera paralella kanaler för att kommunicera så att de som medverkar under events kan kommunicera med de i deras direkta grupp och med andra grupper eller befäl.

## Om SRS
SRS står för SimpleRadioStandalone och har utveckalts för DCS. SRS är gratis att använda och finns tillgängligt via en GNU 3.0 licens på Github: [SRS Github repo](https://github.com/ciribob/DCS-SimpleRadioStandalone)

Vi har anpassat SRS för våra behov i Asgard.

## Installation & kom igång
Vi har en preppad installation av SRS för att komma igång snabbare, du hittar den och vår server information på vår dedikerade discord tråd: [Asgard Discord SRS Tråd](https://discord.com/channels/308968482480062464/1162392609554174114)

| Steg | Instruktion | Bild |
|--|--|--|
| 1. | Ladda ner ASG_SRS.zip |  |
| 2. | Packa upp ASG_SRS.zip |  |
| 3. | Starta SRS via **SR-ClientRadio.exe** |  |
| 4. | Verifiera att server detaljerna stämmer överens, att EAM coalition password är inmatat och ditt Nickname står under EAM Name. | ![Startad klient](/images/SRS/SRS_General.webp) |
| 5. | Klicka **Connect** och **connect external awacs mode (eam)**. Du ska nu se att VoIP och Game längst ner i fönstret lyser grönt. | ![Ansluten klient](/images/SRS/SRS_General_Connected.webp) |
| 6. | Klicka **toggle radio overlay** för att sätta upp kanaler. Nu ser du ett grått fönster med fem identiska sektioner, dessa simulerar var sin radio. | ![Radio inställningar](/images/SRS/SRS_Radio.webp) |
| 7. | Här kan du ändra vilken frekvens en radio har via slidern i botten, ändra freqvensen genom att klicka på de ovala knapparna ovan och under svara rutan eller ändra kanal genom att klicka på "Ch." fliken. Du kan ändra vilken radio som är aktiv genom att klicka på en av de oranga cirklarna. | ![Radio detaljer](/images/SRS/SRS_Radio_Details.webp) |
|  | **Detaljer för vilken freqvens, kanal osv du ska använda kommer finnas i brief informationen för eventet.** |  |


## Inställningar
| Typ | Instruktion | Bild |
|--|--|--|
| Keybinds | SRS använder Push-to-talk för att kommunicera över en radio. Jag rekommenderar  att sätta "Push To Talk - PTT" till en knapp du även har Push To Mute knyten till i Discord. Sen att du har en keybind per radio för att byta mellan dessa. | ![Radio detaljer](/images/SRS/SRS_Controls.webp) |
| Ljud | För att hjälpa identifiera vilken grupp/radio som ljud kommer ifrån (speciellt om du har flera) så rekommenderas att du tvingar specifik radio från att höras i båda öronen samtidigt likt bilden. | ![Radio detaljer](/images/SRS/SRS_Settings_Audio.webp) |
| Ljud | Det finns ljud-effekter (för radio-simulering) i SRS som kan vara störande, här kan du stänga av det. | ![Radio detaljer](/images/SRS/SRS_Settings_Effects.webp) |