# Requisitos

WIP = WORKING IN PROGRESS
TESTE MILHOMEM
- Geral
    - [x]  Manipule o HTML usando somente React (sem usar o document nem bibliotecas como jQuery)
    - [x]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub
    - [x]  Para isso, crie um repositório público no seu GitHub e compartilhe acesso com sua dupla
    - [x]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit
- Layout
    - [wip]  Aplicar layout para desktop, seguindo imagens fornecidas
    - [wip]  Aplicar layout para mobile, seguindo imagens fornecidas
    - [wip]  Fontes e cores devem ser extraídas do Figma: [https://www.figma.com/file/PzDjhf1EyeZ0opdDnhLmwJ/linkr?node-id=0%3A1](https://www.figma.com/file/PzDjhf1EyeZ0opdDnhLmwJ/linkr?node-id=0%3A1) (crie uma conta no Figma e se logue para ter acesso ao Inspect)
    - [x]  Tamanhos/posicionamento podem ser aproximados, não é necessário copiar o Figma (não recomendado!)
    - [wip]  Para ícones, utilize a biblioteca **react-icons**
- Tela de Login (rota "/")
    - Login
        - [x]  Ao clicar em entrar, caso algum dos campos esteja vazio, deverá aparecer um alert solicitando o preenchimento dos campos
        - [x]  Ao clicar em entrar, caso os campos estejam preenchidos, deverá ser enviado um request `post` para o servidor, seguindo documentação
        - [wip]  Caso o servidor retorne uma falha (status 401), deverá ser lançado um alert para o usuário de email/senha incorretos
        - []  Caso o servidor retorne sucesso (status 200), o usuário deve ser redirecionado para a rota "/timeline"
        - [utilizar-context]  Em caso de sucesso, o servidor retornará na resposta também um código identificador do usuário que você deve **guardar** para usar nos próximos requests pro servidor, assim como dados sobre usuário (como nome e foto)
        - [ ]  Ao clicar em entrar, o botão deve ser desabilitado até o servidor responder, evitando que o usuário clique no botão várias vezes
        - [X]  Ao clicar em "First time? Create an account!", os campos devem mudar pro formato da tela 2
    - Cadastro
        - [x]  Ao clicar em cadastrar, caso algum dos campos esteja vazio, deverá aparecer um alert solicitando o preenchimento dos campos
        - [ ]  Ao clicar em entrar, caso os campos estejam preenchidos, deverá ser enviado um request `post` para o servidor, seguindo documentação
        - [ ]  Caso o servidor retorne uma falha (status 400), deverá ser lançado um alert para o usuário informando que o email inserido já está cadastrado
        - [ ]  Caso o servidor retorne sucesso (status 201), o usuário deve ser redirecionado para a rota "/timeline"
        - [ ]  Em caso de sucesso, o servidor retornará na resposta também um código identificador do usuário que você deve **guardar** para usar nos próximos requests pro servidor, assim como dados sobre usuário (como nome e foto)
        - [ ]  Ao clicar em cadastrar, o botão deve ser desabilitado até o servidor responder, evitando que o usuário clique no botão várias vezes
        - [ ]  Ao clicar em "Switch back to Log In", os campos devem mudar pro formato da tela 1
    - Autenticação
        - [ ]  A partir da próxima tela, todos os requests para o servidor devem incluir um **header** de nome `User-Token`, contendo o valor retornado pelo servidor no request de autenticação (que você guardou nos requisitos anteriores)

            Dica: pesquise por "add header axios" 

- Tela de Timeline (rota "/timeline")
    - Topo
        - [ ]  Implementar topo como especificado no layout. O topo deve ser fixo.
        - [ ]  Ao clicar na seta/foto do usuário, deve abrir um menu conforme layout e seta deve virar para cima
        - [ ]  Ao clicar novamente, deve-se fechar o menu e virar a seta novamente pra baixo
        - [ ]  Ao clicar em "My posts", o usuário deve ser redirecionado para a rota "/my-posts"
        - [ ]  Ao clicar em "Logout", o usuário deve ser redirecionado novamente para a rota de login ("/") e os dados de usuário logado devem ser resetados no front
    - Publicação
        - [ ]  Ao clicar em "Publish", deve ser validado se o usuário preencheu o link (o texto é opcional)
        - [ ]  Ao clicar em "Publish", deve ser enviado um post para o servidor com os dados inseridos
        - [ ]  Ao clicar em "Publish", o botão deve ser desabilitado para evitar novos cliques e os campos devem ficar desabilitados para edição. O texto do botão deve mudar para "Publishing..."
        - [ ]  Em caso de erro no envio, deve ser exibida uma mensagem de "Houve um erro ao publicar seu link" e os campos e botões devem voltar a ser habilitados
        - [ ]  Em caso de sucesso no envio, os campos e botões devem ser re-habilitados, os campos devem ser limpos e a lista de posts da timeline deve ser atualizada para conter a nova publicação
    - Lista de Posts
        - [ ]  Ao entrar na tela, deve-se carregar a lista de posts do servidor e exibida conforme layout
        - [ ]  Enquanto a lista é carregada, deve-se exibir uma mensagem de "Loading" na área em que aparecem os posts. Pesquise por gifs animados de loading para ilustrar.
        - [ ]  Caso o servidor retorne algum erro, deve ser exibida uma mensagem de "Houve uma falha ao obter os posts, por favor atualize a página"
        - [ ]  Caso o servidor retorne uma lista vazia de posts, deve ser exibida uma mensagem de "Nenhum post encontrado"
    - Trending
        - [ ]  Ao entrar na tela, deve-se carregar a lista de hashtags populares do servidor e exibida conforme layout
        - [ ]  Ao clicar em uma hashtag, o usuário deve ser redirecionado para a rota "/hashtag/:hashtag" em que :hashtag é o nome da hashtag (sem #)
- Post
    - [ ]  Ao clicar na foto ou nome do usuário que publicou um post, o usuário deve ser redirecionado para a página "/user/:id" em que :id é o id do usuário
    - [ ]  Ao clicar em uma hashtag ao longo do texto do post, o usuário deve ser redirecionado para a página da hashtag clicada. Observe que as hashtags ficam marcadas em negrito e cor branca no layout.

        **Dica**: Pesquise por uma biblioteca chamada **react-hashtag**

    - [ ]  Ao clicar no snippet do link compartilhado, o link deve abrir em uma nova aba
- Telas de post filtrados (rotas "/my-posts", "/hashtag/:hashtag", "/user/:id")
    - [ ]  Devem ser exatamente com a página timeline, mudando somente:
        - [ ]  A caixa de publicação não deve aparecer
        - [ ]  O título deve mudar de "timeline" para "**my posts**" / "**#hashtag**" / "**Juvenal's posts**" conforme layout
        - [ ]  Os posts carregados devem ser obtidos das rotas da API correspondentes

- Deploy
    - [ ]  Coloque seu projeto no ar usando o GitHub Pages