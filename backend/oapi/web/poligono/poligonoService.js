const _ = require('underscore');

const serverConfig = require('../../../config/server');
const poligonoModel = require('./poligonoModel')();
const poligono = new serverConfig.restifyRoute();
const validations = require('../../../util/validations')();
const camposObrigatorioCadastro = ['nome', 'altura', 'base'];

poligono.post('/cadastro/poligono/triangulo', async function (req, res, next) {
    const body = req.body;
    var errorResponse = []

    let validaBody = await validations.validaBody(body, camposObrigatorioCadastro);

    if (validaBody.length) {
        errorResponse.push({
            codigo: 0,
            data: validaBody,
            message: 'Campos obrigatórios não foram informados'
        });
    };

    if (errorResponse.length) {
        res.status(400);
        res.send(errorResponse);
    } else {
        var inseriTriangulo = await poligonoModel.inserirTriangulo(body);
        if (inseriTriangulo.error) {
            res.status(500);
            res.send({
                codigo: 1,
                message: 'Erro inserir de Tiangulo'
            });

        } else {
            res.status(200);
            res.send({
                codigo: 2,
                message: 'Triangulo cadastrado com sucesso'
            });
        }
    }

});

poligono.post('/cadastro/poligono/retangulo', async function (req, res, next) {
    const body = req.body;
    var errorResponse = []

    let validaBody = await validations.validaBody(body, camposObrigatorioCadastro);

    if (validaBody.length) {
        errorResponse.push({
            codigo: 0,
            data: validaBody,
            message: 'Campos obrigatórios não foram informados'
        });
    };

    if (errorResponse.length) {
        res.status(400);
        res.send(errorResponse);
    } else {
        var inseriRetangulo = await poligonoModel.inserirRetangulo(body);
        if (inseriRetangulo.error) {
            res.status(500);
            res.send({
                codigo: 1,
                message: 'Erro inserir de Retangulo'
            });

        } else {
            res.status(200);
            res.send({
                codigo: 2,
                message: 'Retangulo cadastrado com sucesso'
            });
        }
    }

});


module.exports = poligono;