# Hausverwaltung – Konzept

## Ziel

Eine Desktop-Anwendung zur Verwaltung mehrerer Miethäuser mit mehreren Wohneinheiten. Sie richtet sich besonders an Senioren mit wenig Computererfahrung. Einfach verständliche Bedienung hat Vorrang vor vielen Zusatzfunktionen.

Status: Das Konzept ist festgehalten. Die Anwendung ist noch nicht implementiert. Betriebssystem und technische Umsetzung sind noch festzulegen.

## Grundstruktur

Haus → Wohneinheit → Mietverhältnis.

- Haus: Bezeichnung, Adresse und Ansprechpartner.
- Wohneinheit: Wohnungsnummer, Etage, Wohnfläche und Vermietungsstatus.
- Mietverhältnis: Mieter, Kontaktdaten, Mietbeginn und Mietende, Kaltmiete, Nebenkostenvorauszahlung und Kaution. Frühere Mietverhältnisse und Änderungen der Miethöhe bleiben nachvollziehbar.

## Startseite: vier große Schaltflächen

### 1. Häuser und Wohnungen

Haus auswählen, Wohnung anklicken und zugehörige Mieterdaten ansehen oder bearbeiten. Mieterwechsel zeitlich dokumentieren. Kautionen mit vereinbartem Betrag, Zahlung und Rückzahlung separat von Mieteinnahmen führen.

### 2. Mietzahlungen

- Monat auswählen und fällige mit tatsächlich eingegangenen Zahlungen vergleichen.
- Geldeingänge einem Mietverhältnis, einer Wohnung und einem Monat zuordnen.
- Bezahlt, teilweise bezahlt, offen und Überzahlungen verständlich anzeigen.
- Zahlungen manuell erfassen; einen geführten CSV-Import für Kontoauszüge vorsehen.
- Einnahmen und offene Beträge je Wohnung, je Haus und insgesamt anzeigen.
- Nebenkostenvorauszahlungen sowie Nachzahlungen und Guthaben nachvollziehen.

### 3. Rechnungen erfassen

- Haus und gegebenenfalls Wohnung auswählen.
- Datum, Betrag, Kostenart und zugehörigen Zeitraum eingeben.
- Rechnung oder Beleg hinzufügen.
- Einmal erfasste Daten für Ausgabenübersicht und Nebenkostenabrechnung wiederverwenden.
- Die Behandlung einer Ausgabe in der Abrechnung muss prüfbar sein; nicht jede Hausausgabe wird automatisch auf Mieter verteilt.

### 4. Nebenkosten abrechnen

Ein geführter Ablauf mit jeweils wenigen Eingaben:

1. Haus und Abrechnungszeitraum auswählen.
2. Rechnungen und Kostenarten prüfen.
3. Verteilerschlüssel und benötigte Werte prüfen oder ergänzen.
4. Zählerstände beziehungsweise Verbrauchswerte mit Datum erfassen; Fotos können ergänzt werden.
5. Mietzeiträume bei Mieterwechseln und tatsächlich geleistete Vorauszahlungen berücksichtigen.
6. Ergebnis pro Mietverhältnis mit Kostenanteilen, Vorauszahlungen und Nachzahlung oder Guthaben prüfen.
7. Abrechnung als PDF speichern und drucken.

Berechnungsgrundlagen müssen sichtbar und fehlende Angaben konkret benannt sein. Vor der Implementierung sind die fachlichen Berechnungsregeln, insbesondere für Heizkosten und Mieterwechsel, zu konkretisieren und zu prüfen.

## Bedienung

Auf jeder Ansicht steht oben ein Umschalter zwischen Senioren-Version und Standard-Version. Die Senioren-Version ist beim ersten Besuch voreingestellt. Die Wahl wird auf dem jeweiligen Gerät gespeichert. Beide Ansichten bieten dieselben Funktionen und Daten; ein Wechsel erhält laufende Eingaben. Die Standard-Version verwendet kompaktere Abstände und eine dichtere Übersicht. Neue Funktionen werden grundsätzlich für beide Ansichten vorgesehen.

- Desktop-Oberfläche mit großer, gut lesbarer Schrift und starken Kontrasten.
- Große, beschriftete Schaltflächen; Status nicht ausschließlich durch Farben vermitteln.
- Einheitliche Anordnung und wenige Entscheidungen je Bildschirm.
- Verständliche deutsche Begriffe, keine vorausgesetzten Fach- oder Computerkenntnisse.
- Keine versteckten Menüs und keine alleinstehenden, unverständlichen Symbole.
- Gut sichtbare Navigation zurück und zur Startseite.
- Automatisches Speichern mit sichtbarer Rückmeldung.
- Versehentliche Änderungen rückgängig machen können.
- Konkrete Hinweise wie „Bitte noch die Wohnfläche eintragen“.
- Geführte Eingaben und eine übersichtliche Prüfung vor dem Erstellen einer Abrechnung.

## Datensicherung und Ausgabe

Datenexport und automatische Sicherungen von Anfang an einplanen. Die Wiederherstellung soll verständlich zugänglich sein. Speicherort, Sicherungsziel und Umgang mit personenbezogenen Daten sind vor der Umsetzung festzulegen.

## Vorerst nicht im Umfang

Ein Aufgabenbereich wird zunächst weggelassen. Direkte Bankanbindung, Mieterportal, automatische Belegerkennung, Mahnwesen, Wartungsverwaltung und umfangreiche Zugriffsrollen bleiben mögliche spätere Erweiterungen. Sie sollen die erste Oberfläche nicht überladen.

## Nächster Umsetzungsschritt

Zielbetriebssystem klären und einen einfachen klickbaren Entwurf der vier Hauptbereiche erstellen. Die Bedienung anhand eines Beispielhauses mit wenigen Wohnungen prüfen, bevor die vollständige Anwendung umgesetzt wird.
