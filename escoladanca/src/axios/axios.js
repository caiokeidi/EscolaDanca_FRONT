import axios from 'axios'

export const busca = async (setFunc) => {
    await axios.get('http://localhost:8000/cursos/')
    .then((response) => {
        setFunc(response.data)
    })

}