import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {subDays } from "date-fns";
import Moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
const Step4 = ({ setForm, formData, navigation }) => {
  const { start,end,budget } = formData;
  const { previous, next } = navigation;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  formData.start = Moment(startDate).format('DD-MM-YYYY');
  formData.end = Moment(endDate).format('DD-MM-YYYY');
  var startDay = Moment(formData.start);
  var endDay = Moment(formData.end);

  var SDate = Moment(startDate,'DD-MM-YYYY'); //todays date
  var EDate = Moment(endDate,'DD-MM-YYYY'); // another date
  var duration = Moment.duration(EDate.diff(SDate));
  var numDays = duration.asDays();

  var [amountErr, setamountErr] = useState();
	 const formValidation = () => {
		let isValid = true;
	 if (formData.budget) {
		var numberRGEX = /^[0-9]*$/;
		if(!numberRGEX.test(formData.budget)){
		   amountErr = "Please enter valid amount.";
		   isValid = false;
	   }
		}else{
			amountErr = "Please fill out this field.";
		  isValid = false;
		}
		setamountErr(amountErr);
		return isValid;
	}
	const onSubmit = ()=>{
		// e.preventDefault();
		const isValid = formValidation();
		if(isValid){
			next();
		}
	  }

  return (
    <>
    <fieldset>
			<div className="row">
				<div className="col-md-5">
					<br/><br/>
					<h4 style={{textAlign: "left", color: "#5851bb"}}>Budget</h4>
					<p style={{textAlign: "left", fontSize: "22px"}}>Payment Summary</p>
					<div className="row">
						<div className='col-sm-4'>
							<span className="pick">Start Date</span>
								<DatePicker
								selected={startDate}
								onChange={date => setStartDate(date)}
								selectsStart
								startDate={startDate}
								endDate={endDate}
								dateFormat="dd/MM/yyyy"
								minDate={subDays(new Date(), 0)}
								maxDate={subDays(new Date(), -30)}
							/>
						</div>
						<div className='col-sm-4'>
							<span className="pick">End Date</span>
								<DatePicker
								selected={endDate}
								dateFormat="dd/MM/yyyy"
								onChange={date => setEndDate(date)}
								selectsEnd
								startDate={startDate}
								endDate={endDate}
								minDate={startDate}
								maxDate={subDays(startDate, -30)}
							/>
						</div>
					</div>
					<p style={{textAlign: "left"}}>Your add Will run from {formData.start} To {formData.end}</p>
					<br/>
					<div className="table-responsive">
						<table className="table table dark1">
							<tbody>
								<tr>
									<td style={{textAlign: "left", border: "3px solid #888"}}>
										<span className="colspanyu"> Total Budget </span>
									</td>
									<td style={{textAlign: "left", border: "3px solid #888"}}>
										<input type="number" min="0"  className="form-control inp" 
											placeholder="$ 100 USD" name="budget" value={budget} onChange={setForm} style={{marginbottom: "1px"}}/>
											{amountErr ?(
												<div style={{textAlign: "left",color:'red'}}>{amountErr}</div>
											):null}
									</td>
								</tr>
								<tr>
									<td colSpan="2" style={{textAlign: "left", border: "3px solid #888"}}>
										{ (budget && numDays > 0)? 
										<span className="colspanyu"> $ {budget} a day x {Math.round(numDays)} days </span>
										 : 
										 <span className="colspanyu"> $ 100 a day x 1 days </span> 
										}
									</td>
								</tr>
								<tr>
									<td style={{textAlign: "left", border: "3px solid #888"}}>
										<span className="colspanyu"> Total Amount</span>
									</td>
									<td style={{textAlign: "left", border: "3px solid #888"}}>
										<span className="colspanyu"> $ {(budget*numDays).toFixed(2)} USD </span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<input type="button" onClick={onSubmit}  className="next action-button" value="Next" />
			<input type="button" onClick={previous} name="previous" className="previous action-button-previous" value="Previous" />
		</fieldset>
    </>
  );
};

export default Step4;
