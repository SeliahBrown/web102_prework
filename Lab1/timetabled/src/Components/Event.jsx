import react from 'react';

const Event = () => {
    return (
        <td className={'Event ' + props.color}><h5>{props.event}</h5><h6>{props.location}</h6></td>
            
        
    );
}

export default Event;