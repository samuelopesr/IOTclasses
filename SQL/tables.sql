DROP TABLE Pessoa;

CREATE TABLE Pessoa (
	id int not null AUTO_INCREMENT,
	nome varchar(255) not null,
    idade int,
    PRIMARY KEY(id)
);

INSERT INTO `fundacao`.`pessoa` (`nome`, `idade`) VALUES ('samuca', '125');

SELECT * FROM Pessoa;