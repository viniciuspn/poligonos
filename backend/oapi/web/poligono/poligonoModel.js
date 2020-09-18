const _ = require('underscore');
const clienteSql = require('../../../scriptsSQL/web/poligonoWeb')();

module.exports = function () {




    async function inserirTriangulo(dados) {
        let retorno = {
            sucessoDados: false,
            error: undefined
        };

        dados.base = parseInt(dados.base);
        dados.altura = parseInt (dados.altura);
        var area = ((dados.base * dados.altura)/2);
        let promise = await clienteSql.inseriTriangulo(dados, area)
            .then(function (rowsInseriTriangulo) {
                retorno.sucessoDados = true;
            })
            .catch(function (error) {
                retorno.error = error;
            })

        return retorno;

    };

    async function inserirRetangulo(dados) {
        let retorno = {
            sucessoDados: false,
            error: undefined
        };

        dados.base = parseInt(dados.base);
        dados.altura = parseInt (dados.altura);
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
        inserirTriangulo: inserirTriangulo,
        inserirRetangulo: inserirRetangulo,
        somarTriangulo: somarTriangulo,
        somarRetangulo: somarRetangulo
    }
};