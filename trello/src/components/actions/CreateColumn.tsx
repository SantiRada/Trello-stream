import { type Column } from '../../types';
import { generateUUID } from '../../constants';

import { EditableInput } from './EditableInput';

import { FaPlus } from 'react-icons/fa';

interface Props {
    onCreate : (col : Column) => void;
}

export function CreateColumn ({onCreate}: Props) {

    const handleFunc = (title : string) => {
        let newColumn = {
            id: generateUUID(),
            title: title,
            list: []
        }
        onCreate(newColumn);
    }

    return(
        <div className="create-column">
            <EditableInput handleFunc={handleFunc}>
                <a className="min-distance"><FaPlus size={12} /> Crear columna</a>
            </EditableInput>
        </div>
    )
}