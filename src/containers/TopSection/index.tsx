import react from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'; 
import { NavBar } from '../../components/NavBar';

const TopSectionContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        h-screen
        relative
    `}
`;

export function TopSection() {
    return (
        <TopSectionContainer>
            <NavBar />
        </TopSectionContainer>
    )
}