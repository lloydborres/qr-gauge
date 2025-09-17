# QR Gauge

A react app that scans a QR code and redirect to a page depending on the code scanned.

## Setup

1. Clone repository.
2. Open a terminal and run `npm install`.
3. Since camera permissions can't be enabled if app is not accessed through https or localhost, a workaround is to use an API Gateway like [ngrok](https://dashboard.ngrok.com). Please create an account and follow installation from the page.
4. Setup your static domain in ngrok and replace the value `static-domain.ngrok-free.app` in [vite.config.ts](vite.config.ts) file with your static address under `server.allowedHosts`.
5. Run `npm run dev`.
6. Open a new separate terminal and run `ngrok http --url=static-domain.ngrok-free.app 5173` (replace the static-domain).
7. Access the static address remotely in your mobile phone to test.

## Instructions

1. Access the root url. You should be navigated to the qr-scanner page automatically
2. Scan either of the following. You can also use the following string: `InteractiveGauge` and `Landing`.

<table align="center">
  <tr>
    <td align="center">
      <img src="./docs/images/qr_interactive_gauge.png" width="100%"/><br>
      <sub><em>Figure 1: Interactive Gauge Page</em></sub>
    </td>
    <td align="center" style="padding-left: 150px;">
      <img src="./docs/images/qr_landing.png" width="100%"/><br>
      <sub><em>Figure 2: Landing Page</em></sub>
    </td>
  </tr>
</table>

## Notes

- Used the library [@yudiel/react-qr-scanner](https://www.npmjs.com/package/@yudiel/react-qr-scanner) instead of `@zxing/browser` or `react-qr-reader` since the former doesn't have documentation while the latter seems outdated and had errors upon installation.
