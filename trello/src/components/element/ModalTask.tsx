import { type TaskType } from '../../types';

import { useState } from 'react';

import { FaXmark } from 'react-icons/fa6';

import { EditableInput } from '../actions/EditableInput';
import { Tag } from './Tag';
import { CreateTag } from '../actions/CreateTag';
import { ModalThumb } from './ModalThumb';

interface Props {
    data: TaskType;
    onEditTask: (task : TaskType) => void;
    closeModal: () => void;
}

export function ModalTask ({data, onEditTask, closeModal}: Props) {

    const toggleClic = () => {
        data.completed = !data.completed;
        onEditTask(data);
    }

    const onEditTitle = (title: string) => {
        data.title = title;
        onEditTask(data);
    }

    const [editThumb, setEditThumb] = useState<boolean>(false);

    return(
        <div className="space-modal" onDoubleClick={closeModal}>
            <div className="modal-task" tabIndex={0}>
                <div className="thumb">
                    { editThumb && <ModalThumb /> }
                    <a onClick={ () => setEditThumb(!editThumb) } className="btn-thumb">{editThumb ? <FaXmark /> : "Portada"}</a>
                </div>
                <div className="title-space">
                    <div onClick={toggleClic} className={data.completed ? "toggle select" : "toggle"}></div>
                    <EditableInput handleFunc={onEditTitle}>
                        <h1 className="modal-title">{data.title}</h1>
                    </EditableInput>
                </div>
                <div className="tags">
                    <label>Etiquetas</label>
                    <div className="list-tags">
                        {data.tags?.map(tag => (
                            <Tag tag={tag} />
                        ))}
                        <CreateTag />
                    </div>
                </div>
                <div className="desc">
                    <label>Descripción</label>
                    <textarea placeholder="Descripción">{data.desc? data.desc : ''}</textarea>
                </div>
            </div>
        </div>
    )
}