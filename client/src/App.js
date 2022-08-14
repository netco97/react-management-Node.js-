import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import {Table,TableHead,TableBody,TableRow,TableCell} from '@mui/material';
import { useEffect, useState } from 'react';


function App() {
  const [customersData, setCustomersData] = useState([ ]);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  useEffect(() => {
    callApi().then((data) => setCustomersData(data));
  }, [ ] );


  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {
          {customersData}?{customersData}.map(customer => {
          return <Customer
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          /> 
          }) : ""//map 안쓰면 <Customer id={Customers[0].id} ~~~ 이런식으로 다불러와야함 
      }
      </TableBody>
      </Table>
    </div>
  );
}

export default App;
