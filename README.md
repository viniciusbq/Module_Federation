# HostApp -> Micro Frontend 1 e Micro Frontend 2

Esta aplicação foi desenvolvida utilizando Angular CLI 15 juntamente com o recurso de Module Federation e Bootstrap. O Module Federation permite a integração de componentes de diferentes aplicações de forma dinâmica, facilitando a construção de sistemas distribuídos e microfrontends.

Nossa aplicação aproveita o poder do Module Federation para conectar e compartilhar componentes entre diferentes módulos de forma eficiente. Com o uso do Bootstrap, garantimos uma interface visualmente atrativa e responsiva para os nossos componentes compartilhados.

## Servidor de Desenvolvimento
Para iniciar o desenvolvimento, siga estes passos:

1. **Iniciar o host-app:**
   - Navegue para o diretório do host-app: `cd host-app`
   - Execute `npm install` para instalar as dependências necessárias.
   - Execute `ng serve` para iniciar um servidor de desenvolvimento. 
   - Navegue para http://localhost:4000/. 
   - O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

2. **Iniciar o Micro Frontend 1 (mfe1):**
   - Navegue para o diretório do mfe1: `cd mfe1`
   - Execute `npm install` para instalar as dependências necessárias.
   - Execute `ng serve` para iniciar um servidor de desenvolvimento.
   - Navegue para http://localhost:4001/. 
   - O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

3. **Iniciar o Micro Frontend 2 (mfe2):**
   - Navegue para o diretório do mfe2: `cd mfe2`
   - Execute `npm install` para instalar as dependências necessárias.
   - Execute `ng serve` para iniciar um servidor de desenvolvimento.
   - Navegue para http://localhost:4002/. 
   - O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Para obter mais ajuda
Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página de Visão Geral e Referência de Comandos do Angular CLI. 
