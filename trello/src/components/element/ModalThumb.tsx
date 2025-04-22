import { Colors } from "../../types";

interface Props {
    onEdit: (content : string) => void;
}

export function ModalThumb ({onEdit}: Props) {

    const list : Colors[] = [ "#b45050", "#681a1a", "#66b459", "#27681a", "#5994b4", "#1a3f68", "#6f50b4", "#481a68" ];

    const saveColor = (color: Colors) => {
        const thumb = document.querySelector('.thumb') as HTMLDivElement;
        if (thumb) { thumb.style.backgroundColor = color; }

        onEdit(color);
    }

    return(
        <div className="thumb-list">
            { list.map(item => (
                <a onClick={() => saveColor(item) } style={{ backgroundColor: item }} className="color"></a>
              ))
            }
        </div>
    )
}