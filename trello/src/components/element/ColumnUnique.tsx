import { type Column, type TaskType } from '../../types';
import { Task } from './Task';
import { CreateTask } from '../actions/CreateTask';

import { FaXmark } from 'react-icons/fa6';

import { EditableInput } from '../actions/EditableInput';

interface Props{
    column: Column;
    onEdit : (column : Column) => void;
    onRemove : (id : string) => void;
}

export function ColumnUnique ({column, onEdit, onRemove}: Props) {

    const handleClicTitle = (title : string) => {
        const newColumn = {
            id: column.id,
            title: title,
            list: column.list
        }

        onEdit(newColumn);
    }

    const onCreateTask = (task : TaskType) => {
        const newColumn = {
            id: column.id,
            title: column.title,
            list: [ ...column.list, task ]
        }

        onEdit(newColumn);
    }

    const onEditTask = (task : TaskType) => {
        const newTasks = column.list.map(item => {
            if (item.id == task.id) {
                return { ...item, title: task.title, completed: task.completed }
            } else {
                return item;
            }
        })

        const newColumn = { ...column, list: newTasks };

        onEdit(newColumn);
    }

    return(
        <div key={column.id} className="column">
            <div className="title between">
                <EditableInput prevText={column.title} handleFunc={handleClicTitle}>
                    <h2>{column.title}</h2>
                </EditableInput>
                <FaXmark onClick={() => onRemove(column.id) } className="icon" size={12} />
            </div>
            <div className="list-task">
                { column.list.map(task => (
                    <Task data={task} onEditTask={onEditTask} />
                 ))}
                <CreateTask onCreate={onCreateTask} />
            </div>
        </div>
    )
}