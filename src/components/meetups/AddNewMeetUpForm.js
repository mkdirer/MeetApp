import Tile from '../interface/Tile';
import formClasses from './AddNewMeetUpForm.module.css'
function AddNewMeetUpForm() {
    return <Tile>
    <form className={formClasses.form}>
        <div className={formClasses.control}>
        </div>
    </form>
    </Tile>
}

export default AddNewMeetUpForm;