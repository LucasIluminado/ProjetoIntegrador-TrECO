import React from 'react';
import { Container, Grid, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let footerComponet;
    
    if (token != '') {
        footerComponet = <footer>
        <Box className="footer-container">
            <Container maxWidth='lg'>
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={4}>
                        <Box className="titulo-footer" borderBottom={1}>
                            Contato
                        </Box>
                        <Box marginTop={1}>
                            <Box className="texto-footer">
                                <a href="mailto:biell.mendes8@gmail.com" color="inherit" target="_blank" rel="noreferrer">
                                    E-mail
                                </a>
                            </Box>
                            <Box className="texto-footer">
                                <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" color="inherit" target="_blank" rel="noreferrer">
                                    LinkedIn
                                </a>
                            </Box>
                            <Box className="texto-footer">
                                <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" color="inherit" target="_blank" rel="noreferrer">
                                    Instagram
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className="titulo-footer" borderBottom={1}>
                            Suporte
                        </Box>
                        <Box marginTop={1}>
                            <Box className="texto-footer">
                                <a href="https://github.com/Biellms" color="inherit" target="_blank" rel="noreferrer">
                                    Quem Somos
                                </a>
                            </Box>
                            <Box className="texto-footer">
                                <a href="https://github.com/Biellms" color="inherit" target="_blank" rel="noreferrer">
                                    Fale Conosco
                                </a>
                            </Box>
                            <Box className="texto-footer">
                                <a href="https://github.com/Biellms" color="inherit" target="_blank" rel="noreferrer">
                                    Nossa Equipe
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className="titulo-footer" borderBottom={1}>
                            Conta
                        </Box>
                        <Box marginTop={1} >
                            <Box>
                                <Link to='/login' className='text-decorator-none'>
                                    Logar
                                </Link>
                            </Box>
                            <Box>
                                <Link to='/cadastro' className='text-decorator-none'>
                                    Cadastrar
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box textAlign="center" className="titulo2-footer">
                            TrECO © 2021 Todos os Direitos Reservados.
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
    }

    return (
        <>
            {footerComponet}
        </>
    )
}

export default Footer;
