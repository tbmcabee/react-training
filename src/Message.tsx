// PascalCasing (Function components should always follow this)
function Message()
{
    //JSX: Javascript XML
    const name = 'Tallon';
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>;
}

export default Message;