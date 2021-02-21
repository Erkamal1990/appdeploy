import React, {useState} from "react";
import { useForm, useStep } from "react-hooks-helper";
import { ProgressBar } from "react-bootstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";

const steps = [
  { id: "step-1" },
  { id: "step-2" },
  { id: "step-3" },
  { id: "step-4" },
  { id: "step-5" },
  { id: "step-6" },
  { id: "step-7" },
  { id: "step-8" }
];

const defaultData = {};
const AllStep = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  var { id } = step;
  const [StepVal, setStep] = useState(id);
  const props = { formData, setForm, navigation};

  switch (id) {
    case "step-1":
      return (
      <>
      <ul id="progressbar">
          <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
          </li>
          <li id="personal"><strong>Audience Selection</strong>
          </li>
          <li id="paymentone"><strong>Platform</strong>
          </li>
          <li id="paymenttwo"><strong>Budget</strong>
          </li>
          <li id="paymentthree"><strong>Forcasting</strong>
          </li>
          <li id="payment"><strong>Channel Authenrication</strong>
          </li>
          <li id="paymentfour"><strong>Creative</strong>
          </li>
          <li  id="confirm"><strong>Payment</strong>
          </li>
        </ul>
      <ProgressBar animated now={13*1} />
      <br/>
      <Step1 {...props} />;
      </>
      );
    case "step-2":
      return (
        <>
        <ul id="progressbar">
          <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
          </li>
          <li className="active" id="personal"><strong>Audience Selection</strong>
          </li>
          <li id="paymentone"><strong>Platform</strong>
          </li>
          <li id="paymenttwo"><strong>Budget</strong>
          </li>
          <li id="paymentthree"><strong>Forcasting</strong>
          </li>
          <li id="payment"><strong>Channel Authenrication</strong>
          </li>
          <li id="paymentfour"><strong>Creative</strong>
          </li>
          <li  id="confirm"><strong>Payment</strong>
          </li>
        </ul>
        <ProgressBar animated now={13*2} />
        <br/>
        <Step2 {...props} />;
        </>
        );
    case "step-3":
      return (
        <>
        <ul id="progressbar">
          <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
          </li>
          <li className="active" id="personal"><strong>Audience Selection</strong>
          </li>
          <li className="active" id="paymentone"><strong>Platform</strong>
          </li>
          <li id="paymenttwo"><strong>Budget</strong>
          </li>
          <li id="paymentthree"><strong>Forcasting</strong>
          </li>
          <li id="payment"><strong>Channel Authenrication</strong>
          </li>
          <li id="paymentfour"><strong>Creative</strong>
          </li>
          <li  id="confirm"><strong>Payment</strong>
          </li>
        </ul>
        <ProgressBar animated now={13*3} />
        <br/>
        <Step3 {...props} />;
        </>
        );
    case "step-4":
      return (
        <>
        <ul id="progressbar">
          <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
          </li>
          <li className="active" id="personal"><strong>Audience Selection</strong>
          </li>
          <li className="active" id="paymentone"><strong>Platform</strong>
          </li>
          <li className="active" id="paymenttwo"><strong>Budget</strong>
          </li>
          <li id="paymentthree"><strong>Forcasting</strong>
          </li>
          <li id="payment"><strong>Channel Authenrication</strong>
          </li>
          <li id="paymentfour"><strong>Creative</strong>
          </li>
          <li  id="confirm"><strong>Payment</strong>
          </li>
        </ul>
        <ProgressBar animated now={13*4} />
        <br/>
        <Step4 {...props} />;
        </>
        );
    case "step-5":
      return (
        <>
       <ul id="progressbar">
          <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
          </li>
          <li className="active" id="personal"><strong>Audience Selection</strong>
          </li>
          <li className="active" id="paymentone"><strong>Platform</strong>
          </li>
          <li className="active" id="paymenttwo"><strong>Budget</strong>
          </li>
          <li className="active" id="paymentthree"><strong>Forcasting</strong>
          </li>
          <li id="payment"><strong>Channel Authenrication</strong>
          </li>
          <li id="paymentfour"><strong>Creative</strong>
          </li>
          <li  id="confirm"><strong>Payment</strong>
          </li>
        </ul>
        <ProgressBar animated now={12*5} />
        <br/>
        <Step6 {...props} />;
        </>
        );
    case "step-6":
      return (
        <>
        <ul id="progressbar">
          <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
          </li>
          <li className="active" id="personal"><strong>Audience Selection</strong>
          </li>
          <li className="active" id="paymentone"><strong>Platform</strong>
          </li>
          <li className="active" id="paymenttwo"><strong>Budget</strong>
          </li>
          <li className="active" id="paymentthree"><strong>Forcasting</strong>
          </li>
          <li className="active" id="payment"><strong>Channel Authenrication</strong>
          </li>
          <li id="paymentfour"><strong>Creative</strong>
          </li>
          <li  id="confirm"><strong>Payment</strong>
          </li>
        </ul>
        <ProgressBar animated now={12*6} />
        <br/>
        <Step7 {...props} />;
        </>
        );
    case "step-7":
      return (
        <>
        <ul id="progressbar">
          <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
          </li>
          <li className="active" id="personal"><strong>Audience Selection</strong>
          </li>
          <li className="active" id="paymentone"><strong>Platform</strong>
          </li>
          <li className="active" id="paymenttwo"><strong>Budget</strong>
          </li>
          <li className="active" id="paymentthree"><strong>Forcasting</strong>
          </li>
          <li className="active" id="payment"><strong>Channel Authenrication</strong>
          </li>
          <li className="active" id="paymentfour"><strong>Creative</strong>
          </li>
          <li  id="confirm"><strong>Payment</strong>
          </li>
        </ul>
        <ProgressBar animated now={12*7} />
        <br/>
        <Step5 {...props} />;
        </>
        );
    case "step-8":
      return (
        <>
        <ul id="progressbar">
          <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
          </li>
          <li className="active" id="personal"><strong>Audience Selection</strong>
          </li>
          <li className="active" id="paymentone"><strong>Platform</strong>
          </li>
          <li className="active" id="paymenttwo"><strong>Budget</strong>
          </li>
          <li className="active" id="paymentthree"><strong>Forcasting</strong>
          </li>
          <li className="active" id="payment"><strong>Channel Authenrication</strong>
          </li>
          <li className="active" id="paymentfour"><strong>Creative</strong>
          </li>
          <li className="active" id="confirm"><strong>Payment</strong>
          </li>
        </ul>
        <ProgressBar animated now={12*8} />
        <br/>
        <Step8 {...props} />;
        </>
        );
    default:
      return null;
  }
};


export default AllStep;