const React = require('react');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        {/* <link rel="stylesheet" href="../public/css/header.css" /> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flashcards</title>
        {/* <!-- CSS only --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/icon.png" />
        <script defer src="/scripts/client.js" />
      </head>

      <body style={{ backgroundColor: '#fff' }}>
        {/* <NavBar user={user} /> */}
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
