class Tela {
	/*
		O construtor recebe qual a rota que irá fornecer os dados para a aplicação
	*/
	constructor(sourceRoute) {
		this.source = 'http://api.spark.dev/'+sourceRoute;
	}
	/*
		Essa função recebe todos os dados e passa para o callback
		callback receberá a resposta caso tudo tenha ocorrido bem e recebera null caso contrário
		Essa função recebe tambem isAsync, uma bool que define se a requisição é assincrona(recomendado) ou não
	*/
	getData(callback, isAsync = true) {
		var request = null;

		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else {
			try {
	       	 request = new ActiveXObject("Msxml2.XMLHTTP");
	      	} 
	      	catch (e) {
	        	try {
	          		request = new ActiveXObject("Microsoft.XMLHTTP");
	        	} 
	        	catch (e) {
	        		return false;
	        	}
	      	}
		}

		request.onreadystatechange =
		function() {
		    if (request.readyState === 4) {
		      if (request.status === 200) {
		        callback(request.responseText);
		      } else {
		        callback(null);
		      }
		    }
		 };
		request.open('GET', this.source, isAsync);
		request.send(null);

		return true;
	}
};