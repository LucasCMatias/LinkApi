const jsonToXml = require('js2xmlparser').parse;

async function convertObjToXml(pipedriveObj) {
  const orderObj = {
    pedido: [
      {
        cliente: {
          nome: pipedriveObj.creator_user_id.name,
          email: pipedriveObj.creator_user_id.email,
        },
        transporte: {
          transportadora: 'Transportadora XYZ',
          tipo_frete: 'R',
          servico_correios: 'SEDEX - CONTRATO',
        },
        volumes: {
          volume: {
            servico: 'SEDEX - CONTRATO',
            codigoRastreamento: 'RX32084021',
          },
        },
        items: {
          item: {
            codigo: 1,
            descricao: 'Item',
            vlr_unit: pipedriveObj.value,
          },
        },
      },
    ],
  };

  return jsonToXml('pedido', orderObj);
}

module.exports = convertObjToXml;
