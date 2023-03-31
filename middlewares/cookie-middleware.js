import cookieParser from 'cookie-parser';

const cookieMiddleware = cookieParser('your secret key');

export default cookieMiddleware;


//Use in controller
// export function setCookie(req, res) {
//     res.cookie('my-cookie', 'cookie value', { maxAge: 900000, httpOnly: true });
//     res.send('Cookie set successfully');
//   }
  
//   export function getCookie(req, res) {
//     const cookieValue = req.cookies['my-cookie'];
//     res.send(`Cookie value: ${cookieValue}`);
//   }
  
//Use in route
// import express from 'express';
// import { setCookie, getCookie } from '../controllers/cookie-controller.js';
// import cookieMiddleware from '../helpers/cookie-helper.js';

// const router = express.Router();

// router.get('/set-cookie', setCookie);
// router.get('/get-cookie', cookieMiddleware, getCookie);

// export default router;
