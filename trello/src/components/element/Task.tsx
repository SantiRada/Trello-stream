import { type TaskType } from '../../types';
import { FaPen } from 'react-icons/fa6';
import { ModalTask } from './ModalTask';

import { EditableInput } from '../actions/EditableInput';
import { useState } from 'react';

interface Props {
    data: TaskType;
    onEditTask: (task : TaskType) => void;
}

export function Task ({data, onEditTask}: Props) {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleClic = () => {
        data.completed = !data.completed;
        onEditTask(data);
    }

    const onEditTitle = (title: string) => {
        data.title = title;
        onEditTask(data);
    }
    
    const closeModal = () => setOpenModal(false);

    return(
        <>
        <div key={data.id} className="task between" onDoubleClick={() => setOpenModal(true) }>
            <div className="min-distance">
                <div onClick={toggleClic} className={data.completed ? "toggle select" : "toggle"}></div>
                <EditableInput handleFunc={onEditTitle}>
                    <h4 className={data.completed ? "title selected" : "title"}>{data.title}</h4>
                </EditableInput>
            </div>
            <FaPen className="element" size={12} />
        </div>
        { openModal && <ModalTask data={data} onEditTask={onEditTask} closeModal={closeModal} /> }
        </>
    )
}