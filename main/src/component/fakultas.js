import {
    Typography,
    TextField,
    Button
} from '@mui/material'
import React from 'react'
import axios from 'axios'
function Fakultas (){
    const [namafakultas, setNamaFakultas] = React.useState('');
    axios.defaults.baseURL = 'http://localhost:8080';
    const handleinput = () => {
        if(namafakultas===""){
            alert('Data tidak boleh kosong')
        }
        else{
            axios.post('/fakultasadd', {
                namafakultas: namafakultas
            })
            .then((response) => {
                console.log(response.data.status)
                alert(response.data.status)
            })
            .catch((err) => {
                console.log(err)
            })
            setNamaFakultas('')
        }
    }
    return(
        <div>
            <Typography variant="h6" component="h6" gutterBottom>
                Nama Fakultas
            </Typography>
            <TextField
            id="outlined-basic"
            label="Nama Fakultas"
            variant="outlined"
            style={{width: 300}}
            value={namafakultas}
            onChange={(event) => setNamaFakultas(event.target.value)}
            />
            <br/>
            <br/>
            <Button variant="contained" color="primary" style={{width: 300}} onClick={handleinput}>
                Tambah Fakultas
            </Button>
        </div>
    )

}

export default Fakultas;