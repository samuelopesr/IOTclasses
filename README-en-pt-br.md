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





