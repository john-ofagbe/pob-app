import { Breadcrumbs } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function Footer(){
    return (
        <>
            <Copyright></Copyright>
            <FooterLinks></FooterLinks>
        </>
    );
}

function Copyright(props: any) {
    return (
      <>
        <Typography style={{paddingTop: '50px'}} variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://princessobomefoundation.org/">
            Princess Obome Foundation
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
            5161 Lankershim Blvd, Suite 250, North Hollywood, CA 91601
        </Typography>
      </>
    );
  }

  function FooterLinks(props: any){
    return (
        <>
            <Typography variant="body2" align="center" color="text.secondary">
                <Link underline="hover" color="inherit" href="https://princessobomefoundation.org/privacy-policy">Privacy Policy</Link> | <Link underline="hover" color="inherit" href="https://princessobomefoundation.org/terms-of-service">Terms of Service</Link>
            </Typography>
        </>
    );
  }