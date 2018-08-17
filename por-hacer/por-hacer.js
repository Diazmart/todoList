

const fs= require('fs');


let listadoPorHacer=[];

const guardarDB = () =>{

	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile(`db/data.json`, data, (err)=>{
		if (err) if (err) throw new Error('No se pudo guardar la actividad', err); 
	});
	
}

const cargarDB = () =>{

	try{
		listadoPorHacer = require('../db/data.json');
	}catch(error){
		listadoPorHacer = [];
	}

	
} 	

const crear = (descripcion) =>{
		
		cargarDB();

		let porHacerX = {
			descripcion: descripcion,
			completado: false
		};

		listadoPorHacer.push(porHacerX);
		guardarDB();	

		return porHacerX;	
}


const getListado = () =>{
	
	cargarDB();

	return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) =>{

	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	});

	if (index >= 0 ){
		listadoPorHacer[index].completado = completado;
		
		guardarDB();
		return true;
	}
	else{
		return false;
	}


}

const borrar = (descripcion) =>{

	cargarDB();

	let indice = listadoPorHacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	});

	if (indice >= 0 ){
		
		//listadoPorHacer[index].splice = completado;
		listadoPorHacer.splice(indice,indice);
		
		guardarDB();
		return true;
	}
	else{
		return false;
	}


}



module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}