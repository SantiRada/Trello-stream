import { type TaskType, type Colors } from '../../types';
import { generateUUID } from '../../constants';

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

    const onEdit = (content: (string | Colors), typeData : string) => {
        switch (typeData) {
            case "title": data.title = content; break;
            case "desc": data.desc = content; break;
            case "color": data.color = content as Colors; break;
            case "tags":
                if(data.tags?.find(tag => tag.title === content)) {
                    data.tags = data.tags.filter(tag => tag.title !== content);
                }else{
                    data.tags = [ ...data.tags || [], { id: generateUUID(), title: content } ];
                }
                break;
        }
        
        onEditTask(data);
    }

    const [editThumb, setEditThumb] = useState<boolean>(false);

    return(
        <div className="space-modal" onDoubleClick={closeModal}>
            <div className="modal-task" tabIndex={0}>
                <div className="thumb" style={{ backgroundColor: data.color }}>
                    { editThumb && <ModalThumb onEdit={ (content : string) => onEdit(content, "color") } /> }
                    <a onClick={ () => setEditThumb(!editThumb) } className="btn-thumb">{editThumb ? <FaXmark /> : "Portada"}</a>
                </div>
                <div className="title-space">
                    <div onClick={toggleClic} className={data.completed ? "toggle select" : "toggle"}></div>
                    <EditableInput handleFunc={ (title : string) => onEdit(title, "title") }>
                        <h1 className="modal-title">{data.title}</h1>
                    </EditableInput>
                </div>
                <div className="tags">
                    <label>Etiquetas</label>
                    <div className="list-tags">
                        {data.tags?.map(tag => (
                            <Tag tag={tag} />
                        ))}
                        <CreateTag task={data} onEdit={ (tag : string) => onEdit(tag, "tags") } />
                    </div>
                </div>
                <div className="desc">
                    <label>Descripción</label>
                    <EditableInput prevText={data.desc} rows={6} handleFunc={ (desc : string) => onEdit(desc, "desc") }>
                        <h4 className="desc-title">{data.desc}</h4>
                    </EditableInput>
                </div>
            </div>
        </div>
    )
}