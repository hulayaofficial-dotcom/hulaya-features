# Document 11 — Check-in Blueprint

## Flow
1. organizer wählt listing
2. QR wird gescannt
3. match über `qr_code_value`
4. valid + not checked-in => check-in
5. `checkin_log` schreiben
6. success state

Already checked-in und invalid ebenfalls als Log-Einträge speichern.
