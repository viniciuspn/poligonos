const _ = require('underscore');
const clienteSql = require('../../../scriptsSQL/web/poligonoWeb')();

module.exports = function () {

    function validaTriangulo(a, b, c) {
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);

        var tringulo = null;
        /*
        | b - c | < a < b + c
        | a - c | < b < a + c
        | a - b | < c < a + b
        */
        if (((a - b) < a < (b + c)) && ((a - c) < b < (a + c)) && ((a - b) < c < (a + b))) {
            tringulo = true;
        };

        return tringulo;
    };



    async function inserirTriangulo(dados) {
        let retorno = {
            sucessoDados: false,
            error: undefined
        };

        dados.base = parseInt(dados.base);
        dados.altura = parseInt(dados.altura);
        //A = (b . h) /2
        var area = ((dados.base * dados.altura) / 2);
        let promise = await clienteSql.inseriTriangulo(dados, area)
            .then(function (rowsInseriTriangulo) {
                retorno.sucessoDados = true;
            })
            .catch(function (error) {
                retorno.error = error;
            })

        return retorno;

    };


    function validaRetangulo(a1, a2, b1, b2) {
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        b1 = parseInt(b1);
        b2 = parseInt(b2);

        var retangulo = null;

        if ((a1 === a2) && (b1 === b2) && (a1!=b1) && (a2!=b2)) {
            retangulo = true;
        };

        return retangulo;
    };

    async function inserirRetangulo(dados) {
        let retorno = {
            sucessoDados: false,
            error: undefined
        };

        dados.base = parseInt(dados.base);
        dados.altura = parseInt(dados.altura);
        //A = b . h
        var area = (dados.base * dados.altura);
        let promise = await clienteSql.inseriRetangulo(dados, area)
            .then(function (rowsInseriRetangulo) {
                retorno.sucessoDados = true;
            })
            .catch(function (error) {
                retorno.error = error;
            })

        return retorno;

    };


    async function somarTriangulo() {
        let retorno = {
            totalAreaTriangulo: 0,
            error: undefined
        };
        let promise = await clienteSql.somaTriangulo()
            .then(function (rows) {
                _.each(rows, function (result) {
                    if (result.total) {
                        retorno.totalAreaTriangulo = result.total;
                    }
                });
            })
            .catch(function (error) {
                retorno.error = error;
            })

        return retorno;

    };

    async function somarRetangulo() {
        let retorno = {
            totalAreaRetangulo: 0,
            error: undefined
        };
        let promise = await clienteSql.somaRetangulo()
            .then(function (rows) {
                _.each(rows, function (result) {
                    if (result.total) {
                        retorno.totalAreaRetangulo = result.total;
                    }
                });
            })
            .catch(function (error) {
                retorno.error = error;
            })

        return retorno;

    };



    return {
        validaTriangulo: validaTriangulo,
        inserirTriangulo: inserirTriangulo,
        validaRetangulo: validaRetangulo,
        inserirRetangulo: inserirRetangulo,
        somarTriangulo: somarTriangulo,
        somarRetangulo: somarRetangulo
    }
};