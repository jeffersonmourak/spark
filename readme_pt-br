# Project Spark ⚡️

## Configurando o ambiente de desenvolvimento
Baixe e instale o [VirtualBox](https://www.virtualbox.org/wiki/Downloads) e o [Vagrant.](https://www.vagrantup.com/downloads.html)<br />
```
Versões recomendadas:
Virtualbox: 5.0.20r106931; 
Vagrant: 1.8.1
```

Baixe o nosso ambiente de desenvolvimento [aqui](#TODO).<br />
Descompact o arquivo direto na ***pasta home*** e ela irá criar um diretório com o nome ***spark*** (~/spark).

***ATENÇÃO:*** O ***~*** (TIL) referencia a pasta home do usuário logado. No meu caso, terá a seguinte estrutura ***/Users/jeffersonmourak/spark/***

Abra o terminal e execute os seguintes comandos.
```
$ cd ~/spark
$ ./install.sh
```

O Script de instalação irá verificar se os programas estão corretamente instalados no seu pc, configurar o ambiente de desenvolvimento e baixar o esse repositório.

***ATENÇÃO:*** Durante a instalação o sistema pedirá a senha do seu pc.

### Passos após a instalação.
Depois de terminar a instalação vá até a pasta ***app*** e execute o seguinte comando
```
$ npm install
```
isso irá instalar as dependencias de front-end

em seguida vá para a pasta ***backend*** e execute o mesmo comando novamente
```
$ npm install
```
e vai instalar as dependencias de backend

### Comandos do Vagrant
Comandos que podem ser executados do terminal (dentro da pasta ***spark***):<br />
`vagrant up` = Inicia o ambiente<br />
`vagrant halt` = para o ambiente<br />
`vagrant status` = Mostra o status autal<br />
`vagrant provision` = Aplica as ultimas mudanças do ambiente<br />
`vagrant ssh` = Acessa o ambiente como usuário ***root***<br />


### Dominios do ambiente
Todos os dominios do ambiente terminam com ***spark.dev***<br />
`kibana.spark.dev` = é o painel de controle do kibana<br />
`elastic.spark.dev` = é a API do ElasticSearch<br />
`app.spark.dev` = é o app front-end<br />
`api.spark.dev` = é o backend<br />

### Resolução de problemas
Esse serviço está passivo de problemas com a autenticação.
Se no processo de inicialização apresentar essa sequencia...
```
default: SSH auth method: private key
default: Warning: Remote connection disconnect. Retrying...
default: Warning: Remote connection disconnect. Retrying...
default: Warning: Authentication failure. Retrying...
default: Warning: Authentication failure. Retrying...
```
Isso significa que o ambiente sofreu um erro durante a inicialização e perdeu as credenciais do ssh. Para corrigir pressione <kbd>ctrl</kbd> + <kbd>c</kbd> duas vezes para cancelar.
Porém a maquina ainda se encontra rodando em segundo plano
Connecte-se com o comando
```
$ vagrant ssh
```
e cole a seguinte linha
```
echo "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA6NF8iallvQVp22WDkTkyrtvp9eWW6A8YVr+kz4TjGYe7gHzIw+niNltGEFHzD8+v1I2YJ6oXevct1YeS0o9HZyN1Q9qgCgzUFtdOKLv6IedplqoPkcmF0aYet2PkEDo3MlTBckFXPITAMzF8dJSIFo9D8HfdOV0IAdx4O7PtixWKn5y2hMNG0zQPyUecp4pzC6kivAIhyfHilFR61RGL+GPXQ2MWZWFYbAGjyiYJnAmCP3NOTd0jMZEnDkbUvxhMmBYSdETk1rRgm+R4LOzFUGaHqHDLKLX+FIPKcF96hrucXzcWyLbIbEgE98OHlnVYCzRdK8jlqm8tehUc9c9WhQ== vagrant insecure public key" > .ssh/authorized_keys
```
então saia do ambiente com <kbd>ctrl</kbd> + <kbd>d</kbd>
e rode
```
$ vagrant reload
```
Se isso não funcionar reporte no canal [#bugs](https://projeto-de-software.slack.com/messages/C6RQUSLBX/) no slack.
