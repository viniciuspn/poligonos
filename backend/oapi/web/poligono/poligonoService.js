const _ = require('underscore');

const serverConfig = require('../../../config/server');
const poligonoModel = require('./poligonoModel')();
const poligono = new serverConfig.restifyRoute();
const validations = require('../../../util/validations')();
const camposObrigatorioCadastroTriangulo = ['nome', 'altura', 'base', 'a', 'b', 'c'];
const camposObrigatorioCadastroRetangulo = ['nome', 'altura', 'base', 'a1', 'a2', 'b1', 'b2'];


poligono.post('/cadastro/poligono/triangulo', async function (req, res, next) {
    const body = req.body;
    var errorResponse = []

    let validaBody = await validations.validaBody(body, camposObrigatorioCadastroTriangulo);

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
        var triangulo = poligonoModel.validaTriangulo(body.a, body.b, body.c);
        if (triangulo) {
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
        } else {
            res.status(400);
            res.send({
                codigo: 1,
                message: 'Poligo informado não é um triangulo'
            });
        }

    }

});

poligono.post('/cadastro/poligono/retangulo', async function (req, res, next) {
    const body = req.body;
    var errorResponse = []

    let validaBody = await validations.validaBody(body, camposObrigatorioCadastroRetangulo);

    if (validaBody.length) {
        errorResponse.push({
            codigo: 3,
            data: validaBody,
            message: 'Campos obrigatórios não foram informados'
        });
    };

    if (errorResponse.length) {
        res.status(400);
        res.send(errorResponse);
    } else {
        var retangulo = poligonoModel.validaRetangulo(body.a1, body.a2, body.b1, body.b2);
        if (retangulo) {
            var inseriRetangulo = await poligonoModel.inserirRetangulo(body);
            if (inseriRetangulo.error) {
                res.status(500);
                res.send({
                    codigo: 4,
                    message: 'Erro inserir de Retangulo'
                });

            } else {
                res.status(200);
                res.send({
                    codigo: 5,
                    message: 'Retangulo cadastrado com sucesso'
                });
            }
        } else {
            res.status(400);
            res.send({
                codigo: 1,
                message: 'Poligo informado não é um retangulo'
            });
        }
    }

});

poligono.get('/retorna/poligono/total/area/plonigonos', async function (req, res, next) {

    var totalAreaTriangulo = await poligonoModel.somarTriangulo();
    if (totalAreaTriangulo.error) {
        res.status(500);
        res.send({
            codigo: 6,
            message: 'Erro soma area triangulo'
        });
    } else {
        var totalAreaRetangulo = await poligonoModel.somarRetangulo();
        if (totalAreaRetangulo.error) {
            res.status(500);
            res.send({
                codigo: 7,
                message: 'Erro soma area retangulo'
            });
        } else {
            res.status(200);
            res.send({
                codigo: 8,
                data: { 'Atera total': totalAreaTriangulo.totalAreaTriangulo + totalAreaRetangulo.totalAreaRetangulo },
                message: 'Sucesso na soma das Areas Plonigonos'
            });
        }
    }

});

poligono.get('/retorna/poligono/total/area/triangulos', async function (req, res, next) {

    var totalAreaTriangulo = await poligonoModel.somarTriangulo();
    if (totalAreaTriangulo.error) {
        res.status(500);
        res.send({
            codigo: 9,
            message: 'Erro soma area triangulo'
        });
    } else {
        res.status(200);
        res.send({
            codigo: 10,
            data: { 'Atera total': totalAreaTriangulo.totalAreaTriangulo },
            message: 'Sucesso na soma das Areas Triangulos'
        });

    }

});

poligono.get('/retorna/poligono/total/area/retangulos', async function (req, res, next) {

    var totalAreaRetangulo = await poligonoModel.somarRetangulo();
    if (totalAreaRetangulo.error) {
        res.status(500);
        res.send({
            codigo: 11,
            message: 'Erro soma area retangulo'
        });
    } else {
        res.status(200);
        res.send({
            codigo: 12,
            data: { 'Atera total': totalAreaRetangulo.totalAreaRetangulo },
            message: 'Sucesso na soma das Areas retangulos'
        });
    }


});




module.exports = poligono;