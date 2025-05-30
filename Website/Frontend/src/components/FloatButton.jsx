import styles from './floatbutton.module.scss';

import { Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';

function FloatButton(props) {
    const [ isActive, setIsActive ] = useState(true);

    return (<>
        <Row className={styles.floatButtonAnimation + " pe-none d-flex position-fixed fixed-bottom m-2"}>
            <Col xs={{span: "auto"}} md={{span: "auto"}} lg={{span: "auto"}} className="ms-auto">
                <Card border="dark" className="bg-light p-2 pe-auto">
                    <button className="btn btn-dark rounded-pill p-2 align-self-end mb-1" onClick={() => {setIsActive(!isActive)}}>{' '}</button>
                    {isActive ? <>
                        {props.content}
                    </> : ''}
                </Card>
            </Col>
        </Row>
    </>);
}

export default FloatButton;