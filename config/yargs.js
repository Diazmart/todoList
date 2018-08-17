


const argv=require('yargs')
		.command('crear','Crea una actividad por hacer',{
			descripcion: {
				demand : true,
				alias: 'd',
				desc: 'Descripción de la actividad'
			}
		})
		.command('actualizar','Actualiza las tareas por hacer',{
			descripcion: {
				demand : true,
				alias: 'd',
				desc: 'Descripción de la actividad'
			},
			completado:{
				default: true,
				alias : 'c',
				desc: 'Marcar la actividad como terminada o pendiente'
			}
		})
		.command('borrar', 'Borra una actividad',{
			descripcion: {
				demand : true,
				alias: 'd',
				desc: 'Descripción de la actividad'
			}
		})
		.help() 
		.argv;

module.exports = {
	argv
}