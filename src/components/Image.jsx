
function Image(props) {
    const handleImageError = (event) => {
        event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG27rp6wCKcUSGuXvHpeSiFQNyHVBcak9LT5t57-dwI_KEEEtfRTvI8oBeYhCmrB9jQmw&usqp=CAU";
    };
    return (
        <img {...props} draggable="false" onError={handleImageError} />
    )
}

export default Image