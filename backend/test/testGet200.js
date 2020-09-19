var should = require("should");
var request = require("request");
var chai = require("chai");
const { body } = require("express-validator/check");
var expect = chai.expect;
var urlBase = "http://localhost:7081/oapi/web";

describe("Teste API Poligos", function () {

  it("Total Poligonos Consulta sucesso", function (done) {
    request.get(
      {
        url: urlBase + "/retorna/poligono/total/area/poligonos"
      },
      function (error, response, body) {
        var _body = {};
        try {
          _body = JSON.parse(body);
        }
        catch (e) {
          _body = {};
        }
        expect(response.statusCode).to.equal(200);
        if (_body.should.have.property('Total')) {
          expect(_body.Total).to.have.at.least(4650);
          if (_body.should.have.property('codigo')) {
            expect(_body.codigo).to.equal(8);
          }
          if (_body.should.have.property('message')) {
            expect(_body.message).to.equal('Sucesso na soma das Areas Poligonos');
          }

        }

        done();
      }
    );
  });

  it("Total Area Triangulos Consulta sucesso", function (done) {
    request.get(
      {
        url: urlBase + "/retorna/poligono/total/area/triangulos"
      },
      function (error, response, body) {
        var _body = {};
        try {
          _body = JSON.parse(body);
        }
        catch (e) {
          _body = {};
        }
        expect(response.statusCode).to.equal(200);
        if (_body.should.have.property('Total')) {
          expect(_body.Total).to.have.at.least(150);
          if (_body.should.have.property('codigo')) {
            expect(_body.codigo).to.equal(10);
          }
          if (_body.should.have.property('message')) {
            expect(_body.message).to.equal('Sucesso na soma das Areas Triangulos');
          }

        }

        done();
      }
    );
  });


  it("Total Area Retangulos Consulta sucesso", function (done) {
    request.get(
      {
        url: urlBase + "/retorna/poligono/total/area/retangulos"
      },
      function (error, response, body) {
        var _body = {};
        try {
          _body = JSON.parse(body);
        }
        catch (e) {
          _body = {};
        }
        expect(response.statusCode).to.equal(200);
        if (_body.should.have.property('Total')) {
          expect(_body.Total).to.have.at.least(450);
          if (_body.should.have.property('codigo')) {
            expect(_body.codigo).to.equal(12);
          }
          if (_body.should.have.property('message')) {
            expect(_body.message).to.equal('Sucesso na soma das Areas retangulos');
          }

        }

        done();
      }
    );
  });
});