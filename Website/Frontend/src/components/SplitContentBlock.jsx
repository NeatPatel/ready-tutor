import styles from './splitcontentblock.module.scss';
import {Row, Col} from 'react-bootstrap';

/*
props.left is all content displayed on the left half/column of the block
props.right is all content displayed on the right half/column of the block
additional modifiers and formatting can be applied to content within prop

EXAMPLE:
<SplitContentBlock left={<h2 className= 'text-center'>Why Wait? Get a Free Consultation Today!</h2>} right={<img src= {waggImg} height='auto' width='500svh' className="" />}/>
*/

function SplitContentBlock(props){
    return(<>
        <Row className= 'w-75 mx-auto' style={{marginTop: `${props.mt}svh`, marginBottom: `${props.mb}svh`}}>
            <Col className="m-auto px-auto w-100">{props.left}</Col>
            <Col className="m-auto px-auto w-100">{props.right}</Col>
        </Row>
    </>)
}
export default SplitContentBlock;