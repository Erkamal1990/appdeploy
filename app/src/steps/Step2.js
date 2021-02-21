import React, { useState, useEffect } from "react";
import IonRangeSlider from 'react-ion-slider';
import { Multiselect } from 'multiselect-react-dropdown';
import csc from 'country-state-city';
import SelectSearch from 'react-select-search';
const Step2 = ({ setForm, formData, navigation }) => {
const { gender,language,country, city,ageFrom,ageTo,intrest,behaviour } = formData;
const Countries = csc.getAllCountries();
const CountryData = Countries.map(({ isoCode, name }) => ({ value: isoCode, name: name }));

const [getCountry, setCountry] = useState();
const [getCity, setCity] = useState();
const getAllCityByCountry = csc.getCitiesOfCountry(getCountry);
const CityData = getAllCityByCountry.map(({ name }) => ({ value: name, name: name }));

const [getAgeForm, setAgeFrom] = useState(30);
const [getAgeTo, setAgeTo] = useState(40);

const SliderData = '';

formData.country = getCountry;
formData.city = getCity;

formData.ageFrom = getAgeForm;
formData.ageTo = getAgeTo;
const statenew = {
      objectArray: [
        { key: "Advertising", cat: "Business and Industry" },
        { key: "Agriculture", cat: "Business and Industry" },
        { key: "Architecture", cat: "Business and Industry" },
        { key: "Aviation", cat: "Business and Industry" },
        { key: "Banking", cat: "Business and Industry" },
        { key: "Online banking", cat: "Investment banking" },
		{ key: "Retail banking", cat: "Investment banking" },
		{ key: "Business", cat: "Investment banking" },
		{ key: "Construction", cat: "Investment banking" },
		{ key: "Fashion design", cat: "Design" },
		{ key: "Graphic design", cat: "Design" },
		{ key: "Interior design", cat: "Design" },
		{ key: "Economics", cat: "Design" },
		{ key: "Engineering", cat: "Design" },
		{ key: "Entrepreneurship", cat: "Design" },
		{ key: "Healthcare", cat: "Design" },
		{ key: "Higher education", cat: "Design" },
		{ key: "Management", cat: "Design" },
		{ key: "Marketing", cat: "Design" },
		{ key: "Nursing", cat: "Design" },
	  ],
};
const onSelect = (selectedList, selectedItem) => {
		formData.intrest = selectedList;
}
const onRemove = (selectedList, removedItem) => {
	formData.intrest = selectedList;
}
  const { previous, next } = navigation;

	 var [countryErr,setcountryErr] = useState();
     var [cityErr,setcityErr] = useState();
     var [ageErr,setageErr] = useState();
	 var [intrestErr,setintrestErr] = useState();
	 var [languageErr,setlanguageErr] = useState();
	 var [genderErr,setgenderErr] = useState();
	 
	 const formValidation = () => {
		let isValid = true;
		if (!formData.country) {
			countryErr = "Please fill out this field.";
			isValid = false;
		}
		if (!formData.city) {
			cityErr = "Please fill out this field.";
			isValid = false;
		}
		if (!formData.intrest) {
			intrestErr = "Please fill out this field.";
			isValid = false;
		}
		if (!formData.language) {
			languageErr = "Please Select at least 1 fields.";
			isValid = false;
		}
		if (!formData.gender) {
			genderErr = "Please Select at least 1 fields.";
			isValid = false;
		}
		setcountryErr(countryErr);
		setcityErr(cityErr);
		setageErr(ageErr);
		setintrestErr(intrestErr);
		setlanguageErr(languageErr);
		setgenderErr(genderErr);
		return isValid;
	}

	const onSubmit = ()=>{
		// e.preventDefault();
		const isValid = formValidation();
		if(isValid){
			next();
		}
	  }
	  console.log(formData);

  return (
    <>
    <fieldset>
			<div className="row">
				<div className="col-md-12">
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
					<br/>
					<h4 style={{textAlign: "left", color: "#5851bb"}}> Target Audience </h4>
					<p style={{textAlign: "left"}}>Select Location, Age, Gender and Interest of people you want to
						reach with you ad.</p>
					<h4 style={{textAlign: "left"}}>Gender</h4>
					<br/>
					<div className="form-group" style={{textAlign: "left"}}>
						<div className="form-check" style={{display: "block"}}>
							<label className="form-check-label">
								<input type="radio" name="gender" defaultChecked={formData.gender?true:false} value="All" onChange={setForm} className="form-check-input" />
								All
								<i className="input-helper"></i></label>
						</div>
						<div className="form-check" style={{display: "block"}}>
							<label className="form-check-label">
								<input type="radio" name="gender" defaultChecked={formData.gender?true:false} value='Men' onChange={setForm} className="form-check-input" />
								Men
								<i className="input-helper"></i></label>
						</div>
						<div className="form-check" style={{display: "block"}}>
							<label className="form-check-label">
								<input type="radio" className="form-check-input" defaultChecked={formData.gender?true:false} name="gender" value="Women" onChange={setForm} />
								Women
								<i className="input-helper"></i></label>
						</div>
						{genderErr ?(
							<div style={{textAlign: "left",color:'red'}}>{genderErr}</div>
						):null}
					</div>
					<h4 style={{textAlign: "left"}}>Language</h4>
					<br/>
					<div className="form-group" style={{textAlign: "left"}}>
						<div className="form-check" style={{display: "block"}}>
							<label className="form-check-label">
								<input type="radio" value="English" defaultChecked={formData.language?true:false} onChange={setForm} className="form-check-input" name="language" 
									/>
								English
								<i className="input-helper"></i></label>
						</div>
						<div className="form-check" style={{display: "block"}}>
							<label className="form-check-label">
								<input type="radio" value="Arabic" defaultChecked={formData.language?true:false} onChange={setForm} className="form-check-input" name="language" 
									/>
								Arabic
								<i className="input-helper"></i></label>
						</div>
						<div className="form-check" style={{display: "block"}}>
							<label className="form-check-label">
								<input type="radio" value="Both" defaultChecked={formData.language?true:false} onChange={setForm} className="form-check-input" name="language" 
									/>
								Both
								<i className="input-helper"></i></label>
						</div>
						{languageErr ?(
							<div style={{textAlign: "left",color:'red'}}>{languageErr}</div>
						):null}
					</div>
					<br/>
					<div class="slider-wrap">
                    <h4 style={{textAlign: "left"}}>Age </h4>
					<IonRangeSlider type={'double'} prefix={'Age '} from={formData.ageFrom?formData.ageFrom:30} to={formData.ageTo?formData.ageTo:40} skin={'flat'} grid={true} style={{ color: 'white' }} className={'helo'} min={25} max={50}
					onChange={(SliderData)=>{
						setAgeFrom(SliderData.from)
						setAgeTo(SliderData.to)
						}} />
					</div>
					<br/><br/>
					<h4 style={{textAlign: "left"}}>Location</h4>
					<br/>
					<div className="row">
						<div className="col-md-3">
								<SelectSearch options={CountryData} onChange={setCountry} autoComplete={'off'} search  name="country" placeholder="Country" />
								{countryErr ?(
									<div style={{textAlign: "left",color:'red'}}>{countryErr}</div>
								):null}
						</div>
						<div className="col-md-3">
							<SelectSearch options={CityData} onChange={setCity} autoComplete={'off'} search  name="city" placeholder="City" />
							{cityErr ?(
								<div style={{textAlign: "left",color:'red'}}>{cityErr}</div>
							):null}
						</div> 
					</div>
				</div>

				<div className="col-md-6 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<ul className="nav nav-tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home-1" role="tab"
										aria-controls="home-1" aria-selected="true">Interest</a>
								</li>
								{/* <li className="nav-item">
									<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile-1" role="tab"
										aria-controls="profile-1" aria-selected="false">Behavior</a>
								</li> */}
							</ul>
							<div className="tab-content">
								<div className="tab-pane fade show active" id="home-1" role="tabpanel"
									aria-labelledby="home-tab">
									<div className="">
										<div className="row">
											<div className="col-lg-12 grid-margin stretch-card">
												<div className="card">
													<div className="card-body" style={{padding:'0rem'}}>
														<div className="maltiSelectBox" style={{marginBottom:"15px"}}>
														<Multiselect
															options={statenew.objectArray}
															groupBy="cat"
															displayValue="key"
															showCheckbox={true}
															selectedValues={formData.intrest}
															onSelect={onSelect}
															onRemove={onRemove}
															/>
															{intrestErr ?(
																<div style={{textAlign: "left",color:'red'}}>{intrestErr}</div>
															):null}
														</div>
														<input type="text" name="behaviour" value={behaviour} onChange={setForm} className="form-control inp"  placeholder="Please define the Behaviour for your potential Target Audience." />
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>

								<div className="tab-pane fade" id="profile-1" role="tabpanel" aria-labelledby="profile-tab">
									<div className="media">
										<div className="media-body">
										<input type="text" name="behaviour" value={behaviour} onChange={setForm} className="form-control inp"  placeholder="Please define the Behaviour for your potential Target Audience." />
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

			</div>
			<input type="button" onClick={onSubmit} className="next action-button" value="Next" />
			<input type="button" onClick={previous} name="previous" className="previous action-button-previous" value="Previous" />
		</fieldset>
    </>
  );
};

export default Step2;
