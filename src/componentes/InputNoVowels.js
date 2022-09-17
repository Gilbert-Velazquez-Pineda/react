const InputNoVowels = () => {
    const onKeyDownHandler = (event) => {
        const vocales =['a','e','i','o','u']

        if ( vocales.includes( event.key.toLowerCase() ) ) {
            event.preventDefault()
        }

        console.log('teclado ');
        console.log(event.key);
    }


  return (
    <div>
        <h3>Input sin vocales</h3>
        < input onKeyDown={onKeyDownHandler} type='text' className="border border-primary"/>
    </div>
  )
}
export default InputNoVowels