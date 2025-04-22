import { type Tags } from "../../types"

interface Props {
    tag: Tags;
}

export function Tag ({tag} : Props) {
    return (
        <div key={tag.id} className="tag-item">
            {tag.title}
        </div>
    )
}