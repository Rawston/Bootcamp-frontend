# Bootcamp-frontend
#//Fron-end
#//Java Script
//Desafioos, aprendizado, etc. terá algo fora do contexto, pois alguns desfios estão incompletos!! 

export NODE_VERSION='v14.19.3'

# Remove old or fixed nodejs installed
sudo apt-get remove nodejs
sudo apt-get remove npm
sudo apt purge nodejs
sudo apt autoremove


# check if there is NO node inside the /etc/apt/sources.list.d
sudo apt update

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# list latest versions to be installed
nvm ls-remote | grep -i 'latest'

# you can use nvm ls-remote to choose another version
nvm install $NODE_VERSION

nvm use $NODE_VERSION

nvm alias default $NODE_VERSION

nvm use default

node -v
npm -v

nvm ls

# Guia para aprender JavaScript - lista de exercícios

```bash
       _                   _____           _       _   
      | |                 / ____|         (_)     | |  
      | | __ ___   ____ _| (___   ___ _ __ _ _ __ | |_ 
  _   | |/ _` \ \ / / _` |\___ \ / __| '__| | '_ \| __|
 | |__| | (_| |\ V / (_| |____) | (__| |  | | |_) | |_ 
  \____/ \__,_| \_/ \__,_|_____/ \___|_|  |_| .__/ \__|
                                            | |        
                                            |_|      LISTA 1
```

## Pré-requisitos

- Instalar NODE JS na versão v14.19.3 usando NVM

## Tarefa

- Veja cada exercício na ordem
- Leia atentamente os comentários e complemente o código inicial
- Utilize node para validar que a solução está funcionando, exemplo:

```bash

node lista-01/js01-calcula-idade.js

OU

cd lista-01/
node js01-calcula-idade.js

```

## ATENÇÃO

- Não precisa utilizar funções (functions)
- Não precisa fazer uma página web (HTML) para testar os programas
- Não precisa utilizar `readline` para ler dados de entrada do usuário. Utilize a variável, anterando seu valor manualmente para cada caso de uso
- Altere as variáveis para valores diferentes (conforme as entradas) para testar para diferentes casos
- Não crie do zero, utilize os arquivos com a estrutura para te ajudar
- Utilize o mesmo nome de arquivo para facilitar a revisão de código


### Bons estudos