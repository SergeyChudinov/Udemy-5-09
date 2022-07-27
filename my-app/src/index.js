import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Button} from './App';

import BootstrapTest from './BootstrapTest'

import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';


const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button/>
    <BigButton as='a'>Отправить отчет</BigButton>
    <BootstrapTest/>
  </React.StrictMode>
);


reportWebVitals();

