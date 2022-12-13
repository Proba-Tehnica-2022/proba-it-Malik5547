# template-proba-it-2022

- Taskuri implimentate:
Frontend:
1. Navbar
2. Landing page
3. (Nu e finisat)
4. Formular de upload imagini
5. Footer
6. Responsivitatea design-ului

Backend:
1. DB schema for users
2. CRUD 
3. Register & Login
4. Input Validation
5. Protected Endpoints


- Cum Se Ruleaza:
    Requirements:
        - npm install express
        - npm install sequelize
        - npm install sequelize-cli
        - npm install mysql2
        - npm install fs
        - npm install path 
        - npm install bcrypt
        - npm i express-session
        - npm i jsonwebtoken
        - npm i dotenv 
        - npm install express-fileupload
    Frontend (In director frontend):
        Rulati npm install. Apoi npm start.
    Backend (In director backend):
        Rulati npm install. 
        Creati fisier ".env" si introduceti "ACCESS_TOKEN_SECRET=" si un cuvant sau cod secret
        Deschideti baza de date din directorul curent cu DataGrip.
        Rulati "node ."


- Detalii Despre Implimentare:
Frontend (Landing page):
- Tehnologii: HTML, CSS, JS, React
  - Navbar constant sus, cu logo si butoane pentru logare/creare cont. Butoanele deschid modalele specifice. 
  - Sectiunea cu titlu si buton care duce in dreptul formularului
  - Sectiunea cu formular care accepta descriere si fisier .png, .jpg, .jpeg și .gif.
  - Footer cu iconite care redirectioneaza catre paginile LSAC.
  - Design-ul e responsive si arata ca in mock-up
Backend-ul: 
  - Rulat pe Node.js cu Express si Sequelize. Baza de date me MySQL. 
  - Pentru autetificare se folosesc token-uri JWT.
  - Implimentate tabelele pentru useri si memuri
  - Functii API:
    - /register (Post): {email, username, password} => valideaza datele, creaza user nou in baza de date si reintoarce datele.
    -  /login (Post): {username, password} => daca sunt date valide, creaza token si il returneaza.
    - /memes (Get): intoarce toate meme-urile
    - /memes/:id (Get): intoarce meme-ul cu id specificat. Daca nu exista intoarce mesaj ca nu exista.
    - /images/:filename (Get): intoarce fisierul din folderul upload cu numele filename daca exista.
    - /memes (Post): {image, description}: necesita token primit la logare. Creeaza meme pentru userul curent. In cazul unor date invalide, intoarce mesaje.
    - /memes/:id (Patch): {description}: necesita token primit la logare. Schimba descrierea la meme-ul specificat daca apartine acestui user. In cazul unor date invalide, intoarce mesaje.
    - /memes/:id (Delete): necesita token primit la logare. Sterge meme-ul cu id-ul specificat. In cazul unor date invalide, intoarce mesaje.


Challenge-uri:
1. Determinarea structurii proiectului
Solutia: Am cautat pe youtube videouri despre creare de pagini pe react. Am inceput sa fac 2 variante, dar nu era convenabil. Al treilea video continea un exemplu de pagina care avea o structura asemanatoare cu pagina noastra. Am copiat codul pentru front-end si am schimbat componentele dupa necesitate.

2. Formularul de upload memuri.
Solutia: Am cautat iarasi pe youtube si pe github. Am gasit un video care

3. Implimentarea la token
Problema: Am incercat sa folosesc express-session pentru a lucra cu sesiunile si cookie, ca sa salvez user-ul curent.
    Cand am inceput sa testez, nu returna cookie. 
Solutia: Am cautat mult timp pe internet, dar nam gasit nimic.
    Am decis sa incerc cu tokenuri din JWT. Am scris codul si imi dadea eroare. Dupa mult timp de cautare am aflat ca 
    sunt diferite metode de algoritme de hash pentru JWT si eu foloseam unul care nu se suporta pe windows. Dupa ce l-am
    schimbat, codul a mers.