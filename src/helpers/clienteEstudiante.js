import axios from "axios"

// axios tiene implicitamente un AWAIT, no se debe declararlo.
// (r => r.data) representan los datos de ese consumo. Es otra variable const data. Simplemente, se le colocó
// el mismo nombre, pero son distintas

const consultarEstudiante = async (id) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data)
    console.log(data);
    return data;
}

const insertar = async (body) => {
    const data = axios.post(`http://localhost:8082/API/v1.0/Matricula/estudiantes`, body).then(r => r.data)
    console.log(data);
}


// METODOS FACHADAS: (siempre los debo exportar)
export const consultarEstudianteFachada = async (id) => {
    return await consultarEstudiante(id);
}

export const insertarFachada = async (body) => {
    await insertar(body);
}