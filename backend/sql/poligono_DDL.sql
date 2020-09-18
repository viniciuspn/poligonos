CREATE TABLE `retangulos` (
	`id_retangulos`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`retangulos_nome`	TEXT ( 100 ) NOT NULL,
	`retangulos_base`	NUMERIC NOT NULL,
	`retangulos_altura`	NUMERIC NOT NULL,
	`retangulos_area`	NUMERIC NOT NULL,
	`retangulos_reta_a1`	NUMERIC NOT NULL,
	`retangulos_reta_a2`	NUMERIC NOT NULL,
	`retangulos_reta_b1`	NUMERIC NOT NULL,
	`retangulos_reta_b2`	NUMERIC NOT NULL
);



CREATE TABLE `triangulos` (
	`id_triangulos`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`triangulos_nome`	TEXT ( 100 ) NOT NULL,
	`triangulos_base`	NUMERIC NOT NULL,
	`triangulos_altura`	NUMERIC NOT NULL,
	`triangulos_area`	NUMERIC NOT NULL,
	`triangulos_ponto_a`	NUMERIC NOT NULL,
	`triangulos_ponto_b`	NUMERIC NOT NULL,
	`triangulos_ponto_c`	NUMERIC NOT NULL
);