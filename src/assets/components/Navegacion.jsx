import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Navegacion = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex justify-content-between">
                    <Navbar.Brand className='d-flex'>
                        <img
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                        />
                        <h5>Pizería Mama Mía </h5>
                    </Navbar.Brand>
                    <div className='d-flex'>
                        <h5 className='text-light m-1'> 🛒</h5>
                        <h5 className='text-light m-1'> $0,000</h5>
                    </div>
                </Container>
            </Navbar>
        </>

    )
}

export default Navegacion;