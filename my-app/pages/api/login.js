import cookie from 'cookie';
import axios from 'axios';

async function handleLogin(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { email, password } = req.body;
  try {
    const response = await axios.post('http://127.0.0.1:1337/api/auth/local', {
      identifier: email,
      password: password
    });

    if (response.data && response.data.jwt) {
      const jwtToken = response.data.jwt;
      res.setHeader('Set-Cookie', cookie.serialize('jwt', jwtToken, {
        path: '/', 
        httpOnly: true,
      }));

    } 


    
    const userData = response.data.user;


    res.status(200).json({
      success: true,
      id: userData.id,
      name: userData.username,
    });
  } catch (err) {
  
    res.status(401).json({ error: 'Unauthorized' });
  }
}

export default handleLogin;
