def cargar_persona():
    nombre = input("Ingrese nombre: ")
    apellido = input("Ingrese apellido: ")
    dni = input("Ingrese DNI: ")
    
    telefonos = []
    while True:
        telefono = input("Ingrese un teléfono (o presione Enter para finalizar): ")
        if telefono:
            telefonos.append(telefono)
        else:
            break

    return [nombre, apellido, dni, telefonos]

def mostrar_personas(personas):
    print("\nLista de Personas Registradas:")
    for persona in personas:
        print(persona)

def main():
    personas = []
    while True:
        personas.append(cargar_persona())
        continuar = input("¿Desea ingresar otra persona? (s/n): ").strip().lower()
        if continuar != 's':
            break

    mostrar_personas(personas)  # 🔹 Aquí pasamos la lista como argumento

if __name__ == "__main__":
    main()
