# Document 10 — Checkout and Payments

## Architektur
- Stripe Connect für payouts
- Hulaya Backend für pricing logic

## Flow
1. listing/variant wählen
2. promo code anwenden
3. order draft erstellen
4. stripe checkout/payment intent erstellen
5. payment
6. webhook bestätigt
7. order paid
8. participant + QR erstellen
9. organizer stats updaten
10. ticket email senden
