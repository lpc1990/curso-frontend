# DOM
- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML e XML
- Interface de programação
- NÃO é uma linguagem de programação
- É essencial para o JS entender o modelo de páginas web

## Para que serve?
- Alterar a estrutura
- Alterar o estilo
- Alterar o conteúdo

## Como?
- Disponibilizando um API (Application Programing Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvores de elementos
- Seletores
- Objetos (Nós)

## Exemplo HTML
```
<html>              <!-- <<<<<<<<  -->
    <head></head>   <!-- HTML puro -->
    <body></body>   <!-- <<<<<<<<  -->
</html>             <!-- <<<<<<<<  -->
```

## Exemplo Objeto JS
```
objeto = {          <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  -->
    html : {        <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  -->
        head : {},  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  -->
        body : {    <!-- HTML convertido pelo DOM para o javascript entender e manipula-lo  -->
            h1 : {  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  -->
            }       <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  -->
        }           <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  -->
    }               <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  -->
}                   <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  -->
```

## DOM x JS
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar o JavaScript
- Código é executado por navegadores
- Tornar as páginas dinâmicas
- Evitar requisições desnecessárias (performance)
- SPA (Single Page Applications)
- Reagir rapidamente a ações dos usuários

### Desvantagens de usar o JavaScript
- Código é executado por navegadores
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento

### Exemplos
Seleciona o objeto e disponibiliza (métodos / funções ).callback

- document.getElementById(id)
- document.getElementByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body') - Irá inserir a tag body dentro da tag pai HTML
- element.innerHTML
- element.style
- element.setAttribute('name').value
- element.getAttribute('name')
- element.addEventListener()
- window.location  // Saber a URL de uma página
- window.onload (en-US)
- console.log()
- window.scrollTo()

## Exemplos práticos
document.getElementByTagName('h2')[1] // Se a página tiver mais de uma tag h2, ele retorna somente a primeira [1]
document.getElementByTagName('h2')[1].innerText = "Luiz" // Muda o primeiro h2 da página para 'Luiz'

### Referências
- DOM: http://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozilla.org/pt-BR/docs/web/JavaScript/JavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o




 