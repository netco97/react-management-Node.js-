import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import {Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material';



/*함수형 컴포넌트로하니깐 오류남 왜 안되는걸까 ..? 
const [customersData, setCustomersData] = useState( [ ] );

const callApi = async () => {
  const response = await fetch('/api/customers');
  const body = await response.json();
  return body;
  
  useEffect(() => {
    callApi().then((data) => setCustomersData(data));
  }, [ ] );
};*/

class App extends Component{

  state={
    customers: ""
  }

  //실제 api 서버에 접근하도록 하기 (componentDidMount : 데이터 받아오는 작업)
  componentDidMount(){
    //컴포넌트 준비 완료
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  //api 불러오기 (비동기적 수행)
  //const : 변수
  callApi = async() =>{
    const response = await fetch('/api/customers');//로컬호스트 접근
    const body = await response.json();
    return body;
  }
  


  render(){
    return(
        <Paper> 
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
                  {this.state.customers ? this.state.customers.map(c=>{ 
                    return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); 
                  }) : ""}
              </TableBody>
            </Table>
        </Paper>

    );
  }
}

export default App;