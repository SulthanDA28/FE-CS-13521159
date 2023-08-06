import {
    Typography,
    TextField,
    Select,
    MenuItem,
    Button
} from '@mui/material'
import React from 'react'
import axios from 'axios'
function Jurusan(){
    const [namafakultas, setNamaFakultas] = React.useState('');
    const [namajurusan, setNamaJurusan] = React.useState('');
    const [listalljurusan, setListAllJurusan] = React.useState([])
    axios.defaults.baseURL = 'http://localhost:8080';
    React.useEffect(() => {
        axios.get('/fakultas')
        .then((response) => {
            var json = response.data
            var arr = []
            for(var i=0; i<json.length; i++){
                arr.push(json[i].namafakultas)
            }
            setListAllJurusan(arr)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
        

    const handleinput = () => {
        if(namafakultas==="" || namajurusan===""){
            alert('Data tidak boleh kosong')
        }
        else{
            axios.post('/jurusanadd', {
                namafakultas: namafakultas,
                namajurusan: namajurusan
            })
            .then((response) => {
                console.log(response)
                alert(response.data.status)
            })
            .catch((err) => {
                console.log(err)
            })

            setNamaFakultas('')
            setNamaJurusan('')
        }
    }
    return(
        <div>
            <Typography variant="h6" component="h6" gutterBottom>
                Pilih Fakultas
            </Typography>
            <Select
            value={namafakultas}
            onChange={(event) => setNamaFakultas(event.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={{width: 300}}
            >
            {listalljurusan.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
            ))}
            </Select>
            <br/>
            <br/>
            <Typography variant="h6" component="h6" gutterBottom>
                Nama Jurusan
            </Typography>
            <TextField
            id="outlined-basic"
            label="Nama Jurusan"
            variant="outlined"
            style={{width: 300}}
            value={namajurusan}
            onChange={(event) => setNamaJurusan(event.target.value)}
            />
            <br/>
            <br/>
            <Button variant="contained" color="primary" style={{width: 300}} onClick={handleinput}>
                Tambah Jurusan
            </Button>
        </div>
    )
}

export default Jurusan;