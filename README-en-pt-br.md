# Explaning Project

## ESP32 (with the libraries: WiFi.h, Wire, e DHT11):

### Colect the temperature data from DHT11 sensor. Estabilish an Wi-fi connection and send the temperature data to an API with TCP comunication.

#### API builded with Express.JS:

    Recive ESP32 data.
    Uses the mysql2 to storage the data in the MySql DB.

#### Front-End (React):

    Uses Axios to do HTTP requisition to API asking the storage data in DB.
    Recive de data from API and uses a plot libraries, to plot a graphic in the web page.
    
#### Details:

ESP32: 


    Coleta os dados de temperatura do sensor DHT11 e envia esses dados para a API. 
    Utiliza a biblioteca WiFi.h para conexão Wi-Fi e a Wire para comunicação I2C, e envia esses dados provavelmente via HTTP ou TCP para a API.

API (Express.js): 

    Recebe os dados do ESP32 e utiliza a biblioteca mysql2 para armazenar os dados no banco de dados MySQL.

Front-End (React): 
    
    Utiliza o Axios para fazer solicitações HTTP à API, obtendo os dados armazenados no banco de dados MySQL. Depois, utiliza bibliotecas gráficas como Chart.js ou D3.js para plotar esses dados em gráficos na página web.


O Axios é usado no front-end (no React) para fazer requisições à API, obtendo os dados do banco de dados da API (que, por sua vez, foram recebidos do ESP32 e armazenados no MySQL). Esses dados são então utilizados para criar e exibir gráficos na interface do usuário.

Esse é um fluxo comum em aplicações de IoT, onde os dados coletados por dispositivos como o ESP32 são armazenados, processados e exibidos visualmente para os usuários por meio de um front-end web.





# API, REST e RESTFUL

## API

Cliente (Client)
Garçom (pedidos, levar seus pedidos, para a cozinha) (API)
Cozinha (Server)

Acrônimo de Application Programming Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

## REST

um acrônimo para REpresentational State Transfer (Transferência de Estado Representativo).

Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

A transferência de dados, geralmente, usando o protocolo HTTP.

O REST delimita algumas obrigações nessas transferências de dados.

Resources seria então: Uma entidade ou um objeto.

### 6 NECESSIDADES (constraints) para ser RESTful

- _Uniform Interface_: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

## RESTFUL

RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA!_ use um padrão!!
- Não deixar barra no final do endpoint
- Nunca deixe o cliente sem resposta!

### VERBOS HTTP

- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processados por um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource

### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
  - 400: Bad Request
  - 404: Not Found!
- 5xx: Server Error
  500: Internal Server Error