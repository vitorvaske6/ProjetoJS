ProjetoJS

Comando do NPM para inicializar nosso projeto
npm init -y

instalar o Express e o Nodemon. O Express é nosso framework web e o Nodemon nos ajuda na hora do desenvolvimento para não ser necessário ficar reiniciando o servidor a cada alteração de código fonte
npm install --save express debug 
npm install --save-dev nodemon

No arquivo package.json adicione o seguinte comando na chave "scripts": 
"dev":"node node_modules/nodemon/bin/nodemon bin/server"

Rodar servidor
npm run dev

instalar dependências mongo
npm install --save mongoose dotenv

conectar ao db
mongodb+srv://vitorvaske6:<password>@cluster0.b8tou.mongodb.net/test

instalar a dependencia para acessar por outro app
npm install http express cors

cd documents/pastas/gitrepository/