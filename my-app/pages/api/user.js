import axios from "axios";

async function handleUser(req, res) {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }
  try {
    const response = await axios(`http://127.0.0.1:1337/api/users/me`, {
      headers: { 'Authorization': `Bearer ${jwt}` },
    });

    const userData = response.data;

    res.status(200).json({
      id: userData.id,
      name: userData.username,
    });
  } catch (err) {
    res.status(401).end();
  }
}

export default handleUser;
