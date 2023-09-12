import Location from "./Location";

function MyFirstFunction (parametro1, parametro2) { // para pasarle datos a la función
    // cuerpo de la funcion -- logica de negocio, la logica funcion
    // que propiedades tienen las varables internas? SON PRIVADAS
    return ''; // el resultado la ejecucion, para devolver datos
}

// el argumento se llama props, pero usualmente usaremos Object Destructuring

// const person = props.person;
// const job = props.job;
// const { person, job } = props; 
// console.log(props);
// -------------------------
// CERRADOS A MODIFICACIONES: Nadie desde afuera puede tocarlo
// POSIBLE EXTENSIÓN: a través de las propiedas
function MyFirstComponent ({ person, job, children }) { // props // parametro/argumento: para pasarle datos a la función
    // RENDER (se muestra en pantalla): cuerpo de la funcion -- logica de negocio, la logica funcion
    // varables internas? SON PRIVADAS
    // estado interno
    const fullname = `${person.name} - ${person.lastname}`;
    // return JSX - JavaScript Xml Extension -- JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a HTML dentro de una archivo JavaScript. 
    return (
        <div>
            <em>{ job.name }: </em>
            <strong>{ fullname }</strong>
            <div> { children }</div>
            <Location city={person.city} />
        </div>
    ); // el resultado la ejecucion, para devolver datos
}

export default MyFirstComponent;