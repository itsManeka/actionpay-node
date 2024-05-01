# Actionpay Node API

[![licença](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/itsmaneka/actionpay-node/master/LICENSE)
[![versão npm](https://badge.fury.io/js/actionpay-node.svg)](https://badge.fury.io/js/actionpay-node)

API de integração com a plataforma de afiliados Actionpay

## Instalação

```bash
$ npm install actionpay-node
```

## Chave de API

* Criar conta: [Registrar Actionpay](https://actionpay.com.br/br-pt/register)
* Chave de API: [Solicite para o suporte Actionpay](mailto:support@actionpay.com.br)

## Uso

```js
const { Actionpay } = require('actionpay-node');

const actionpay = new Actionpay(chaveAPI);

const chaveAPI = "suachave";
const idCampanha = 12345;
const idOrigem = 54321;

async function getLink() {
    const link = await actionpay.deeplink("http://teste.com/", idCampanha, idOrigem);
    console.log("link:", link);
}

getLink();
```

## Contribuição
Sinta-se livre para contribuir com a API e implementar os demais metodos.
O Manual para os endpoints pode ser consultado [aqui](https://raw.githubusercontent.com/itsmaneka/actionpay-node/master/API.pdf).