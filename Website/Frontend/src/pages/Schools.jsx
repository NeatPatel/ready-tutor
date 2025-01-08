import styles from './about.module.scss';
import {Card, ListGroup, Col, Row, ListGroupItem, Image, Button, Dropdown} from 'react-bootstrap';
import { useState } from 'react';
import ContentBlock from '../components/ContentBlock.jsx';
import { useNavigate } from 'react-router-dom';


function Schools() {

        const [selectedOption, setSelectedOption] = useState('Select a school');

        const handleSelect = (eventKey) => {
                setSelectedOption(eventKey);
        };

        const navigate = useNavigate();
        const handleButtonClick = () => {
                let redirectUrl = '';
            
                // Based on the selected option, set the redirect URL
                if (selectedOption === 'UCI') {
                        redirectUrl = '/uci-school';
                } else if (selectedOption === 'Option 2') {
                        redirectUrl = '/notfound';
                }
            
                // Redirect to the selected URL
                if (redirectUrl) {
                        navigate(redirectUrl);
                }
        };

        return (<>
                <ContentBlock mt='25' content={<h1 className= 'display-1 text-dark text-center mt-2 text-dark'>Select Your School</h1>}/>
                
                <ContentBlock mt='5' content={
                        <Dropdown onSelect={handleSelect}>
                                <Dropdown.Toggle variant="danger" id="dropdown-basic" size='lg'>
                                        {selectedOption}
                                </Dropdown.Toggle>

                                <Dropdown.Menu size='lg'>
                                <Dropdown.Item eventKey="UCI">UCI</Dropdown.Item>
                                <Dropdown.Item eventKey="Option 2">Option 2</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                }/>
                        
                <ContentBlock mt='5' content={

                        <Button variant="danger" size="lg" type="submit" onClick={handleButtonClick}>
                                Continue
                        </Button>

                }/>
                        
        </>);
}

export default Schools;