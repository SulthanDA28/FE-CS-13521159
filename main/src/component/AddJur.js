import {
    Typography,
    Select,
    MenuItem,
    Button
} from '@mui/material'
import React from 'react'
import Jurusan from './jurusan';
import Fakultas from './fakultas';
import axios from 'axios';
function AddJurusan(){
    const [tipe, setTipe] = React.useState('jurusan');
    const [json, setJson] = React.useState(null);


    return(
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                Tambah Jurusan/Fakultas
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
                Tipe
            </Typography>
            <Select
            value={tipe}
            onChange={(event) => setTipe(event.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={{width: 300}}
            >
            <MenuItem value='jurusan'>Jurusan</MenuItem>
            <MenuItem value='fakultas'>Fakultas</MenuItem>
            </Select>
            <br/>
            <br/>
            {tipe === 'jurusan' ? <Jurusan/> : <Fakultas/>}
            <Typography variant="h6" component="h6" gutterBottom>
                Ingin Tambah Sepaket?
            </Typography>
            <input type="file" id="file" onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.onload = (e) => {
                  try {
                    const parsedJson = JSON.parse(e.target.result);
                    setJson(parsedJson);
                  } catch (error) {
                    console.error('Error parsing JSON file:', error);
                  }
                };
              }
            }}/>
            <br/>
            <br/>
            <Button variant="contained" style={{backgroundColor: '#4caf50', color: 'white'}} onClick={() => {
                if(json === null){
                    alert('File tidak boleh kosong')
                }
                else{
                    axios.defaults.baseURL = 'http://localhost:8080';
                    for (let index = 0; index < json.length; index++) {
                        const element = json[index];
                        if((element.fakultas==='' && element.jurusan!=='')||(element.fakultas==='' && element.jurusan==='')||element.fakultas===undefined||element.jurusan===undefined){
                            continue;
                        }
                        else
                        {
                            if(element.jurusan!==''){
                                axios.post('/jurusanadd', {
                                    namajurusan: element.jurusan,
                                    namafakultas: element.fakultas
                                })
                                .then((response) => {
                                    console.log(response);
                                }, (error) => {
                                    console.log(error);
                                });
                            }
                            else{
                                axios.post('/fakultasadd', {
                                    namafakultas: element.fakultas
                                })
                                .then((response) => {
                                    console.log(response);
                                }, (error) => {
                                    console.log(error);
                                });
                            }
                        }
                    }
                    alert('Berhasil menambahkan data')
                }
            }}>
                Tambah
            </Button>
            
            


        </div>
    )
}

export default AddJurusan;