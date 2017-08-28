/*
	A classe implementada nesse arquivo representa os elementos do acervo
*/
var exports = module.exports = {};

exports.Material = function(autor, titulo, edicao, ano, quantidade, registroSistema, tipoMaterial) {
	this.autor = autor; // O nome do autor do material
	this.titulo = titulo; // O titulo do material
	this.edicao = edicao; // A edição do desponível do material
	this.ano = ano; // O ano de lançamento
	this.quantidade = quantidade; // Número de unidades disponível no inventário
	this.registroSistema = registroSistema; // Número do registro no sistema da universidade
	this.tipoMaterial = tipoMaterial; // O tipo de matérial que este elemento representa
};

/*
	Os metodos abaixo retornam todos os atributos do material
*/
exports.Material.prototype.getAutor = function() {return this.autor};
exports.Material.prototype.getTitulo = function() {return this.titulo};
exports.Material.prototype.getEdicao = function() {return this.edicao};
exports.Material.prototype.getAno = function() {return this.ano};
exports.Material.prototype.getQuantidade = function() {return this.quantidade};
exports.Material.prototype.getRegistroSistema = function() {return this.registroSistema};
exports.Material.prototype.getTipoMaterial = function() {return this.tipoMaterial};

/*
	Esta função codifica em Json o material previamente setado no construtor
	O retorno é uma string com todos os atributos e seus respectivos valores
*/
exports.Material.prototype.toString = function() {
	return JSON.stringify(this);
}
