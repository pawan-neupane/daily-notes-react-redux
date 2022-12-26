import Form from 'react-bootstrap/Form';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  { cardsDataAppend, cardsDataUpdate } from '../cards/cardSlice'

import { setForm } from './formSlice';


function EntryForm({   cardData, setCardData }) {

    const formData = useSelector((state) => state.form.value)
    const cardValues = useSelector((state) => state.cards.value)
    const dispatch = useDispatch();


    const onChange = (e) => {

        const newFormData = { ...formData };
        newFormData[e.target.name] = e.target.value;
        dispatch(setForm(newFormData))

      }

    const handleSubmit = (e) => {
      e.preventDefault();

      console.warn("letssss check formdata",formData)
  
      if (!formData['id']) {
        console.log(formData)
        const newformData = {...formData}
        newformData["id"] = new Date().toString()
        console.log("letsss print formdata and object 2",newformData)
        dispatch(cardsDataAppend(newformData))
      }
  
      else {
        cardValues.forEach(element => {
          if (formData['id'] == element["id"]) {
            const replacePosition = cardValues.findIndex(o => o.id === formData["id"])
            dispatch(cardsDataUpdate([replacePosition,formData]))

          }
        });
      }
  
      //Resetting the form after submitting.
      dispatch(setForm({
        id: '',
        date: '',
        note: ''
      }))
 
    }
  
    return (
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formDate" style={{ width: '18rem' }}>
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" placeholder="Date" name="date" defaultValue="" value={formData.date} onChange={onChange} />
        </Form.Group>
   */}


        <Form.Group className="mb-3" controlId="formDate" style={{ width: '18rem' }}>
          <Form.Label>Note</Form.Label>
          <textarea className="form-control" type="textarea" placeholder="Date" name="date" defaultValue="" rows = "1" value={formData.date} onChange={onChange} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formNote" style={{ width: '18rem' }}>
          <Form.Label>Note</Form.Label>
          <textarea className="form-control" type="textarea" placeholder="Note" name="note" defaultValue="" value={formData.note} onChange={onChange} rows="3" />
        </Form.Group>
  
        <button type="submit" className="btn btn-outline-success btn-large">
          Submit
        </button>
  
      </Form>
    );
  }
  
  export default EntryForm;