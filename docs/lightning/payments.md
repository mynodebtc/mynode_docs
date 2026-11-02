---
title: "Sending and Receiving Lightning Payments"
description: "Send and receive Lightning payments on MyNode with invoices, keysend, LNURL and Lightning addresses, and find out why payments fail and how to fix common errors."
tags:
- "Lightning payments"
- "Lightning invoice"
- "LNURL"
- "MyNode"
---

# Sending and Receiving Lightning Payments

Once you have an [open channel](/lightning/opening-channels), you can make payments from any Lightning interface connected to your node, like [Ride the Lightning](/lightning/rtl), [Thunderhub](/lightning/thunderhub) or a [paired mobile wallet](/lightning/pairing-wallets).

## Invoices

An invoice is the standard way to request a Lightning payment. The person being paid creates it, and the person paying pastes or scans it. Invoices usually begin with `lnbc` on mainnet.

An invoice typically includes an amount, a description, your node's public key, and an expiration time. Keep these in mind:

- **Invoices expire.** Some expire in minutes, and others after a day or more. If one expires, ask for a new one.
- **Invoices are for one payment.** Paying the same invoice a second time will fail.
- **Invoices can reveal your node.** The person you give an invoice to can usually see your node's public key.

### Send a Payment

1. Open your Lightning interface and find its send or pay option. In RTL, this is "Lightning", then "Transactions".
2. Paste the invoice, and check the amount and description.
3. Confirm the payment. Most complete within seconds, though routing over Tor can take longer.

### Receive a Payment

1. Check that you have enough [inbound liquidity](/lightning/inbound-liquidity).
2. Create an invoice in your Lightning interface. Add an amount and a description.
3. Share the invoice text or QR code with the person paying you.

## Keysend and AMP

Keysend and AMP let you pay a node without an invoice, using only its public key. They're useful for tips and streaming payments. The tradeoff is that there's no invoice to serve as proof that the receiver asked for that payment.

MyNode's default Lightning config accepts both keysend and AMP payments. Your interface needs to support them too in order to send one.

## LNURL and Lightning Addresses

LNURL adds a web server to the process, which automates requesting an invoice. For example, you can use a single reusable QR code or link instead of a new invoice for each payment. A Lightning address builds on this and looks like an email address, such as `name@example.com`.

Paying one is simple as long as your wallet supports it. Paste or scan it and enter an amount. Receiving takes more setup, because a web service must be reachable by the sender. You have two main options on MyNode:

- **[LNbits](/lightning/lnbits)** has extensions for LNURL pay links, withdraw links and more. Using these from outside your home network requires making LNbits reachable, and a Lightning address on your own domain is an advanced setup.
- **Alby Hub** is available in the MyNode app catalog. On MyNode it runs on top of your LND node, and it can connect to Alby's services for a Lightning address.

Using a third-party service for your address means the service can see some of your activity and needs to be online for you to get paid.

## Why Payments Fail

| What you see | Likely cause | What to try |
|---|---|---|
| No route found | No path has enough capacity, or the receiver is poorly connected | Try a smaller amount, try again later, or open a channel to a better connected peer |
| Insufficient balance | Not enough outbound, or the reserve and fee take you over | Try a smaller amount, or refill with Loop In |
| Fee limit exceeded | All routes cost more than your maximum fee | Increase the fee limit, if you're comfortable with the cost |
| Invoice expired | The invoice is too old | Ask for a new one |
| Invoice already paid | This invoice has been used | Check your payment history before paying again |
| Timeout | Routes kept failing, or a connection is slow | Wait and try again, and check that your peers are online |
| Can't receive | Not enough inbound, or your peer is offline | See [Inbound Liquidity](/lightning/inbound-liquidity) |
| Channel inactive | The peer is offline or still reconnecting | Wait, or check the Peers section on the Lightning page |

A failed payment doesn't cost you anything. Your funds stay in your channel, and routing fees only apply to successful payments.

### Large Payments

The larger the payment, the fewer channels along the way can carry it. Split it into smaller payments if the receiver allows, or see if your interface supports multi-path payments, which split a payment across several routes.

### Stuck Payments

A payment can sometimes show as in-flight or pending for a while. This usually means an HTLC is waiting on a node somewhere along the route. The funds are either delivered or returned, but this can take up to a few days in rare cases.

While you wait:

- **Don't pay the same invoice again** from another wallet until you know the first attempt has failed.
- **Don't close the channel or delete your wallet** to try to fix it. A pending HTLC can make a force close more expensive and slower.

## Next Steps

[Learn how to close channels safely](/lightning/closing-channels)

[Troubleshoot Lightning errors](/troubleshooting/lightning-network-error)
