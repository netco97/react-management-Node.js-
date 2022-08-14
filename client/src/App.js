import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import {Table,TableHead,TableBody,TableRow,TableCell} from '@mui/material';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : "이상민",
  'birthday' : "981107",
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : "홍길동",
  'birthday' : "961102",
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : "이순신",
  'birthday' : "951102",
  'gender' : '남자',
  'job' : '디자이너'
}
]

function App() {
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
          customers.map(customer => {
          return <Customer
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          /> 
          })//map 안쓰면 <Customer id={Customers[0].id} ~~~ 이런식으로 다불러와야함 
      }
      </TableBody>
      </Table>
    </div>
  );
}

export default App;
