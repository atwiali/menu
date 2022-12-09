import React from 'react'
import { Row, Col } from "react-bootstrap";
import Roll from 'react-reveal/Roll';

const Category = ({filterbyCategory , allCategory}) => {
  const onFilter = (cat) => {
    filterbyCategory(cat)
  }
  return (
    <Row  className='my-2 mb-5'>
      <Roll  >
      <Col sm="12" className='d-flex justify-content-center ' >
          
          {
            allCategory.length >= 1? (allCategory.map ((cat)=>{
              return(<div className='text-center' >
              <button onClick = { ()=> onFilter(cat)} className='btn mx-2 ' > {cat} </button>
              
          </div>)

            })) : <h4>NO FOODS</h4>
          }
            
        </Col>
        </Roll>
      
        
    </Row>
  )
}

export default Category