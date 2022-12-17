import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import './mobile.css';

const Faq = () => {
    return (
        <div className="faq pb-3" id="faq">
            <div className="faq-top section-heading">
                <h3 className='text-black'>Frequently Asked Questions</h3>
                <p style={{ marginTop: '30px' }}>
                    If you can’t find the answer to your question here, feel
                    free to contact our support team.
                </p>
            </div>
            <div className="faq-area">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <Accordion className="">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="p-2"
                                >
                                    <Typography className="text_bold text-black">
                                        {/* <i className="icon-right-custom far fa-hand-point-right"></i> */}
                                        How dose our service work?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        We do collecting data cross internet,
                                        calculating and reflecting it to your
                                        dashboard. We are able to provide with
                                        top needed information to take the right
                                        business decisions on the fastest way!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="p-2"
                                >
                                    <Typography className="text_bold text-black">
                                        {/* <i className="icon-right-custom far fa-hand-point-right"></i> */}
                                        Do you provide your services for my specific SKUs?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    Yes we do please you just need to prepare your SKUs list and contact our support team and they will help easily.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    className="p-2"
                                >
                                    <Typography className="text_bold text-black">
                                        {/* <i className="icon-right-custom far fa-hand-point-right"></i> */}
                                        Which payment methods are accepted?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        We accept all major credit cards and payments. You can also choose to checkout with Apple Pay. We will do our best to add new payment methods in the future.


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                         
                        </div>
                        <div className="col-md-6">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="p-2"
                                >
                                    <Typography className="text_bold text-black">
                                        {/* <i className="icon-right-custom far fa-hand-point-right"></i> */}
                                        Are there any rules I should follow when ordering?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Just choose your plan and follow the system instructions!


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    className="p-2"
                                > 
                                    <Typography className="text_bold text-black">
                                        {/* <i className="icon-right-custom far fa-hand-point-right"></i> */}
                                        What is your Terms and Conditions?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The user agrees and understands that SKU Markets shall not be liable for any direct, indirect, incidental, special, consequential or consequential damages including but not limited to, damages for loss of profit, reputation, use, data or other intangible losses resulting from using or inability to use the Service.


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    className="p-2"
                                >
                                    <Typography className="text_bold text-black">
                                        {/* <i className="icon-right-custom far fa-hand-point-right"></i> */}
                                        How can I cancel my subscription?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        From within your billing dashboard, you can pause or cancel all your subscriptions. When you place an order, your billing account is created instantly and you will receive an email with your login details.


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                          

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
