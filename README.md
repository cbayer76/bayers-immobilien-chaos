# Hausverwaltung

Seniorenfreundliche, deutschsprachige Bedienvorschau für eine geplante Desktop-Anwendung. Eigenständiges Projekt; keine Verbindung zu anderen Anwendungen.

## Vorschau

Statische Dateien unter `dist/`. `dist/index.html` kann direkt im Browser geöffnet oder mit GitHub Pages veröffentlicht werden. Keine Installation und keine externen Abhängigkeiten.

Enthalten: vier große Hauptbereiche, Haus- und Wohnungsansicht, Mietzahlungen mit Teil- und Überzahlungen, Rechnungserfassung, vereinfachte dreistufige Beispielabrechnung, Drucken/PDF über den Browser und Rückgängig-Funktion.

## Grenzen

Dies ist eine interaktive Vorschau mit erfundenen Daten, keine fertige Verwaltungssoftware. Änderungen existieren ausschließlich im Arbeitsspeicher bis zum Neuladen. Keine echten Mieterdaten eingeben. Keine dauerhafte Speicherung, Beleguploads, Bank-/CSV-Anbindung, Backups oder installierbare Desktop-Paketierung implementiert. Stammdaten sind in der Vorschau nur lesbar.

Die Beispielabrechnung verteilt ausgewählte Kosten nach Wohnfläche und berücksichtigt manuell eingetragene Vorauszahlungen. Sie ist keine fachlich geprüfte Nebenkostenabrechnung. Heizkosten, Verbrauch, Mieterwechsel und individuelle Verteilerschlüssel benötigen eine spätere Implementierung und Prüfung.

Das Zielkonzept steht in `Konzept.md`.
