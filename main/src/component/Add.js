import {
    TextField,
    Select,
    Typography,
    MenuItem,
    Button
} from '@mui/material';
import axios from 'axios';

import { Link } from 'react-router-dom';
import React from 'react';
function Add(){
    const [tipe, setTipe] = React.useState('jurusan');
    const [nama, setNama] = React.useState('');
    const [nilaimatkul, setNilaimatkul] = React.useState('');
    const [sks, setSks] = React.useState('');
    const [semester, setSemester] = React.useState('');
    const [namaMatkul, setNamaMatkul] = React.useState('');
    const [json, setJson] = React.useState(null);
    const [namajurusan,setNamaJurusan] = React.useState([]) 
    const [namafakultas, setNamafakultas] = React.useState([])
    axios.defaults.baseURL = 'http://localhost:8080';
    React.useEffect(() => {
        axios.get('/jurusan')
        .then((response) => {
            var json = response.data
            var arr = []
            for(var i=0; i<json.length; i++){
                arr.push(json[i].namajurusan)
            }
            setNamaJurusan(arr)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    React.useEffect(() => {
        axios.get('/fakultas')
        .then((response) => {
            var json = response.data
            var arr = []
            for(var i=0; i<json.length; i++){
                arr.push(json[i].namafakultas)
            }
            setNamafakultas(arr)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    const selectnama = namajurusan.map((nama) => {
        return(
            <MenuItem value={nama}>{nama}</MenuItem>
        )
    })
    const selectmatkul = namafakultas.map((matkul) => {
        return(
            <MenuItem value={matkul}>{matkul}</MenuItem>
        )
    })
    const handleinput = () => {
        if(tipe==="" || nama==="" || nilaimatkul==="" || sks==="" || semester==="" || namaMatkul==="" ){
            alert('Data tidak boleh kosong')
        }
        else{
            //cek sks dan semester angka
            var cek1 = parseInt(sks)
            var cek2 = parseInt(semester)
            if(isNaN(cek1) || isNaN(cek2)){
                alert('SKS dan Semester harus angka')
            } 
            else{
                axios.defaults.baseURL = 'http://localhost:8080';
                if(tipe==='jurusan'){
                    axios.post('/matkuljurusanadd', {
                        namamatkul: namaMatkul,
                        namajurusan: nama,
                        prediksinilai: nilaimatkul,
                        sks: parseInt(sks),
                        minsemester: parseInt(semester)
                    })
                    .then((response) => {
                        alert(response.data.status)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
                else{
                    axios.post('/matkulfakultasadd', {
                        namamatkul: namaMatkul,
                        namafakultas: nama,
                        prediksinilai: nilaimatkul,
                        sks: parseInt(sks),
                        minsemester: parseInt(semester)
                    })
                    .then((response) => {
                        alert(response.data.status)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
                setTipe('jurusan')
                setJson(null)
                setNama('')
                setNilaimatkul('')
                setSks('')
                setSemester('')
                setNamaMatkul('')

            }
        }
    }


    return(
        <div>
        <Typography variant="h4" component="h4" gutterBottom >
            Tambah Mata Kuliah
        </Typography>
        <Typography variant='h6' component='h6' gutterBottom> 
            Pilih Tipe
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
        <Typography variant='h6' component='h6' gutterBottom>
            Pilih Nama Jurusan/Fakultas
        </Typography>
        <Select
        value={nama}
        onChange={(event) => setNama(event.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        style={{width: 300}}
        >
        {tipe === 'jurusan' ? selectnama : selectmatkul}
        </Select>
        <br/>
        <br/>
        <Typography variant='h7' component='h7' gutterBottom>
            Belum ada jurusan/fakultas?
        </Typography>
        <Button component={Link} to="/addjur" color="inherit" size='small'>
          Klik Disini
        </Button>
        <Typography variant='h6' component='h6' gutterBottom>
            Nama Mata Kuliah
        </Typography>
        <TextField
        id="outlined-basic"
        label="Nama Mata Kuliah"
        variant="outlined"
        style={{width: 300}}
        value={namaMatkul}
        onChange={(event) => setNamaMatkul(event.target.value)}
        />
        <br/>
        <br/>
        <Typography variant='h6' component='h6' gutterBottom>
            Jumlah SKS
        </Typography>
        <TextField
        id="outlined-basic"
        label="Jumlah SKS"
        variant="outlined"
        style={{width: 300}}
        value={sks}
        onChange={(event) => setSks(event.target.value)}
        />
        <br/>
        <br/>
        <Typography variant='h6' component='h6' gutterBottom>
            Minimal Semester
        </Typography>
        <TextField
        id="outlined-basic"
        label="Minimal Semester"
        variant="outlined"
        style={{width: 300}}
        value={semester}
        onChange={(event) => setSemester(event.target.value)}
        />
        <br/>
        <br/>
        <Typography variant='h6' component='h6' gutterBottom>
            Prediksi Nilai
        </Typography>
        <Select
        value={nilaimatkul}
        onChange={(event) => setNilaimatkul(event.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        style={{width: 300}}
        >
        <MenuItem value='A'>A</MenuItem>
        <MenuItem value='AB'>AB</MenuItem>
        <MenuItem value='B'>B</MenuItem>
        <MenuItem value='BC'>BC</MenuItem>
        <MenuItem value='C'>C</MenuItem>
        <MenuItem value='D'>D</MenuItem>
        <MenuItem value='E'>E</MenuItem>
        </Select>
        <br/>
        <br/>
        <Button variant="contained" style={{backgroundColor: '#4caf50', color: 'white'}} onClick={handleinput}>
            Tambah
        </Button>
        <br/>
        <br/>
        <Typography variant='h6' component='h6' gutterBottom>
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
                for (let i = 0; i < json.length; i++) {
                    let data = json[i];
                    if(data.namamatkul==="" || data.namamatkul===undefined
                    || data.sks==="" || data.sks===undefined
                    || data.minsemester==="" || data.minsemester===undefined
                    || data.prediksinilai==="" || data.prediksinilai===undefined){
                        continue;
                    }
                    if(isNaN(parseInt(data.sks)) || isNaN(parseInt(data.minsemester))){
                        continue;
                    }
                    if(data.prediksinilai!=="A" && data.prediksinilai!=="AB" && data.prediksinilai!=="B" && data.prediksinilai!=="BC" && data.prediksinilai!=="C" && data.prediksinilai!=="D" && data.prediksinilai!=="E"){
                        continue;
                    }
                    if(parseInt(data.sks)<1 || parseInt(data.minsemester)<1){
                        continue;
                    }
                    else{
                        if(data.jurusan!==undefined){
                            if(data.jurusan!==""){
                            axios.defaults.baseURL = 'http://localhost:8080';
                            axios.post('/matkuljurusanadd', {
                                namamatkul: data.namamatkul,
                                namajurusan: data.jurusan,
                                prediksinilai: data.prediksinilai,
                                sks: parseInt(data.sks),
                                minsemester: parseInt(data.minsemester)
                            })
                            .then((response) => {
                                console.log(response);
                            }
                            ).catch((error) => {
                                console.log(error);
                            });

                        }

                        }
                        if(data.fakultas!==undefined){
                            if(data.fakultas!==""){
                            axios.defaults.baseURL = 'http://localhost:8080';
                            axios.post('/matkulfakultasadd', {
                                namamatkul: data.namamatkul,
                                namafakultas: data.fakultas,
                                prediksinilai: data.prediksinilai,
                                sks: parseInt(data.sks),
                                minsemester: parseInt(data.minsemester)
                            })
                            .then((response) => {
                                console.log(response);
                            }
                            ).catch((error) => {
                                console.log(error);
                            });
                        }
                        }

                    }
                    
                    
                }
                alert('Data Berhasil Ditambah')
            }
        }}>
            Tambah
        </Button>
        

        </div>

        
    )
}

export default Add;