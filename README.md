# template-proba-it-2022

- Taskuri implimentate:
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
- 
- Detalii Despre Implimentare:
Backend-ul: e rulat pe node.js cu Express si Sequelize. Baza de date me MySQL. Pentru autetificare se folosesc token-uri JWT.

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