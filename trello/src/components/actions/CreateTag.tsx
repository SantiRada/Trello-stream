import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { type TaskType } from '../../types';
import { ModalTag } from '../element/ModalTag';

interface Props {
    onEdit : (tags : string) => void;
    task : TaskType;
}

export function CreateTag ({onEdit, task}: Props) {

    const [viewModal, setViewModal] = useState<boolean>(false);

    return(
        <section className="creator-tags">
            <a onClick={ () => setViewModal(true) } className="btn-more"><FaPlus /></a>
            { viewModal && <ModalTag task={task} onEdit={ onEdit } closeModal={ () => setViewModal(false) } /> }
        </section>
    )
}