import {Container} from 'react-bootstrap';

export const Footer = () => (
    <footer className="footer mt-auto py-3 bg-light">
        <Container className="text-center">
            <span>
                Copyleft &#x1f12f; Andre Miras 2022 - Open Edilkamin v
                {process.env.NEXT_PUBLIC_GIT_DESCRIBE ? `v${process.env.NEXT_PUBLIC_GIT_DESCRIBE}` : 'dev'}
            </span>
        </Container>
    </footer>
);
