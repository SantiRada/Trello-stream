import { useRef, useState, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
    prevText?: string;
    handleFunc : (title: string) => void;
}

export function EditableInput ({children, prevText, handleFunc}: Props) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [creating, setCreating] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(prevText ? prevText : '');

    const handleBlur = () => setCreating(false);
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'Return') {
            handleFunc(title);

            setTitle('');
            setCreating(false);
        }
    }
    
    useEffect(() => {
        if (creating && inputRef.current) { inputRef.current.focus(); }
    }, [creating]);
    
    return(
        <div className="sector-editable">
            { creating ? 
            <input
                type="text"
                placeholder="Titulo de la lista"
                ref={inputRef}
                className="editable-input"
                onChange={(e) => setTitle(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                value={title}
            /> : <a onClick={ () => setCreating(true) }>{children}</a>
            }
        </div>
    )
}