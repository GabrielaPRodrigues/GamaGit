import styled from 'styled-components';

export const Content = styled.div`
    width: 100wh;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    height: 2.6rem;
    border: none;
    background: #B33771;
    color: #fff;
    border-radius: 0 .25rem  .25rem 0;
    

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ff4d4d;
    margin-top: 1rem;
`