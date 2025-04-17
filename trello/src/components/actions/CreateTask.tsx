import { type TaskType } from '../../types';
import { generateUUID } from '../../constants';

import { EditableInput } from './EditableInput';

import { FaPlus } from 'react-icons/fa';

interface Props {
    onCreate : (task : TaskType) => void;
}

export function CreateTask ({onCreate}: Props) {

    const handleFunc = (title : string) => {
        let newTask = {
            id: generateUUID(),
            title: title,
            completed: false
        }
        onCreate(newTask);
    }

    return(
        <div className="create-task">
            <EditableInput handleFunc={handleFunc}>
                <a className="min-distance"><FaPlus size={12} /> Crear Tarea</a>
            </EditableInput>
        </div>
    )
}