import App from './app';
import dotenv from 'dotenv';

dotenv.config();
App.listen(process.env.PORT, (): void => {
  console.table([`Server Running on localhost:${process.env.PORT}`]);
});
