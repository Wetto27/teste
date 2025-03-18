# CardView

## Descrição

Este projeto é responsável por exibir as cartas de cada jogador em um jogo de cartas de Pokémon. A aplicação consulta serviços de distribuição de cartas e de jogadores para recuperar as informações necessárias sobre os jogadores e suas cartas. Além disso, a aplicação consulta a PokéAPI para recuperar as informações necessárias sobre os Pokémons.

## Funcionalidades

- **Consulta de Jogadores:** Recupera informações sobre os jogadores.
- **Distribuição de Cartas:** Consulta o serviço de distribuição de cartas para obter as cartas de cada jogador.
- **Consulta de Pokémons:** Utiliza a PokéAPI para obter informações detalhadas sobre os Pokémons nas cartas.
- **Exibição de Cartas:** Exibe as cartas de cada jogador com as informações obtidas.

## Tecnologias Utilizadas
- **Front-end:** React
- **APIs:** PokéAPI

## UML
### Fluxograma
![Fluxograma](UML/WhatsApp%20Image%202025-03-17%20at%2015.57.25.jpeg)
O fluxograma descreve o funcionamento da tela de um jogo de cartas Pokémon, detalhando desde a inicialização até a interação do usuário e a atualização da interface. O processo começa com a inicialização do jogo, carregamento de recursos e configuração das interfaces. Em seguida, verifica-se se os dados foram carregados corretamente; caso contrário, o sistema tenta obter os dados novamente ou exibe uma mensagem de erro. Após o carregamento bem-sucedido, a tela é renderizada e a interatividade é adicionada, permitindo que o usuário interaja com a interface. O sistema entra em um loop de interação, onde verifica se o usuário interagiu ou deseja sair, atualizando a tela conforme necessário. O fluxograma garante uma experiência fluida e sem falhas, assegurando que os recursos sejam carregados corretamente e que erros sejam tratados antes da interação.

### Fluxograma
![Fluxograma](UML/WhatsApp%20Image%202025-03-17%20at%2015.57.25.jpeg)

#### Introdução  
O fluxograma descreve o funcionamento da tela do jogo, desde o início até a interação do usuário e a atualização da interface.

#### Explicação do Fluxograma  

- **Inicialização**: O jogo começa com o **carregamento de recursos** e a **configuração das interfaces**.  
- **Carregamento dos Dados**: O sistema verifica se os dados foram carregados corretamente.  
  - Se **SIM**, o processo segue para a renderização.  
  - Se **NÃO**, o sistema tenta **obter os dados das cartas**. Caso falhe, uma **mensagem de erro** é exibida.  
- **Renderização e Interação**: Se os dados foram carregados corretamente, a **tela é renderizada** e a **interatividade é ativada**.  
- **Loop de Interação**: O sistema monitora a interação do usuário:  
  - Se houver interação, a **tela é atualizada**.  
  - Caso contrário, o sistema **aguarda uma ação**.  
  - O sistema verifica se o usuário deseja sair:  
    - Se **SIM**, o jogo termina.  
    - Se **NÃO**, o loop continua.  

#### Conclusão  
O fluxograma garante uma **interação contínua** e uma **experiência de jogo fluida**, assegurando o carregamento correto dos recursos e o tratamento adequado de erros. Dessa forma, o sistema mantém uma interface responsiva e funcional.
