import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Accordion, } from 'react-bootstrap';
	
const defaultAccordion = [
	{
	  title: '1. Minsa, when will we get our LoA and Invoice? Where was it sent?',
	  text:
		'The committee will send LoA and Invoice no later than 7 working days after you register. We will send the LoA and Invoice to the team leaders email, so make sure you include a valid and correct email address!',
	},
	{
	  title: '2. Minsa, I registered a week ago but how come I havent received the LoA and Invoice yet?',
	  text:
		'Try checking the spam folder in your team leaders email, maybe the email from the IYSA team will go to the spam folder',
	},
	{
	  title: '3. Where to upload the competition file, Minsa?',
	  text:
		'Upload the files requested by the committee to the Google Drive link that we have included in your LoA, make sure you read the LoA carefully, OK!',
	},
	{
	  title: '4. I want to pay the registration fee but how come I cant find the invoice? and where is the payment transferred?',
	  text:
		'Come on, have you read LoA to the end yet? Because we will send the invoice with your teams LoA, make sure you have read the email from us to the end! For payment, you can transfer to the account listed on the invoice. Make sure you pay according to the nominal stated on the invoice, okay!',
	},
	{
	  title: '5. Minsa, Ive already paid the registration fee. Where can I upload the proof of payment?',
	  text:
		'If you have made a payment, you can upload the proof to the link listed on the invoice, and make sure you fill in and upload the proof of transfer correctly so that the committee can record it correctly too.',
	},
	{
		title: '6. When will the receipt be sent to us?',
		text:
		  'We will send a receipt for payment in a maximum of 7 working days to the team leaders email, after you have uploaded proof of payment!',
	  },
	  {
		title: '7. Minsa, one more week for judging, how come I have not received my teams presentation schedule yet?',
		text:
		  'We will send the online participant presentation schedule no later than 2 days before the judging takes place to the whatsapp group and also the team leaders email. Make sure you diligently check the information we provide on the Whatsapp group and also email!',
	  },
		
]	
const AccordionBlog = () => {
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<Accordion className="accordion dlab-accordion faq-1 box-sort-in m-b30"  defaultActiveKey="-1">
			{defaultAccordion.map((d, i) => (
			   <div className="panel">
					<div className="acod-head">
						<h6 className="acod-title">
							<Accordion.Toggle as={Link} variant="link"
								className={` ${ activeDefault === i ? '' : 'collapsed'}`}
								onClick={() =>
									setActiveDefault(activeDefault === i ? -1 : i)
								} eventKey={`${i}`}>	
								 {d.title}		
							</Accordion.Toggle>
						</h6>	
					</div>
						
				<Accordion.Collapse eventKey={`${i}`} className="acod-body">
				  <div className="acod-content">
					{d.text}
					</div>
				</Accordion.Collapse>
			  </div>
			))}
		</Accordion>	
	)
}
export {defaultAccordion};
export default AccordionBlog;