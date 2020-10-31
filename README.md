# NODE-JS Autenticação e Autorização
API em NodeJS para autenticação e autorização de rotas, usando as biliotecas bcrypt, jwt, validator, mongoose, express.\
No projeto há rotas para Login, Logout, Register, Profile, LogoutAll:\
\
Segue abaixo as rotas e o formato de estrutura JSON para funcionar corretamente:\
\
`/users` - Rota método POST,usado para se registrar no sistema criando um JWT Token para o usuário.\
\
`{`\
	`   "name": "Admin administrador",`\
	`   "email": "admin@teste.com",`\
	`   "password": "senhasupersecreta"`\
`}`\
\
`/users/login` - Rota método POST, usado para validar e logar com as credenciais.\
\
`{`\
	`   "name": "Admin administrador",`\
	`   "email": "admin@teste.com",`\
`}`\
\
`/users/me` - Rota método GET, usado para retornar seu usuário.\
\
Use a opção autenticação Bearer Token do Postman/Insomnia com o token do seu usuário que é retornado nas requisições acima\
\
` Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU4NzY4NjQwMn0.oiwetxry75PLZc5YLNBX-iG-EPZc5PP56d88RKGulvs`

\
`/users/me/logout` - Rota método GET, usado para deslogar o usuário e remover o token de conexão na sessão atual.\
Após estar conectado ao acessar esta rota seu token da sessão atual é removido do array de tokens do banco de dados.\
\
`/users/me/logoutall` - Rota método GET, usado para deslogar o usuário e remover todos os tokens de conexão existentes.\
\
Após estar conectado ao acessar esta rota todos os tokens de todas as suas sessões são removidos do array de tokens do banco.
\
\
Comandos para executar o projeto:\
1.`git clone https://github.com/EduardoDiavam/nodejs-authentication-and-authorization.git`\
2.`cd nodejs-authentication-and-authorization`\
3.`npm install`
\
Agora será necessario configurar o arquivo `.env` existente no projeto com a URL do banco de dados, a aplicação esta configurada para funcionar no MongoDB, 
para maior facilidade recomendo o site https://www.mongodb.com/cloud/atlas para criação do seu banco.
\
Agora é só rodar um `npm start` e testar as rotas.

