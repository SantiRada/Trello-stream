export function ModalThumb () {

    const list = [
        {
            color: '#fff',
        },
        {
            color: 'blue',
        },
        {
            color: 'red',
        },
    ]

    return(
        <div className="thumb-list">
            { list.map(item => (
                <a style={{backgroundColor: item.color}} className="color"></a>
            ))

            }
        </div>
    )
}