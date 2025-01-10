### Integração Flask, Python e JavaScript

Este repositório demonstra uma simples integração entre Python (Flask) e JavaScript. O aplicativo Flask serve uma página HTML com um botão, e ao ser clicado, o botão faz uma requisição AJAX para o backend em Flask. O Flask responde com dados JSON que são então exibidos na página com JavaScript.

**Tecnologias utilizadas:**
- Flask (Python)
- HTML
- JavaScript

**Funcionalidade:**
- O servidor Flask fornece uma página HTML com um botão para carregar dados.
- Quando o botão é pressionado, o JavaScript faz uma requisição para a rota `/dados` do Flask.
- O Flask retorna uma mensagem em formato JSON que é exibida dinamicamente na página.

**Rodando o projeto localmente:**
1. Instale as dependências com o comando: 
   ```bash
   pip install flask
   ```
2. Execute o aplicativo Flask:
   ```bash
   python app.py
   ```
3. Acesse a aplicação no navegador em `http://127.0.0.1:5000`.
