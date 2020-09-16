CREATE SCHEMA poligono;

USE poligono;

CREATE TABLE IF NOT EXISTS poligono.retangulos (
  id_retangulos INT NOT NULL AUTO_INCREMENT,
  retangulo_nome VARCHAR(100) NULL,
  retangulo_base DECIMAL NULL,
  retangulo_altura DECIMAL NULL,
  retangulo_area DECIMAL NULL,
  PRIMARY KEY (id_retangulos))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS poligono.triangulos (
  id_triangulos INT NOT NULL AUTO_INCREMENT,
  triangulo_nome VARCHAR(100) NULL,
  triangulo_base DECIMAL NULL,
  triangulo_altura DECIMAL NULL,
  triangulo_area DECIMAL NULL,
  PRIMARY KEY (id_triangulos))
ENGINE = InnoDB;

