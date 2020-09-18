CREATE TABLE retangulos (
	id_retangulos	INTEGER PRIMARY KEY AUTOINCREMENT,
	retangulo_nome	TEXT(100) NOT NULL,
	retangulo_base	NUMERIC NOT NULL,
	retangulo_altura	NUMERIC NOT NULL,
	retangulo_area	NUMERIC NOT NULL
);




CREATE TABLE triangulos (
	id_triangulos	INTEGER PRIMARY KEY AUTOINCREMENT,
	triangulo_nome	TEXT(100) NOT NULL,
	triangulo_base	NUMERIC NOT NULL,
	triangulo_altura	NUMERIC NOT NULL,
	triangulo_area	NUMERIC NOT NULL
);
