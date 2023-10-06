import { exec } from 'child_process';
import util from 'util';
import express from 'express';

const router = express.Router();
const asyncExec = util.promisify(exec);

router.get('/execute-command', async (req, res) => {
  try {
    const { value: name, type } = req.query;
    let program;

    switch (type) {
      case 'model':
        program = `nskeleton make:${type} --${type}=${name} --db=mongodb`;
        break;
        case 'feature':
        program = `nskeleton make:${type} --${type}=${name}`;
        break;
        case 'helper':
        program = `nskeleton make:${type} --${type}=${name}`;
        break;
        case 'controller':
        program = `nskeleton make:${type} --${type}=${name}`;
        break;
        case 'middleware':
        program = `nskeleton make:${type} --${type}=${name}`;
        break;
      // Add more cases as needed
       default:
        program = `nskeleton make:${type} --${type}=${name}`;
    }

    console.log('Executing program:', program);

    const { stdout, stderr } = await asyncExec(program);

    if (stderr) {
      console.error('Error executing command:', stderr);
      res.status(500).json({ error: 'Error executing command' });
    } else {
      console.log('Command executed successfully:', stdout);
      res.json({ message: 'Command executed successfully', output: stdout });
    }
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default router;
