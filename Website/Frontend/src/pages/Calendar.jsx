import ContentBlock from '../components/ContentBlock.jsx';

function Calendar() {
    return (<>
        <ContentBlock mt='25' mb='0' content={<>
            <h1 className= "m-auto display-1 text-dark">Summer Programs Calendar</h1>
        </>}/>

        <iframe src="https://calendar.google.com/calendar/embed?src=6adb5d3311d310946b0b8701ae612e30035e9f0d2db84019ba371ce3ad06ddf6%40group.calendar.google.com&ctz=America%2FLos_Angeles" className="my-5 w-100" width="800" height="600"></iframe>
    </>);
}

export default Calendar;