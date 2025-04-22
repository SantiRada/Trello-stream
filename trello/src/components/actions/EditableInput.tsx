import { useRef, useState, useEffect } from 'react';

interface Props {
    handleFunc : (title: string) => void;
    children: React.ReactNode;
    prevText?: string;
    rows?: number;
}

export function EditableInput ({children, rows, prevText, handleFunc}: Props) {

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    const [creating, setCreating] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(prevText ? prevText : '');

    const handleBlur = () => setCreating(false);
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            rows ? 
                <textarea
                    placeholder="Titulo de la lista"
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    className="editable-input"
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                >{title}</textarea> :
                <input
                    type="text"
                    placeholder="Titulo de la lista"
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    className="editable-input"
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    value={title}
                />
            : <a onClick={ () => setCreating(true) }>{children}</a>
            }
        </div>
    )
}