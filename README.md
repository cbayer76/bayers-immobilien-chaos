# Bayers Immobilien Chaos Webseite

Deutschsprachige Web-Demo mit Senioren- und Standardansicht für die Verwaltung von Miethäusern.

Die aktuelle Funktionsbeschreibung, Prüfungen und offenen Anschlüsse stehen in [DEMOVERSION.md](DEMOVERSION.md). Entscheidungen sind in [Backlog.md](Backlog.md) dokumentiert.

## Demodaten

3 Häuser, 20 Wohnungen, 20 ursprüngliche Mietverhältnisse, 419 Mieteingänge, 201 Rechnungen und 9 Musterverträge. Ausgangsdaten: vollständiges Jahr 2025 sowie Januar bis September 2026. Alle Personen und Belege sind erfunden.

## Neue Abläufe

Mietverhältnisse und Checklisten, Kautionsbewegungen, Zahlungserinnerungs-PDFs, Vertragsfristen, CSV-Bankabgleich, Belegerkennung, erweiterter Kanzlei-Export sowie Nebenkosten-PDFs mit Verteilerschlüsseln und Mietzeiträumen sind bedienbar.

## Speicher und externe Anschlüsse

Weiterhin lokale IndexedDB-Speicherung. Automatische lokale Wiederherstellungspunkte und verschlüsselte Sicherungsdateien sind vorhanden. Es gibt noch keine zentrale Cloud-Datenbank oder echte Bankverbindung. Das Kanzleiformat und steuerliche Zuordnungen sind noch abzustimmen. Kein fertiger Jahresabschluss, keine Produktionsfreigabe.

## Entwicklung

Lokal liegen die statischen Dateien unter dist/, im veröffentlichten Repository im Stammverzeichnis. PDF- und OCR-Bibliotheken werden bei Bedarf geladen; Lizenzdateien liegen unter vendor/. OCR lädt beim ersten Einsatz externe Modul- und Sprachdateien, verarbeitet Rechnungen jedoch lokal. PDF-Vorschauen wurden visuell geprüft. Die Modultests ersetzen keine vollständige Browser-/Geräteprüfung.
