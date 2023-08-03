import { styled } from 'styled-components';
import './Dashboard.css'
import  {createUseStyles } from 'react-jss';

const useClasses = createUseStyles({
    paragrafo: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover' : {
            backgroundColor: 'blueviolet'
        }
    }
})

const Paragrafo = styled.p`
    background-color: black;

    &:hover {
        background-color: blueviolet
    }
`

export const Dashboard = () => {
    const classes = useClasses();

    return( 
        <>
            <p className={classes.paragrafo}>Teste</p>
            <Paragrafo>Teste</Paragrafo>
        </>
    )
}