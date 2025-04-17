import { useState } from "react";
import { type Column } from '../../types';
import { ColumnUnique }  from './ColumnUnique';
import { CreateColumn } from '../actions/CreateColumn';

export function Columns () {
    
    const [data, setData] = useState<Column[]>([]);

    const onCreate = (col : Column) => {
        setData([...data, col]);
    }
    const onEdit = (column: Column) => {

        setData(data.map(col => {
            if(col.id == column.id){
                return { ...col, title: column.title, list: column.list };
            }else{
                return col;
            }
        }))
    }

    const onRemove = (id : string) => {
        setData(data.filter(col => col.id != id));
    }

    return(
        <section id="table">
            { data.map(item => (
                <ColumnUnique column={item} onEdit={onEdit} onRemove={onRemove} />
                
              ))
            }
            <CreateColumn onCreate={onCreate} />
        </section>
    )
}