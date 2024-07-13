import { Container, Row, Col } from 'react-bootstrap';
import styles from './contentblock.module.scss';

/*
props.content - main html (auto centered)
props.mt - margin top of block
props.mb - margin bottom of block
*/

function ContentBlock(props) {
    return (<>
        <Container>
            <Row style={{marginTop: `${props.mt}svh`, marginBottom: `${props.mb}svh`}} className={styles.contentRow + " text-center mx-auto border"}>
                <Col className="border">
                    {props.content}
                </Col>
            </Row>
        </Container>
    </>);
}

export default ContentBlock;