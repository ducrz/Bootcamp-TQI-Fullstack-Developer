CREATE database digital_innovation_one;

USE digital_innovation_one;

CREATE TABLE aluno (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    idade INTEGER NOT NULL,
    estado CHARACTER(2) NOT NULL
);
