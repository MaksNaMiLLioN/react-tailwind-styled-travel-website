import react from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const LogoContainer = styled.div`
    ${tw`
        font-family["ZCOOL KuaiLe"]
        font-black
        text-2xl
        text-white
    `}
`

 export function Logo() {
    return (
        <LogoContainer>
            TRAVELYA
        </LogoContainer>
    )
 }