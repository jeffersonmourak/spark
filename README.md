# Project Spark ⚡️
UFRN Library index fast as light

## Setting up develop environment
Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and [Vagrant.](https://www.vagrantup.com/downloads.html)<br />
```
Recommended versions:
Virtualbox: 5.0.20r106931; 
Vagrant: 1.8.1
```

Download our local Vagrant environment from [here](#TODO).<br />
Unpack directly in your ***home folder*** and it will create a folder named ***spark*** (~/spark).

***Notice:*** that ***~*** (tilde) refers to the home folder of the logged in user. In my case I will now have the folder structure ***/Users/jeffersonmourak/spark/***

Open up a terminal and start the installer by executing the followings commands in your terminal.
```
$ cd ~/spark
$ ./install.sh
```

The installation script will check that necessary programs are installed on the system, setup vagrant and our local development environment in additional to clone our most used repositories.

***Notice:*** During the installation you will be asked to type in a password and this is your local password.

### Post installation steps.
After finish the instalation navigate to ***app*** folder and provide the command
```
$ npm install
```
to install the dependencies for front-end application

then navigate to ***backend*** folder and do the same thing
```
$ npm install
```
to install the dependencies for backend application

### Vagrant commands
Commands that can be executed from the terminal (from the ***contadev*** folder) is:<br />
`vagrant up` = starts the server<br />
`vagrant halt` = stops the server<br />
`vagrant status` = show server status<br />
`vagrant provision` = applies the latest Conta specific updates<br />
`vagrant ssh` = starts a ssh session on the vm guest<br />

### Troubleshooting
The box is passive of bug on authentication.
If your vagrant display the following sequence...
```
default: SSH auth method: private key
default: Warning: Remote connection disconnect. Retrying...
default: Warning: Remote connection disconnect. Retrying...
default: Warning: Authentication failure. Retrying...
default: Warning: Authentication failure. Retrying...
```
It means the ssh key hasn't added correctely. to fix it
press <kbd>ctrl</kbd> + <kbd>c</kbd> twice to cancel the starting
once it has finished the virtual machine still running in background.
Connect it with
```
$ vagrant ssh
```
and past the following line.
```
echo "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA6NF8iallvQVp22WDkTkyrtvp9eWW6A8YVr+kz4TjGYe7gHzIw+niNltGEFHzD8+v1I2YJ6oXevct1YeS0o9HZyN1Q9qgCgzUFtdOKLv6IedplqoPkcmF0aYet2PkEDo3MlTBckFXPITAMzF8dJSIFo9D8HfdOV0IAdx4O7PtixWKn5y2hMNG0zQPyUecp4pzC6kivAIhyfHilFR61RGL+GPXQ2MWZWFYbAGjyiYJnAmCP3NOTd0jMZEnDkbUvxhMmBYSdETk1rRgm+R4LOzFUGaHqHDLKLX+FIPKcF96hrucXzcWyLbIbEgE98OHlnVYCzRdK8jlqm8tehUc9c9WhQ== vagrant insecure public key" > .ssh/authorized_keys
```
quit from ssh using <kbd>ctrl</kbd> + <kbd>d</kbd>
and run
```
$ vagrant reload
```
If this doen't work, report it on [#bugs](https://projeto-de-software.slack.com/messages/C6RQUSLBX/) channel @ slack.
