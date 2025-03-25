const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let personas = [];

function cargarPersona() {
    rl.question('Ingrese nombre: ', (nombre) => {
        rl.question('Ingrese apellido: ', (apellido) => {
            rl.question('Ingrese DNI: ', (dni) => {
                let telefonos = [];
                
                function agregarTelefono() {
                    rl.question('Ingrese un teléfono (o presione Enter para finalizar): ', (telefono) => {
                        if (telefono !== '') {
                            telefonos.push(telefono);
                            agregarTelefono();
                        } else {
                            personas.push([nombre, apellido, dni, telefonos]);
                            rl.question('¿Desea ingresar otra persona? (s/n): ', (respuesta) => {
                                if (respuesta.toLowerCase() === 's') {
                                    cargarPersona();
                                } else {
                                    mostrarPersonas();
                                    rl.close();
                                }
                            });
                        }
                    });
                }

                agregarTelefono();
            });
        });
    });
}

function mostrarPersonas() {
    console.log('\nLista de Personas Registradas:');
    personas.forEach(persona => {
        console.log(persona);
    });
}

cargarPersona();

