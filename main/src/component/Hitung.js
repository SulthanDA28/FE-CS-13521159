import {
    TextField,
    Select,
    Typography,
    MenuItem,
    Button
} from '@mui/material';
import axios from 'axios';
import React from 'react';
import BeautifulBox from './Boxtampilan';
function Hitung(){
    const [tipe, setTipe] = React.useState('jurusan');
    const [nama, setNama] = React.useState('');
    const [minSks, setMinSks] = React.useState('');
    const [ambilSemester, setAmbilSemester] = React.useState('');
    const [maxSks, setMaxSks] = React.useState('');

    const [ipk, setIpk] = React.useState('');
    const [sks, setSks] = React.useState('');
    const [hasilsemua, setHasilsemua] = React.useState([]);

    const [testfakultas, setTestfakultas] = React.useState([]);
    const [testjurusan, setTestjurusan] = React.useState([]);

    
    axios.defaults.baseURL = 'http://localhost:8080';
    React.useEffect(() => {
        axios.get('/jurusan')
        .then((response) => {
            var json = response.data
            var arr = []
            for(var i=0; i<json.length; i++){
                arr.push(json[i].namajurusan)
            }
            setTestjurusan(arr)
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
            setTestfakultas(arr)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
        

    const buatfakultas = testfakultas.map((fakultas) => {
        return(
            <MenuItem value={fakultas}>{fakultas}</MenuItem>
        )
        
    })
    const buatjurusan = testjurusan.map((jurusan) => {
        return(
            <MenuItem value={jurusan}>{jurusan}</MenuItem>
        )

    })

    const buatbox = hasilsemua.map((data) => {
        return(
            <BeautifulBox data={data}/>
        )
    })

    const handleinput = () => {
        if(tipe==="" || nama==="" || minSks==="" || ambilSemester==="" || maxSks==="" ){
            alert('Data tidak boleh kosong')
        }
        else{
            //cek sks dan semester angka
            var cek1 = parseInt(minSks)
            var cek2 = parseInt(ambilSemester)
            var cek3 = parseInt(maxSks)
            if(isNaN(cek1) || isNaN(cek2) || isNaN(cek3)){
                alert('Semua data harus angka')
            }
            else{
                if(cek1 > cek3){
                    alert('Minimal SKS tidak boleh lebih besar dari Maksimal SKS')
                }
                else if(cek1<=0 || cek2<=0 || cek3<=0){
                    alert('Semua data harus positif')
                }
                else{
                    if(tipe==='jurusan'){
                        axios.post('/prediksijurusan', {
                            namajurusan: nama,
                            minsemester: parseInt(ambilSemester),
                            minsks: parseInt(minSks),
                            maxsks: parseInt(maxSks)
                        })
                        .then((response) => {
                            console.log(response.data)
                            if(response.data.ipk!==undefined&&response.data.totalsks!==undefined&&response.data.semuamatkul!==undefined){
                            setIpk(response.data.ipk)
                            setSks(response.data.totalsks)
                            setHasilsemua(response.data.semuamatkul)
                            }
                            if(response.data.semuamatkul===null){
                                setIpk(response.data.ipk)
                                setSks(response.data.totalsks)
                                setHasilsemua([])
                            }
                        }
                        )
                        .catch((err) => {
                            console.log(err)
                        }
                        )

                    }
                    else{
                        axios.post('/prediksifakultas', {
                            namafakultas: nama,
                            minsemester: parseInt(ambilSemester),
                            minsks: parseInt(minSks),
                            maxsks: parseInt(maxSks)
                        })
                        .then((response) => {
                            console.log(response.data)
                            if(response.data.ipk!==undefined && response.data.totalsks!==undefined && response.data.semuamatkul!==undefined){
                            setIpk(response.data.ipk)
                            setSks(response.data.totalsks)
                            setHasilsemua(response.data.semuamatkul)
                            }
                            if(response.data.semuamatkul===null){
                                setIpk(response.data.ipk)
                                setSks(response.data.totalsks)
                                setHasilsemua([])
                            }
                        }
                        )
                        .catch((err) => {
                            console.log(err)
                        }
                        )
                    }

                    setAmbilSemester('')
                    setMaxSks('')
                    setMinSks('')
                    setNama('')
                    
                }
            }
        }
    }

    return(
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                Dynamic Programming Course Scheduler
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
            <Typography variant="h6" component="h6" gutterBottom>
                Nama Jurusan/Fakultas
            </Typography>
            <Select
            value={nama}
            onChange={(event) => setNama(event.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={{width: 300}}
            >
            {tipe === 'jurusan' ? buatjurusan : buatfakultas}
            </Select>
            <br/>
            <br/>
            <Typography variant="h6" component="h6" gutterBottom>
                Semester Pengambilan
            </Typography>
            <TextField
            id="outlined-basic"
            label="Semester Pengambilan"
            variant="outlined"
            style={{width: 300}}
            value={ambilSemester}
            onChange={(event) => setAmbilSemester(event.target.value)}
            />
            <br/>
            <br/>
            <Typography variant="h6" component="h6" gutterBottom>
                Minimal SKS
            </Typography>
            <TextField
            id="outlined-basic"
            label="Minimal SKS"
            variant="outlined"
            style={{width: 300}}
            value={minSks}
            onChange={(event) => setMinSks(event.target.value)}
            />
            <br/>
            <br/>
            <Typography variant="h6" component="h6" gutterBottom>
                Maksimal SKS
            </Typography>
            <TextField
            id="outlined-basic"
            label="Maksimal SKS"
            variant="outlined"
            style={{width: 300}}
            value={maxSks}
            onChange={(event) => setMaxSks(event.target.value)}
            />
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={handleinput}>
                Hitung
            </Button>
            <br/>
            <br/>
            <Typography variant="h6" component="h6" gutterBottom>
                IPK Prediksi: {ipk}
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
                Total SKS: {sks}
            </Typography>
            <br/>
            <br/>
            {buatbox}
                




        </div>
    )
}

export default Hitung;