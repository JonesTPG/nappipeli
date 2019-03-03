# nappipeli
Nappipeli. Vincit-harkkatyö 2019.

Sovellus pyörii livenä tässä osoitteessa: https://thawing-wildwood-25973.herokuapp.com

# Lokaali asennus (sekä client että palvelin):

1. git clone https://github.com/JonesTPG/nappipeli
2. npm install sekä juurikansiossa että client-kansiossa
3. client-kansiossa npm run build. lisäksi reactin index.js-tiedostossa vaihdetaan
websocket-url lokaaliin url:ään.
4. juuressa node index.js
5. sovellus pyörii osoitteessa localhost:5000

# Lokaali asennus (pelkkä client)

Sovelluksen voi asentaa lokaalisti siten, että asentaa pelkän clientin jolloin react ottaa yhteyden herokun palvelimeen.

1. client-hakemistossa npm install
2. client-hakemistossa npm start
3. front-end pyörii osoitteessa localhost:3000, back-endina herokun palvelin
