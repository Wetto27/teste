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
![fluxograma](https://github.com/user-attachments/assets/86909150-296d-44c9-b71c-44a6c431ff8a)

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


### Diagrama de Caso de Uso  
![diagrama-caso-de-uso](https://github.com/user-attachments/assets/c04a0d45-7a28-476d-9818-e87abef07796)  

#### Descrição  
O diagrama de caso de uso representa o fluxo de visualização de cartas no jogo, descrevendo como o jogador interage com o sistema para acessar suas cartas.

#### Fluxo do Processo  

1. O **jogador** acessa a **Tela de Cadastro/Login** e entra no sistema.  
2. Após o cadastro, ele recebe **5 Pokémon aleatórios** da funcionalidade **"Distribuição de Cartas"**.  
3. O jogador solicita a funcionalidade **"Exibir Cartas"**.  
4. O sistema consulta os serviços necessários:  
   - **Sistema de Gerenciamento de Jogadores** para obter informações sobre o jogador.  
   - **Serviço de Distribuição de Cartas** para recuperar os Pokémon atuais no deck do jogador.  
   - **PokéAPI** para obter os detalhes dos Pokémon no deck do jogador.  

Com todas as informações recuperadas, as **cartas são exibidas** ao jogador na interface do sistema.  

#### Conclusão  
O diagrama ilustra a interação entre o jogador e os serviços do sistema, garantindo que as cartas sejam carregadas corretamente e exibidas de forma dinâmica e responsiva.  

### Diagrama de Classe
![diagrama-classe](https://github.com/user-attachments/assets/f5af90fe-ca2b-475d-b3a0-191f1a080918)

![classe](https://github.com/user-attachments/assets/4af81097-b9b6-4ccd-a2d4-fd939b55fa1d)
<img src="https://github.com/user-attachments/assets/4af81097-b9b6-4ccd-a2d4-fd939b55fa1d" width="500">

