# Portfólio João Vitor

Portfólio profissional em HTML5, CSS3 e JavaScript Vanilla, com design moderno, responsivo e animações suaves.

## Estrutura do projeto

- `index.html` — página principal do portfólio
- `assets/` — imagens, logos, ícones e recursos estáticos
- `css/` — estilos principais, animações e responsividade
  - `style.css`
  - `animations.css`
  - `responsive.css`
- `js/` — scripts de interação e animação
  - `main.js`
  - `carousel.js`
  - `animations.js`
- `data/` — dados dinâmicos dos projetos
  - `projects.js`

## O que inclui

- Navegação fixa com efeito ao scroll
- Hero section com ilustração SVG e call-to-action
- Seção de projetos carregada dinamicamente pelo JavaScript
- Modal de projeto com galeria, funcionalidades, tecnologias, nicho, ROI e arquitetura
- Seção de tecnologias com cards animados
- Seção sobre com estatísticas animadas
- Contato com cards modernos para GitHub, LinkedIn, e-mail e WhatsApp
- Footer moderno
- Responsividade para desktop, tablet e smartphone

## Como hospedar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `portfolio`.
2. No terminal, dentro desta pasta:

```bash
git init
 git add .
 git commit -m "Inicializa portfólio João Vitor"
 git branch -M main
 git remote add origin https://github.com/<seu-usuario>/portfolio.git
 git push -u origin main
```

3. No GitHub, abra o repositório, vá em `Settings > Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Configure `Branch: main` e `Folder: / (root)`.
6. Salve e aguarde o GitHub Pages publicar o site.

## Com GitHub CLI

```bash
gh auth login
 gh repo create <seu-usuario>/portfolio --public --source=. --remote=origin --push
```

## Dicas

- Substitua `https://github.com/<seu-usuario>/portfolio.git` pela URL do seu repositório.
- Se quiser usar domínio personalizado, adicione `CNAME` na raiz do projeto e configure no GitHub Pages.
- Atualize os links de contato em `index.html` para os seus endereços reais.

## Customizações

- Atualize `data/projects.js` com informações reais de cada projeto.
- Atualize `assets/projects/` com imagens reais dos projetos.
- Ajuste o texto de `hero`, `sobre` e contatos no `index.html`.

## Observações

Este portfólio já está pronto para publicação e foi preparado para ser hospedado diretamente no GitHub Pages sem dependências adicionais.
