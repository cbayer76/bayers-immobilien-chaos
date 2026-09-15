# Bayers Immobilien Chaos Webseite

Seniorenfreundliche, deutschsprachige Bedienvorschau für eine geplante Desktop-Anwendung. Eigenständiges Projekt; keine Verbindung zu anderen Anwendungen.

## Vorschau

Lokal liegen die statischen Dateien unter `dist/`, im GitHub-Repository direkt im Stammverzeichnis. Die Veröffentlichung erfolgt über GitHub Pages. Keine externen JavaScript-Abhängigkeiten. Zum Testen mit Dokumentenspeicherung über HTTP(S) öffnen.

Enthalten: Senioren- und Standardansicht, Haus- und Wohnungsansicht, Mietzahlungen mit Teil- und Überzahlungen, Rechnungserfassung samt Belegen, vereinfachte Beispielabrechnung, Vertragsablage, Jahresdatenexport für die Kanzlei, Monatsstatistik und Jahresverlauf. Die Wahl der Ansicht bleibt auf dem Gerät gespeichert.

Die Demo enthält 3 Häuser mit 7, 7 und 6 Wohnungen, 20 Mietern, 419 Zahlungseingängen, 201 Rechnungen mit Musterbelegen und 9 Musterverträgen. Vollständiges Demo-Jahr 2025 und Januar bis September 2026. Vertrags- und Belegmuster sind deutlich gekennzeichnete Textdateien.

Verträge: Haus, Art, Partner, Nummer, Beginn, Ende, Kündigungsfrist, Jahresbetrag, Notiz und Datei. PDF, PNG, JPEG oder Text bis 10 MB lassen sich lokal ablegen und herunterladen. Auch Rechnungen unterstützen Belegdateien.

Unter Steuerberater-Daten kann nach Jahr und Haus ein ZIP-Paket heruntergeladen werden. Es enthält 7 CSV-Dateien, Belege, Verträge und Erläuterungen. Mietzahlungen werden nach tatsächlichem Zahlungstag ausgewählt; Mietmonat und Zahlungstag bleiben separat. Rechnungs- und Zahlungsdatum werden getrennt ausgewertet. Ungeklärte Zahlungsanteile und fehlende Belege sind sichtbar. Kautionen werden nur als vereinbarte Beträge, nicht als Einnahmen geführt. Vertragsjahresbeträge werden nicht zusätzlich als Ausgaben gezählt.

## Grenzen

Dies ist eine interaktive Demo mit erfundenen Daten, keine fertige Verwaltungssoftware. Keine echten Mieterdaten eingeben. Daten und Dokumente werden mit IndexedDB auf dem jeweiligen Browsergerät gespeichert, sofern verfügbar; Fehler werden angezeigt. Diese Ablage ist keine gemeinsame Büroablage, kein revisionssicheres Archiv und keine automatische externe Sicherung. Kein Login, keine Bank-/CSV-Anbindung und keine installierbare Desktop-Paketierung. Stammdaten sind in der Demo nur lesbar. Rückgängig-Verlauf gilt für die laufende Sitzung.

Der Jahresexport ist eine Vorbereitungsgrundlage, kein fertiger Jahresabschluss oder DATEV-Buchungsstapel. Eigentümer-/Mandantenzuordnung, Konten, Steuerschlüssel, steuerliche Behandlung, Abschreibungen und Finanzierung sind mit der Kanzlei festzulegen. Die CSV-Daten enthalten keine erfundene Kontierung oder Steuerberechnung. Quelle zur Abstimmung von Importfeldern/Kontenzuordnung: https://www.datev.de/dnlexom/v2/content/files/st1458361995_de.pdf

Validierung: JavaScript-Syntax, Demo-Anzahlen, Haus-/Jahressummen, Jahresgrenzen nach Zahlungsdatum, Summenabgleich, Ansichtsrendering, Rückgängig, CSV-Escaping und dokumenthaltiger Speicher-Roundtrip mit einer simulierten IndexedDB-Schnittstelle. Export-ZIPs zusätzlich mit `unzip -t` geprüft. Keine echte Browserprüfung der IndexedDB oder visuelle Prüfung durchgeführt.

Die Beispielabrechnung verteilt ausgewählte Kosten nach Wohnfläche und berücksichtigt manuell eingetragene Vorauszahlungen. Sie ist keine fachlich geprüfte Nebenkostenabrechnung. Heizkosten, Verbrauch, Mieterwechsel und individuelle Verteilerschlüssel benötigen eine spätere Implementierung und Prüfung.

Das Zielkonzept steht in `Konzept.md`.
