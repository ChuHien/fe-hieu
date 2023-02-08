import { CircularProgress, Box } from '@mui/material';

function Loading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '100px' }}>
      <CircularProgress />
    </Box>
  );
}

export default Loading;