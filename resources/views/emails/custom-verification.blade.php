<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Confirmation</title>
  <style>
    body,
    body *:not(html):not(style):not(br):not(tr):not(code) {
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      position: relative;
    }

    body {
      -webkit-text-size-adjust: none;
      background-color: #ffffff;
      color: #718096;
      height: 100%;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      width: 100% !important;
    }

    p,
    ul,
    ol,
    blockquote {
      line-height: 1.4;
      text-align: left;
    }

    a {
      color: #3869d4;
    }

    a img {
      border: none;
    }

    /* Typography */

    h1 {
      color: #3d4852;
      font-size: 18px;
      font-weight: bold;
      margin-top: 0;
      text-align: left;
    }

    h2 {
      font-size: 16px;
      font-weight: bold;
      margin-top: 0;
      text-align: left;
    }

    h3 {
      font-size: 14px;
      font-weight: bold;
      margin-top: 0;
      text-align: left;
    }

    p {
      font-size: 16px;
      line-height: 1.5em;
      margin-top: 0;
      text-align: left;
    }

    p.sub {
      font-size: 12px;
    }

    img {
      max-width: 100%;
    }

    /* Layout */

    .wrapper {
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      -premailer-width: 100%;
      background-color: #edf2f7;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    .content {
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      -premailer-width: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    /* Header */

    .header {
      padding: 25px 0;
      text-align: center;
    }

    .header a {
      color: #3d4852;
      font-size: 19px;
      font-weight: bold;
      text-decoration: none;
    }

    /* Logo */

    .logo {
      max-width: 512px;
      border-radius: 8px;
    }

    /* Body */

    .body {
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      -premailer-width: 100%;
      background-color: #edf2f7;
      border-bottom: 1px solid #edf2f7;
      border-top: 1px solid #edf2f7;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    .inner-body {
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      -premailer-width: 570px;
      background-color: #ffffff;
      border-color: #e8e5ef;
      border-radius: 2px;
      border-width: 1px;
      box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015);
      margin: 0 auto;
      padding: 0;
      width: 570px;
    }

    /* Subcopy */

    .subcopy {
      border-top: 1px solid #e8e5ef;
      margin-top: 25px;
      padding-top: 25px;
    }

    .subcopy p {
      font-size: 14px;
    }

    /* Footer */

    .footer {
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      -premailer-width: 570px;
      margin: 0 auto;
      padding: 0;
      text-align: center;
      width: 570px;
    }

    .footer p {
      color: #b0adc5;
      font-size: 12px;
      text-align: center;
    }

    .footer a {
      color: #b0adc5;
      text-decoration: underline;
    }

    /* Tables */

    .table table {
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      -premailer-width: 100%;
      margin: 30px auto;
      width: 100%;
    }

    .table th {
      border-bottom: 1px solid #edeff2;
      margin: 0;
      padding-bottom: 8px;
    }

    .table td {
      color: #74787e;
      font-size: 15px;
      line-height: 18px;
      margin: 0;
      padding: 10px 0;
    }

    .content-cell {
      max-width: 100vw;
      padding: 32px;
    }

    /* Buttons */

    .action {
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      -premailer-width: 100%;
      margin: 30px auto;
      padding: 0;
      text-align: center;
      width: 100%;
    }

    .button {
      -webkit-text-size-adjust: none;
      border-radius: 4px;
      color: #fff;
      display: inline-block;
      overflow: hidden;
      text-decoration: none;
    }

    .button-blue,
    .button-primary {
      background-color: #2d3748;
      border-bottom: 8px solid #2d3748;
      border-left: 18px solid #2d3748;
      border-right: 18px solid #2d3748;
      border-top: 8px solid #2d3748;
    }

    .button-green,
    .button-success {
      background-color: #48bb78;
      border-bottom: 8px solid #48bb78;
      border-left: 18px solid #48bb78;
      border-right: 18px solid #48bb78;
      border-top: 8px solid #48bb78;
    }

    .button-red,
    .button-error {
      background-color: #e53e3e;
      border-bottom: 8px solid #e53e3e;
      border-left: 18px solid #e53e3e;
      border-right: 18px solid #e53e3e;
      border-top: 8px solid #e53e3e;
    }

    /* Panels */

    .panel {
      border-left: #2d3748 solid 4px;
      margin: 21px 0;
    }

    .panel-content {
      background-color: #edf2f7;
      color: #718096;
      padding: 16px;
    }

    .panel-content p {
      color: #718096;
    }

    .panel-item {
      padding: 0;
    }

    .panel-item p:last-of-type {
      margin-bottom: 0;
      padding-bottom: 0;
    }

    /* Utilities */

    .break-all {
      word-break: break-all;
    }

    .bg-dots-darker {
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
    }
  </style>
</head>

<body class="body bg-dots-darker">
  <table class="wrapper" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <table class="content" width="100%" cellpadding="0" cellspacing="0">
          <!-- Header -->
          <tr>
            <td class="header">
              <p style="font-weight: 400; text-align: center; font-size: 20px"><b>{{ env('APP_NAME') }}</b>&nbspemail confirmation</p>
            </td>
          </tr>

          <!-- Email Body -->
          <tr>
            <td class="body" width="100%" cellpadding="0" cellspacing="0">
              <table class="inner-body" width="570" cellpadding="0" cellspacing="0">
                <!-- Body content -->
                <tr>
                  <td class="content-cell">
                    <h1>Hello, {{ $notifiable->name }}!</h1>
                    <p>You're almost ready to get started. Please click the button below to verify your email address:
                    </p>
                    <table class="action" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <a href="{{ $actionUrl }}" class="button button-primary">Verify Email</a>
                        </td>
                      </tr>
                    </table>
                    <p style="font-weight: 300">If the button above doesn't work, you can also verify your email by
                      clicking on or copying and
                      pasting the following link into your browser:</p>
                    <p style="font-weight: 300"><a style="word-break: break-all;" href="{{ $actionUrl }}"
                        target="_blank">{{ $actionUrl }}</a></p>
                    <p style="font-weight: 300">If you did not create an account, no further action is required.</p>
                    <p style="font-weight: 600;">Thank you for choosing {{ env('APP_NAME') }}!</p>
                  </td>
                </tr>
                <tr>
                  <td class="header">
                    <img class="logo" src="{{ asset('assets/svg/Hero-animated-v1.svg') }}" alt="Hero Image">
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td>
              <table class="footer" width="570" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="content-cell">
                    <p class="sub">Coded and designed for educational purposes by
                      <b><a href="https://github.com/AutocorrectGuy">AutocorrectGuy</a></b>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
