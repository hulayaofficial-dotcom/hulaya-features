# Push Setup (GitHub) — genaue Klickanleitung

Wenn `git push` mit 403 fehlschlägt, fehlen meistens Rechte oder ein gültiges Token.


## A0) Wichtig: Wenn du Repo-Owner bist
Wenn das Repo in **deinem eigenen Account/Org** liegt und du als Owner eingeloggt bist,
musst du **keinen zusätzlichen Collaborator** einladen.
Dann sind die häufigsten 403-Ursachen:
- falsches/abgelaufenes Token
- Token ohne richtige Repo-Berechtigung
- SSO nicht autorisiert (bei Org)
- lokaler Git-Client nutzt alte Credentials

## A) Im **Repo** Rechte vergeben (dein aktueller Screenshot)
Du bist schon richtig auf:
`hulayaofficial-dotcom/Hulaya-Marketplace` → **Settings**.

Jetzt genau so:
1. Links auf **Collaborators** klicken.
2. **Add people** klicken.
3. Deinen GitHub-User hinzufügen.
4. Als Role mindestens **Write** wählen (besser: Maintain/Admin nur wenn gewünscht).

Ohne Write-Rechte kann kein Push funktionieren.

## B) Token erstellen (für HTTPS Push)
Pfad in GitHub (oben rechts Profilbild):
1. **Settings**
2. **Developer settings**
3. **Personal access tokens**
4. **Fine-grained tokens**
5. **Generate new token**

Empfohlene Einstellungen:
- Repository access: **Only selected repositories**
- Repository: `hulayaofficial-dotcom/Hulaya-Marketplace`
- Permissions:
  - **Contents: Read and write**
  - **Pull requests: Read and write**
  - Metadata: Read-only

## C) Falls es eine Organization ist: SSO autorisieren
Wenn eure Org SSO erzwingt:
- Token öffnen → **Configure SSO**
- Für `hulayaofficial-dotcom` autorisieren

Sonst bleibt Push trotz korrektem Token auf 403.

## D) Lokal auf deinem Rechner einmalig setzen
```bash
git remote set-url origin https://github.com/hulayaofficial-dotcom/Hulaya-Marketplace.git
git remote -v
```

Dann push:
```bash
git push -u origin <dein-branch>
```

Bei Login-Prompt:
- Username = dein GitHub Username
- Password = **PAT** (nicht dein GitHub-Loginpasswort)

## E) Schnellcheck bei Fehlern
- Hast du wirklich **Write** im Repo?
- Ist das Token abgelaufen?
- Ist das richtige Repo im Token ausgewählt?
- Ist SSO autorisiert?
- Blockiert ein Firmenproxy GitHub?

## F) Wenn dein Token-Screen so aussieht wie im Screenshot
Dann ist es **fast fertig**. Als nächstes:
1. Verifiziere einmalig in `Repository permissions`, dass wirklich `Read and Write` gesetzt ist.
2. Gehe zurück ins Repo und prüfe unter **Settings → Collaborators**, dass dein User **Write** hat.
3. Starte lokal den Push-Befehl:
   ```bash
   git push -u origin <dein-branch>
   ```
4. Wenn Git nach Passwort fragt: **PAT einfügen**.

Optional (wenn Git-Credentials Probleme machen):
```bash
git config --global credential.helper manager-core
```
(auf macOS alternativ meist `osxkeychain`.)

## G) Wenn du Owner bist und trotzdem 403 bekommst (häufigster Fix)
1. Alte GitHub-Credentials im System löschen (Keychain/Credential Manager).
2. Danach erneut pushen:
   ```bash
   git push -u origin <dein-branch>
   ```
3. Bei der Passwortabfrage den **neuen PAT** verwenden.

## H) ChatGPT Codex Connector in deinem Screenshot
Ja, das ist gut und sollte aktiviert sein (Save klicken).

Wichtig: Der Connector in deinem Browser-Account bedeutet nicht automatisch,
dass **diese Runtime-Session** hier dieselben Netz-/Auth-Rechte hat.

Darum kann es passieren:
- bei dir im Browser alles korrekt,
- aber in dieser Ausführungsumgebung weiterhin `git ls-remote` / `git push` mit 403.

In dem Fall muss die Runtime selbst Zugriff auf GitHub bekommen (Netzwerk/Proxy/egress + Credentials).
