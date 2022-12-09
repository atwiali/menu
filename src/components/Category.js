import React from "react";
import { Row, Col } from "react-bootstrap";
import { Flip } from "react-awesome-reveal";

const Category = ({ filterbyCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center ">
        <Flip>
          {allCategory.length >= 1 ? (
            allCategory.map((cat) => {
              return (
                <div className="text-center">
                  <button onClick={() => onFilter(cat)} className="btn mx-2 ">
                    {" "}
                    {cat}{" "}
                  </button>
                </div>
              );
            })
          ) : (
            <h4>NO FOODS</h4>
          )}
        </Flip>
      </Col>
    </Row>
  );
};

export default Category;
