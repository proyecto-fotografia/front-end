import axios from "axios";
import { Navigate } from "react-router-dom";

const url = "https://localhost/proyectos/backfoto/photo";

export function getPhoto() {
    return axios.get(url + "?page=1")
        .then(res => {
            const response = res.data;
            console.log(response);
            return response;
        })

}

export function Guardar(photo) {
    console.log(photo)
    axios.post(url, photo)
        .then((response) => {
            console.log(response);
        });
    return <Navigate to="/" />;
}

export async function Save(photo) {
    console.log("id: ", photo);
    return await axios
        .post(url, photo)
        .then((response) => console.log(response))
        .catch((error) => {
            console.error("Error al guardar!", error);
        });
}

