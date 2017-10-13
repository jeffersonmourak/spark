class Screen {
  /**
    Classe de estlilização dos outputs do console.
  */
  static get colors() {
    return {
      reset: '\x1b[0m',
      bright: '\x1b[1m',
      dim: '\x1b[2m',
      underscore: '\x1b[4m',
      blink: '\x1b[5m',
      reverse: '\x1b[7m',
      hidden: '\x1b[8m',
      foreground: {
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m'
      },
      background: {
        black: '\x1b[40m',
        red: '\x1b[41m',
        green: '\x1b[42m',
        yellow: '\x1b[43m',
        blue: '\x1b[44m',
        magenta: '\x1b[45m',
        cyan: '\x1b[46m',
        white: '\x1b[47m'
      }
    }
  }

  /**
    printLine

    @description
    Exibe um texto com quebra de linha no console.

    @param {String} message Texto a ser exibido
    @param {String} color Cor a ser exibida com o texto
  */
  static printLine(message, color) {
    Screen.print(`${message}\n`, color);
  }

  /**
    print

    @description
    Exibe um texto no console.

    @param {String} message Texto a ser exibido
    @param {String} color Cor a ser exibida com o texto
  */
  static print(message, color) {
    if (color) {
      process.stdout.write(`${color}${message}${Screen.colors.reset}`);
      return;
    }
    process.stdout.write(message);
  }

  /**
    progressMessage

    @description
    Exibe um texto que volta ao ponto inicial da linha e sobrescreve.

    @param {String} message Texto a ser exibido
    @param {String} color Cor a ser exibida com o texto
  */
  static progressMessage(message, color) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    Screen.print(message, color);
  }

  /**
    printError

    @description
    Exibe uma mensagem de erro em vermelho com o prefixo "ERROR:"

    @param {String} message Texto a ser exibido
  */
  static printError(message) {
    Screen.printLine(`ERROR: ${message}`, Screen.colors.foreground.red);
  }

  /**
    breakLine

    @description
    Pula uma linha do console
  */
  static breakLine() {
    Screen.printLine('');
  }
}

module.exports = Screen;
