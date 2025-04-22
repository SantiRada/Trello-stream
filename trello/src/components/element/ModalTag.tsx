import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { type TaskType, type Tags } from "../../types";

interface Props {
    closeModal : () => void;
    onEdit : (task : string) => void;
    task : TaskType;
}

export function ModalTag ({closeModal, task, onEdit}: Props) {

    const listTags : Tags[] = [];
    const [input, setInput] = useState<string>("");

    const modifyTag = (tag : Tags) => { onEdit(tag.title); }

    const createTag = (e:React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter' || e.key === 'Return') {
            modifyTag(
                {
                    id: "",
                    title: input,
                }
            );
        }
    }

    return(
        <div className="modal-tag">
            <FaXmark onClick={closeModal} size={16} className="icon-close" />

            <input
                type="text"
                placeholder="Tag name"
                onChange={ (e) => setInput(e.target.value) }
                value={input}
                className="editable-input"
                onKeyDown={createTag}
                />
            <div className="list-tags">
                { listTags.map((tag : Tags, index) => (
                    <div tabIndex={0} onClick={() => modifyTag(tag)} key={index} className={ task && task.tags?.includes(tag) ? "tag-item select" : "tag-item" }>
                        <span>{tag.title}</span>
                    </div>
                ))
                }
            </div>
        </div>
    )
}