
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import {  setForm } from '../form/formSlice'
import  { cardsDataDelete } from './cardSlice'

function SingleCard(props) {

    const cardValues = useSelector((state) => state.cards.value)
    const dispatch = useDispatch()
    const handleEdit = () => {

        dispatch(setForm({
            "id":props.value.id,
            "date": props.value.date,
            "note": props.value.note
        }))
  
    };
  
    const handleDelete = () => {
      const deletePosition = cardValues.findIndex(o => o.id === props.value.id);
      dispatch(cardsDataDelete(deletePosition))
    };
  
    return (
      <div>
        <Card style={{ width: '18rem' }} >
          <Card.Body>
            <div>
              <ul className="list-inline m-0">
  
                {/* Edit Button */}
                <li className="list-inline-item" style={{ alignSelf: "left" }}>
                  <button className="btn btn-outline-success btn-sm rounded-0 " type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleEdit}><i className="fa fa-edit" ></i></button>
                </li>
  
                {/* Delete Button */}
                <li className="list-inline-item">
                  <button className="btn btn-outline-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleDelete}><i className="fa fa-trash" ></i></button>
                </li>
                <br />
                <li className="list-inline-item">
                  <Card.Title>Date: {props.value.date}</Card.Title>
                </li>
              </ul>
            </div>
  
            <Card.Text>{props.value.note}</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div >
    );
  }

function Cards() {
    const formValue = useSelector((state) => state.form.value)
    console.log("formValue from cards",formValue)

    const cardValues = useSelector((state) => state.cards.value)
    console.log("cardvalue from cards",cardValues)
    return (
        
      <div className="cards">
        {cardValues.map((value) => <SingleCard value={value} key={value.id} />)}
      </div>
    )
  }

export default Cards;