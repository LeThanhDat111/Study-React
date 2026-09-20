import Mount_Unmount from "./Mount_Unmoutn";
import { useState } from "react";
export default function Parents(){
    const [hidden, setHidden] = useState(false);
    return (
		<div>
			<button onClick={() => setHidden(!hidden)}>{!hidden ? 'Ẩn component' : 'Hiện component'}</button>
            {!hidden && <Mount_Unmount/>}
		</div>
	);
}