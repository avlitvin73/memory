import styled from 'styled-components'

export const StyledCard = styled.div<{bg: string}>`
background-image: url('${props => props.bg}');
background-color: #ccc;
background-position: center;
background-repeat: no-repeat;
width: 114px;
height: 114px;
`