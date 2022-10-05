import EquipSquare from "./EquipSquare"

export default function Equipment() {
  return (
    <div className=" grid grid-rows-7 h-3/4 w-1/2">
      <div className="row-start-1 grid grid-cols-5">
        <div className="col-start-2"><EquipSquare name="Cap" equip="cap"/></div>
      </div>
      <div className="row-start-2  grid grid-cols-5">
        <div className="col-start-1"><EquipSquare name="Medal" equip="medal"/></div>
        <div className="col-start-2"><EquipSquare name="Forehead" equip="forehead"/></div>
        <div className="col-start-4"><EquipSquare name="Ring" equip="ring_1"/></div>
        <div className="col-start-5"><EquipSquare name="Ring" equip="ring_2"/></div>
      </div>
      <div className="row-start-3 grid grid-cols-5">
        <div className="col-start-3"><EquipSquare name="Eye Acc" equip="eye_acc"/></div>
        <div className="col-start-4"><EquipSquare name="Ear Acc" equip="ear_acc"/></div>
      </div>
      <div className="row-start-4 grid grid-cols-5">
        <div className="col-start-1"><EquipSquare name="Mantle" equip="mantle"/></div>
        <div className="col-start-2"><EquipSquare name="Chest" equip="chest"/></div>
        <div className="col-start-3"><EquipSquare name="Pendant" equip="pendant"/></div>
        <div className="col-start-4"><EquipSquare name="Shoulder" equip="shoulder"/></div>
        <div className="col-start-5"><EquipSquare name="Shield" equip="shield"/></div>
      </div>
      <div className="row-start-5 grid grid-cols-5">
        <div className="col-start-1"><EquipSquare name="Gloves" equip="gloves"/></div>
        <div className="col-start-2"><EquipSquare name="Pants" equip="pants"/></div>
        <div className="col-start-3"><EquipSquare name="Belt" equip="belt"/></div>
        <div className="col-start-4"><EquipSquare name="Ring" equip="ring_3"/></div>
        <div className="col-start-5"><EquipSquare name="Ring" equip="ring_4"/></div>
      </div>
      <div className="row-start-6 grid grid-cols-5">
        <div className="col-start-3"><EquipSquare name="Shoes" equip="shoes"/></div>
      </div>
    </div>
  )
}