import { type Tags } from "../../types"

interface Props {
    tag: Tags;
}

export function Tag ({tag} : Props) {
    return (
        <p key={tag.id}>{tag.title}</p>
    )
}