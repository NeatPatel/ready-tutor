import { Container, Row, Col } from 'react-bootstrap';
import styles from './contentblock.module.scss';

/*
props.content - main html (auto centered)
props.mt - margin top of block
props.mb - margin bottom of block
*/

function ContentBlock(props) {
    return (<>
        <Container /*style={{backgroundColor: "#ff0000"}}*/ fluid>
            <Row style={{marginTop: `${props.mt}svh`, marginBottom: `${props.mb}svh`}} className="w-100 w-md-75 text-center mx-auto px-3 px-md-0">
                <Col>
                    {props.content}
                </Col>
            </Row>
        </Container>
    </>);
}

export default ContentBlock;