import {React , useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './css/Login.css'

//data
import { LoginAccounts } from './dataExport/Loginaccount'

import { Card, CardHeader, Heading,Input,Button, CardBody, Stack } from '@chakra-ui/react'
import {
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'


function Login() {

  const linkto = useNavigate();

  const [username , setUname] = useState('');
  const [password , setPword] = useState('');
  
  const [Uerror , setU_Error] = useState(false);
  const [Perror , setP_Error] = useState(false);
  //if login clicked
  

  const HandlePword = (e) =>{
    setPword(e.target.value);
    setP_Error(false);

  };
  
    const HandleUname = (e) =>{
      setUname(e.target.value);
      setU_Error(false);
    };
  
  function submitForm(e){
    
    e.preventDefault();
    if(username === ''){setU_Error(true)};
    if(password === ''){setP_Error(true)};

    if(username !== '' && password !== ''){


      let result = LoginAccounts.find(res => res.username === username);
      
      if(result){
        console.log(result);
        sessionStorage.setItem('account' , JSON.stringify({username:result.username , password:result.password , auth: result.authority}));
        linkto('/');
      }
      else{
        setU_Error(true);
      }
      
      // sessionStorage.setItem('account' , JSON.stringify({username:username , password:password}))
      // navigatePage('/');

      
    }
    

  };


  return (
        <div className="Login">
          <Card align='center' className='cards'>
            <CardHeader>
              <Heading size='md'>Log in</Heading>
            </CardHeader>
            <CardBody>
            <FormControl as='fieldset' className='LoginBox'>
                  <Stack spacing={4} direction='column'>
                  <Stack spacing={4} direction='column'>
                    <FormControl isInvalid={Uerror}>
                    {!Uerror ? ("") : (<FormErrorMessage>Invalid username </FormErrorMessage>) }
                      <Input type="text" placeholder={'Username'} value={username} onChange={HandleUname}/>
                    </FormControl>
                    <FormControl isInvalid={Perror}>
                      {!Perror ? ("") : (<FormErrorMessage>Invalid password </FormErrorMessage>) }
                      <Input type="password" placeholder='Password' value={password} onChange={HandlePword}/>
                    </FormControl>
                  </Stack>
                    <Button colorScheme='messenger' 
                            onClick={submitForm}  
                            loadingText='Submitting'
                            >Log in</Button>
                  </Stack>
            </FormControl>
            </CardBody>
          </Card>
        </div>
  )
}

export default Login
