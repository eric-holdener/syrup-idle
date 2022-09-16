import EquipSquare from "./EquipSquare"

export default function Equipment() {
  return (
    <div className=" grid grid-rows-7 h-3/4 w-1/2">
      <div className="row-start-1 grid grid-cols-5">
        <div className="col-start-2"><EquipSquare name="Cap" /></div>
      </div>
      <div className="row-start-2  grid grid-cols-5">
        <div className="col-start-1"><EquipSquare name="Medal" /></div>
        <div className="col-start-2"><EquipSquare name="Forehead" /></div>
        <div className="col-start-4"><EquipSquare name="Ring" /></div>
        <div className="col-start-5"><EquipSquare name="Ring" /></div>
      </div>
      <div className="row-start-3 grid grid-cols-5">
        <div className="col-start-3"><EquipSquare name="Eye Acc" /></div>
        <div className="col-start-4"><EquipSquare name="Ear Acc" /></div>
      </div>
      <div className="row-start-4 grid grid-cols-5">
        <div className="col-start-1"><EquipSquare name="Mantle" /></div>
        <div className="col-start-2"><EquipSquare name="Chest" /></div>
        <div className="col-start-3"><EquipSquare name="Pendant" /></div>
        <div className="col-start-4"><EquipSquare name="Shoulder" /></div>
        <div className="col-start-5"><EquipSquare name="Shield" /></div>
      </div>
      <div className="row-start-5 grid grid-cols-5">
        <div className="col-start-1"><EquipSquare name="Gloves" /></div>
        <div className="col-start-2"><EquipSquare name="Pants" /></div>
        <div className="col-start-3"><EquipSquare name="Belt" /></div>
        <div className="col-start-4"><EquipSquare name="Ring" /></div>
        <div className="col-start-5"><EquipSquare name="Ring" /></div>
      </div>
      <div className="row-start-6 grid grid-cols-5">
        <div className="col-start-3"><EquipSquare name="Shoes" /></div>
      </div>
    </div>
  )
}