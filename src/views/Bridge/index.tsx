import React from 'react'

// import Page from 'components/layout/Page'
import styled from 'styled-components'
import { Card, Heading, Button, CardBody, Stepper } from '@javaswap/uikit'
import BridgeInfo from './BridgeInfo'
// import StepperComponent from './components/Stepper'

const StyledLayout = styled.div`
    margin: 0;
    padding: 0;
    max-width: 100%;
    text-align: center;
`
const Bridge: React.FC = () => {
    return (
        <StyledLayout>
            <img src="/images/banners/bridge.jpg" alt="JAVASWAP" width="100%" />
            <>
                <Card>
                    <br /><br /><br /><br />
                    <Heading mb="24px">
                        Bridge
                    </Heading>
                    <CardBody>
                        <BridgeInfo />
                        <br /><br />
                        <Button variant="gradient" style={{ width: "300px" }} onClick={() => {
                            window.open(
                                'https://wallet.matic.network/login/',
                                '_blank' 
                              );
                        }} >Go To Matic</Button>
                    </CardBody>
                </Card>
                <br /><br />
                <Stepper />
            </>
        </StyledLayout>

    )
}

export default Bridge
