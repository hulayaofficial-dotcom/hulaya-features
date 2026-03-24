# Push Setup (GitHub) — genaue Klickanleitung

Wenn `git push` mit 403 fehlschlägt, fehlen meistens Rechte oder ein gültiges Token.

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
