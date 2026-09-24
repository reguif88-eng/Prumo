# Prumo · Tarefas, foco e calma

App mobile-first (PWA) com quadro de tarefas estilo Trello/Monday, painel de indicadores, modo Foco (25 min), aba Mindfulness (respiração guiada, humor e pausas) e login local. Tudo funciona sem internet e os dados ficam só no aparelho.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro (telas, lógica e estilos) |
| `manifest.webmanifest` | Nome, cores e ícones para instalar o app no celular |
| `sw.js` | Permite abrir o app offline |
| `privacidade.html` | Política de privacidade (obrigatória na Play Store) |
| `icon-192.png`, `icon-512.png` | Ícones do app |
| `icon-maskable-512.png` | Ícone em tela cheia (use este na Play Store) |
| `plus-jakarta-sans.woff2` | Fonte do app (local, sem Google Fonts) |

## 1. Publicar no GitHub Pages (grátis)

1. No GitHub, crie um repositório **público** (ex.: `prumo`).
2. Clique em **Add file → Upload files**, arraste todos estes arquivos (descompactados) e confirme com **Commit changes**.
3. Vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em 1 a 2 minutos o app estará em `https://SEU-USUARIO.github.io/prumo/`.

## 2. Testar no celular

1. Abra o endereço acima no Chrome do Android.
2. Toque no menu (⋮) → **Instalar app** (ou *Adicionar à tela inicial*).
3. Teste: criar conta, tarefas, Foco, Mindfulness, modo avião (deve abrir offline), sair e entrar de novo, excluir conta.

**Atualizando o app:** depois de editar os arquivos, troque `prumo-v1` por `prumo-v2` (e assim por diante) em `sw.js`. Sem isso o celular pode continuar mostrando a versão antiga.

## 3. Antes de publicar de verdade

- Em `privacidade.html`, troque `[SEU NOME OU EMPRESA]` e `[SEU E-MAIL]` pelos seus dados.
- Se possível, peça a um profissional para revisar a política de privacidade.

## 4. Caminho para a Play Store

O app é web, então o caminho mais simples é empacotá-lo como app Android (TWA):

1. Gere o pacote em **pwabuilder.com** (informe o endereço do GitHub Pages) ou use o Bubblewrap.
2. Crie a conta de desenvolvedor no **Google Play Console** (há taxa única de cadastro).
3. O TWA exige o arquivo `/.well-known/assetlinks.json` na raiz do domínio. Em `usuario.github.io/prumo` a raiz pertence ao seu "site de usuário", então o ideal é usar um **domínio próprio** ou publicar o app na raiz de um repositório chamado `SEU-USUARIO.github.io`. Se usar GitHub Pages, adicione um arquivo vazio `.nojekyll` para a pasta `.well-known` ser publicada.
4. Prepare a ficha da loja: ícone 512×512 (`icon-maskable-512.png`), imagem de destaque 1024×500, capturas de tela do celular, descrição e o link da política de privacidade.
5. Responda o formulário de Segurança de dados conforme o funcionamento real do app (nada sai do aparelho).
6. Confira no Play Console as regras atuais para contas novas (por exemplo, fase de teste fechado antes da produção).

## Limitações desta versão

- Sem recuperação de senha e sem sincronização entre aparelhos (tudo é local).
- Dados no aparelho não são criptografados.
- Cartões mudam de coluna pelo botão → ou pelo editor (ainda não há arrastar e soltar).
