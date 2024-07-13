import styles from './splitcontentblock.module.scss';
import {Row, Col} from 'react-bootstrap';

function SplitContentBlock(props){
    return(<>
        <Row className= 'w-75 mx-auto pt-5 pd-5'>
            <Col>{props.left}</Col>
            <Col>{props.right}</Col>
        </Row>
    </>)
}
export default SplitContentBlock;