# Document 9 — Promo Codes Blueprint

Promo Codes sollen in Hulaya-Logik + DB liegen (nicht nur Stripe Coupons).

## Validierung
- active
- date valid
- usage limit
- listing/variant match

## Checkout
1. code eingeben
2. backend validiert
3. rabatt berechnen
4. amount aktualisieren
5. stripe session für final amount
6. used_count erst nach erfolgreicher Zahlung erhöhen
