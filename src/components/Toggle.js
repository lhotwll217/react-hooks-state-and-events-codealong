import { useState } from 'react'

import React from "react";



function Toggle() {

  const [isOn, setIsOn] = useState(false);

  const color = isOn ? "red" : "white";

  return <button style={{ background: color }} onClick={() => setIsOn(!isOn)}>{isOn ? "On" : "Off"}</button>;

}

export default Toggle;
