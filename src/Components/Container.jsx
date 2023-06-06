import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Container.css'
const Container = () => {

    
    return(
        <section className="container h-75" id='Contenedor-grande'>
            <article className='d-flex justify-content-between py-3' id='Articulo'>
            <aside className="container w-50">
            <h2>Buscar por Categoria:</h2>
            </aside>
            <aside className="container w-50">
            <Form.Select aria-label="Default select example">
            <option>Options</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>
            </aside>
            </article>
            <hr />
            <article className='container py-3'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
           <Card.Title>Titulo Noticia</Card.Title>
           <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem odio voluptate sed sunt eveniet quia. Tenetur, corrupti laudantium. Consectetur quae adipisci ex aspernatur commodi nihil, sunt ab officiis odit.
           </Card.Text>
           <Button variant="primary">Ver Noticias Completas</Button>
            </Card.Body>
            </Card>
            </article>
        </section>
    );
}

export default Container;