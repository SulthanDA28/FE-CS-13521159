import React from 'react';
import { Box, Typography } from '@mui/material';

const BeautifulBox = ({ data }) => {
  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>{data.nama}</Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left', wordWrap: 'break-word' }}>
        Tipe: {data.tipe}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left', wordWrap: 'break-word' }}>
        Mata Kuliah: {data.namamatkul}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left', wordWrap: 'break-word' }}>
        SKS: {data.sks}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left', wordWrap: 'break-word' }}>
        Minimal Semester Pengambilan: {data.minsemester}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left', wordWrap: 'break-word' }}>
        Prediksi Nilai: {data.prediksinilai}
      </Typography>
    </Box>
  );
};

export default BeautifulBox;
