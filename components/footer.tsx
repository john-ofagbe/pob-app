import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function Footer(){
    return (
        <>
        <Typography>{'Test'}</Typography>
        <Copyright></Copyright>
        </>
    );
}

function Copyright(props: any) {
    return (
      <>
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://princessobomefoundation.org/">
          Princess Obome Foundation
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Typography align="center">
          5161 Lankershim Blvd, Suite 250, North Hollywood, CA 91601
      </Typography>
      </>
    );
  }