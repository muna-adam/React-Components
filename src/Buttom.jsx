
import { useState } from 'react';

const ToggleButton = () => {

    const [isOn, setIsOn] = useState(true);

    const toggle = () => setIsOn(!isOn);

    return(
        <div>
            <p>This button is {isOn ? 'On' : 'Of'}  </p>
            <button onClick={toggle}>{isOn ? 'Turn On' : 'Turn OF'} </button>
        </div>
    )
}


export default ToggleButton;