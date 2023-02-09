# curso-frontend
Projeto para aprendizado do curso de frontend
By Luiz Paulo

#GIT
## Conceitos de versionamento
- Histórico
- Controle de versão
- Quem alterou
- O que alterou
- Quando alterou
- Todos os arquivos
- Evolução contínua

Arquivo A | Versão 1 | Versão 2
Arquivo B | Versão 1 | Versão 2

## Instalação do Git
https://git-scm.com

- Windows: https://git-scm.com/download/win
- Linux (apt-get): sudo apt-get install git
- Mac (brew): brew install git

## Criar conta no Github

## Clonar o projeto
### Comandos git
- cd pasta curso-frontend - **Importante para os comandos git funcionar, pois essa é a pasta do repositório no computador**
- git clone https://github.com/lpc1990/curso-frontend.git - **Clonar Projeto**
- git add * - **Envia todos arquivos alterados para o repositório do git**
- git status - **Verifica o status, se tem algum arquivo que não foi atualizado no repositório**
- git config --global user.name "Luiz Paulo" - **Criando configuração global para o git saber seu nome**
- git config --global user.email "cpd.luiz.paulo@outlook.com" - **Criando configuração global para o git saber seu nome**
- git config --get user.name - **Obtém nome do usuário**
- git config --get user.email - **Obtém email do usuário**
- git commin -m 'Mensagem para esse commit' - **Comando para commitar os arquivos - evite usar caracteres especiais como acentos e cedilha**
- git push - **Envia as alterações para o repositório online**
- git pull - **Baixa as alterações feitas nos arquivos editados pelo site do Github para o repositório local**

## Commits
Informações de alteração
- Após testado todo seu código

## GitFlow
Fluxo do git

### Branchs
São ramificações ou versões paralelas do código, como se fossem mesas de trabalhos diferentes (Ambiente de testes seria uma branch, ambiente de produção seria outra branch, etc... )

- main / master (É geralmente o ambiente de produção, quando as mudanças já foram testadas e aprovadas nos branchs de teste)
- DOD (Definition of done - Critérios de aceite)
- Versionamento 1.0.0
### Comandos git branch
- git checkout -b dev - **Cria a branck dev e já altera o ambiente atual para ela**
- git checkout dev - **Sem o parâmetro -b é feita somente a alteração de branch** 
- git fetch --all - **Verifica se há alterações nos repositórios / deve ser feito antes de colocar o código do ambiente de testes para o de produção**

### Merge
Mescla de branchs