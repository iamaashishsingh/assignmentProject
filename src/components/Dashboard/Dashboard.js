import React, { useState } from 'react'
import { Button, FormGroup, Form, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import data from './datasource.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function Dashboard() {
  const [selectCheck,setSelectCheck] = useState(false);
  const [selectdisable,setSelectdisable] = useState(false);
  const [buttonStatus, setButtonStaus] = useState(true);
  const [category, setCategory] = useState([]);
  const myOptions = data.Categories;
  const onSelectCategory = (e, val) => {
    let value = val;
    if (value) {
      if (category.indexOf(val) < 0) {
        setCategory(category => [value, ...category]);
        setButtonStaus(false)
      }
    }
    console.log(category);
  }

  const disable = (e) => {
   if (selectdisable){
    setSelectdisable(false); 
   }
   else{
    setSelectdisable(true); 
   }
  }

  const remove = (e) => {
    alert("are you sure want to delete");
    setCategory(category => [...category.filter(x=> x !== e)]);

    console.log(category.length);
    if(category.length == 1){
      setButtonStaus(true);
    }
  }

  const removeAll = () => {
    alert("are you sure want to delete");
    setCategory(category => []);
    setButtonStaus(true);
    
  }

  const selectAll = (e) =>{
    console.log(e.target.value);
    if(selectCheck){
      setSelectCheck(false);
    }
    else{
      setSelectCheck(true);
    }
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="Container">
            <div className="Row">
              <div className="Col-md-6 mt-100">
                <Autocomplete
                  style={{ width: 500, color: "white", background: "grey" }}
                  onChange={(e, val) => onSelectCategory(e, val)}
                  options={myOptions}
                  filterSelectedOptions={true}
                  renderInput={(params) => (
                    <TextField {...params}
                      variant="outlined"
                      label="Search Categories. eg,Cricket"
                    />
                  )}
                />
              </div>
            </div>    
            </div>
           
          <Table striped bordered hover variant="dark" className="mt-5 p-5">
            <thead>
              <tr>
                <th> #</th>
                <th colSpan="2"> Categories </th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {
                category.length > 0 ?
                  category.map((value, ind) => (
                    <tr key={value}>
                      <td> 
                        <Form.Group controlId={'formBasicCheckbox' + ind}>
                          <Form.Check type="checkbox"   value={value} checked={selectCheck} disabled={selectdisable} />
                        </Form.Group>
                      </td>
                      <td colSpan="2">{value}</td>
                      <td>
                        <Button className="btn btn-danger" onClick ={() => remove(value)}> Delete </Button>
                      </td>
                    </tr>
                  ))
                  
                  :<tr> <td colSpan="6"> No list Items Added</td> </tr>

              }
            </tbody>
          </Table>
      
          <div className="d-flex align-items-center">
            <Form.Group controlId="formBasicCheckbox" >
              <Form.Check type="checkbox" onChange={(e)=>selectAll(e)} label="Select all List Items"  disabled={buttonStatus} />
            </Form.Group>
            <button className="btn btn-danger ml-5" onClick = {() => removeAll()} disabled={buttonStatus} > Clear All</button>
          </div>
        </header>
      </div>
    </>
  )
}

export default Dashboard
