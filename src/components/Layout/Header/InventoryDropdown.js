import { useState, useRef, useEffect } from "react";

export default function InventoryDropdown() {
  const [dropDownState, setDropDownState] = useState(false);
  const settingsMenu = useRef(null);


  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      console.log()
      if (settingsMenu.current && dropDownState && !settingsMenu.current.contains(e.target)) {
        setDropDownState(false);
      }
    });
  }, [dropDownState]);

  return (
    <div>
      <button onClick={() => setDropDownState(true)}>Inventory</button>
      {dropDownState ? (
        <div className="bg-white absolute right-1 z-50 flex flex-col" ref={settingsMenu}>
          <p>dropdown</p>
        </div>
      ) : (
        <></>
      )}
    </div>

  );
}