# Erweiterte Demoversion

## Bedienbare Funktionen

- Senioren- und Standardansicht mit gleicher Funktionalität.
- 3 Häuser, 20 Wohnungen und 20 ursprüngliche Mietverhältnisse. Demobuchungen für 2025 und Januar bis September 2026 bleiben erhalten.
- Mietverhältnisse anlegen und bearbeiten, Ein-/Auszug, Historie, Leerstand und anteilige Monatsmieten nach Kalendertagen. Überschneidende Mietzeiträume werden abgewiesen. Geänderte Mietbeträge gelten für den gesamten bearbeiteten Mietzeitraum, nicht erst ab einem automatisch angelegten Änderungsdatum.
- Einzugs-/Auszugschecklisten je Mietverhältnis mit Notizen und bearbeitbaren Standardvorlagen für zukünftige Checklisten. Keine allgemeine Aufgabenverwaltung.
- Kautionseingänge, Raten, Rückzahlungen und dokumentierte Einbehalte mit Belegen, getrennt von Mieteinnahmen. Rückzahlung/Einbehalt kann den verwahrten Betrag nicht überschreiten.
- Zahlungserinnerungen als PDF-Entwürfe, nur bei positivem Restbetrag. Kein Versand, keine automatisch berechneten Mahngebühren.
- Vertragsfristen mit manuell geprüften Kündigungsterminen und Hinweisen beim Öffnen der App. Keine Hintergrundbenachrichtigung und keine Kündigung.
- Bankabgleich mit erfundenen Umsätzen oder CSV-Import, Vorschlag anhand des Mieternamens und verpflichtender Bestätigung, kontrollierter Aufteilung, Schutz gegen erneute Übernahme derselben Umsatz-ID. Keine aktive Bankverbindung, kein Zahlungsverkehr.
- Belegerkennung für Text, Text-PDF und Bilder/Scans. Erkennung im Browser, Originaldatei bleibt lokal. Tesseract lädt OCR-Kern und deutsche Sprachdaten beim ersten Einsatz von öffentlichen CDNs. PDF maximal 10 Seiten, Datei maximal 10 MB. Vor Übernahme müssen Felder geprüft werden. Dateihash und Kombination Lieferant/Rechnungsnummer/Betrag dienen der Dublettenprüfung.
- Steuerberater-ZIP mit zusätzlichen Buchungsvorschlägen, manuell konfigurierbaren Konten, Mietverhältnissen und separatem Kautionsjournal. Kein bestimmtes DATEV-Format, keine bestätigte Kontierung und kein automatischer Versand.

## Nebenkostenabrechnung

- Pro Haus und Jahr konfigurierbare Kostenarten, Eigentümerabzüge und Verteilerschlüssel.
- Wohnfläche oder Wohneinheiten mit Mietdauer, tatsächlicher Verbrauch je Nutzungszeitraum oder übernommene Dienstleister-Einzelanteile.
- Mietwechsel und Leerstand als separate Abrechnungsabschnitte. Leerstandskosten verbleiben beim Eigentümer. Verbrauch wird nicht zusätzlich zeitanteilig gekürzt.
- Tatsächlich erfasste Nebenkosten-Zahlungsanteile nach zugeordnetem Mietmonat und Mietverhältnis. Ungeklärte Zuordnungen müssen vor Erstellung aufgelöst werden.
- Ablesewerte, positive Gesamtverbräuche, Überschneidungen, Eigentümerabzüge, Dienstleister-Summen und Centausgleich werden geprüft. Änderungen an Rechnungen bzw. Miet-/Zahlungsdaten verlangen einen erneuten Abgleich bzw. eine erneute Bestätigung.
- Nachvollziehbare Einzel-PDFs und PDF-Sammelpaket als ZIP. PDFs sind als Demo gekennzeichnet.
- Heiz-/Warmwasserkosten werden ausschließlich als geprüfte externe Einzelanteile übernommen. Keine eigene vollständige Heizkosten-/CO₂-Berechnung. Reparaturen sind ausgeschlossen. Vertragliche Zulässigkeit, Leistungszeitraum, Kostenumfang, steuerliche sowie weitere rechtliche Sonderfälle werden nicht automatisch geprüft.

Fachliche Bezugspunkte:

- https://www.gesetze-im-internet.de/bgb/__556a.html
- https://www.gesetze-im-internet.de/heizkostenv/__7.html
- https://www.gesetze-im-internet.de/heizkostenv/__9b.html

## Sicherung und noch offene Anschlüsse

Automatische lokale Wiederherstellungspunkte (maximal fünf), vollständige Sicherung mit Dokumenten als verschlüsselte Datei und passwortgeschützte Wiederherstellung sind umgesetzt. Export: AES-GCM mit PBKDF2/SHA-256, zufälligem Salt/IV und 200.000 Iterationen. Das Passwort wird nicht gespeichert.

**Die gemeinsame zentrale Speicherung ist noch nicht angeschlossen.** Lokale Browserdaten und lokale Wiederherstellungspunkte ersetzen keinen externen Speicher. Ein privater Cloud-Speicher und dessen Zugriffsschutz müssen festgelegt werden. Die Nutzerentscheidung hierzu wurde angefragt. Ebenso fehlen für echte Bankdaten Bankanbieter/Autorisierung und für einen fertigen Kanzleiimport das abgestimmte Format/Kontenprofil.

Die abgelehnten individuellen Benutzerrollen, Dokumentenversionierung und das allgemeine Aufgabenboard wurden nicht eingebaut. Keine installierbare Desktop-Paketierung; weiterhin eine Web-Demo ohne Produktionsfreigabe.

## Papierkorb

- Häuser, Wohnungen, Mietverhältnisse, Mietzahlungen, Rechnungen, Verträge und Kautionsbewegungen lassen sich mit Bestätigung in den Papierkorb verschieben.
- Wahlweise 30 oder 90 Tage Aufbewahrung, standardmäßig 90 Tage. Änderungen gelten für zukünftige Löschungen.
- Zugehörige Datensätze, Dokumente und Checklisten werden gemeinsam verschoben und wiederhergestellt. Gelöschte Daten fehlen in laufenden Auswertungen.
- Wiederherstellung prüft fehlende übergeordnete Objekte, doppelte Kennungen, überschneidende Mietverhältnisse und Zahlungs-/Kautionskonflikte.
- Abgelaufene Einträge werden beim nächsten Öffnen oder Bedienen entfernt. Frühere Sicherungen können weiterhin Kopien enthalten; keine serverseitige Löschung im Hintergrund.
- Wiederherstellung eines kompletten Hauses einschließlich Dokumenten, 30-/90-Tage-Fristen und Konfliktfälle sind durch Modultests geprüft.

## Prüfung

- Integrierte Modultests für Ansichten, Demo-Summen, Schaltjahr, Wechsel mitten im Monat, Überschneidung, Leerstand, Centverteilung, Verbrauchsfehler, Dienstleister-Summen, Vorauszahlungen, Kautionen, CSV/Dubletten, Exporte, verschlüsselte Sicherung mit Dokumenten und falsches Passwort.
- Lokale Sicherungsverwaltung mit simulierter IndexedDB-Schnittstelle geprüft; keine Behauptung einer echten Cloud-Speicherung.
- OCR-Engine mit einer gerenderten erfundenen Rechnung geprüft: Rechnungsnummer und deutscher Dezimalbetrag korrekt erkannt. Keine vollständige Browser-/Gerätekompatibilitätsprüfung.
- Erzeugte zweitseitige Abrechnungs-PDF textlich und visuell geprüft. ZIP-Export auf Archivfehler geprüft.
