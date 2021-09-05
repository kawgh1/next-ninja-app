import Link from 'next/link'


export const getStaticPaths = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();


    // returns an array of objects with params specificying the route id
    // paths:  [ { params: { id }}, { params: { id }}, { params: { id }}]

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString()}
        }
    });
    return {
        paths,
        fallback: false // show the 404 page if a bad route
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await response.json();

    return {
        props: { ninja: data }
    }


}






const Details = ({ninja}) => {


return ( 
        <div>
            <h1>Ninja Details Page</h1>
            <h3>Static Generated Page (SSG)</h3>
            <h4>{ninja.name}</h4>
            <p>{ninja.email}</p>
            <p>{ninja.phone}</p>
            <p>{ninja.address.street}, {ninja.address.suite}</p>
            <p>{ninja.address.city}, {ninja.address.zipcode}</p>
            <br></br>
            <p>{ninja.company.name}</p>
            <p>{ninja.company.catchPhrase}</p>
            <p>{ninja.company.bs}</p>

            <br />
            <br />
            <Link href='/ninjas'>
            <a className='btn'>Back</a>
            </Link>
        </div>
     );
}
 
export default Details;