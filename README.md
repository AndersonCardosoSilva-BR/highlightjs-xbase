# highlightjs-xbase

🎨 Plugin para suporte à linguagem **xBase (Clipper/Harbour/xHarbour)** no [Highlight.js](https://highlightjs.org/).

Este plugin permite destacar a sintaxe de códigos escritos em linguagens da família xBase, como Clipper, Harbour e xHarbour, tanto no navegador quanto em projetos Node.js.

---

## 🚀 Como usar

### 1. Instale as dependências:

```bash
npm install
```

### 2. Testar no terminal

```bash
node test.js
```

Você verá o código realçado com HTML usando as classes do Highlight.js (ex: `hljs-keyword`, `hljs-string`, etc).

---

### 3. Testar no navegador

Abra o arquivo `index.html` em seu navegador com:

```bash
xdg-open index.html   # Linux
open index.html       # macOS
start index.html      # Windows
```

---

## 🧠 Palavras-chave suportadas

Este plugin reconhece palavras-chave, literais e funções comuns como:

- `FUNCTION`, `RETURN`, `IF`, `ELSE`, `ENDIF`, `LOCAL`, `DO WHILE`, `ENDDO`, etc.
- Literais como `.T.`, `.F.`, `NIL`
- Funções embutidas como `chr()`, `str()`, `val()`, `substr()` etc.

---

## 📁 Estrutura do projeto

```
highlightjs-xbase/
├── xbase.js        # Definição da linguagem
├── test.js         # Teste com Highlight.js no terminal
├── index.html      # Exemplo visual no navegador
├── package.json    # Dependências e configuração
└── README.md       # Este arquivo
```

---

## ✨ Créditos

Desenvolvido por [Anderson Cardoso Silva](https://github.com/AndersonCardosoSilva-BR)  
Baseado no projeto [highlight.js](https://highlightjs.org/)

---

## 🪪 Licença

MIT © Anderson Cardoso Silva
