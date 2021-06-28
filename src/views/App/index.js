import React from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../../components/Header';

export default class App extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: '#E5E5E5',
                    minHeight: '20vh',
                    paddingTop: '30px',
                }}
            >
                <Container>
                    <Header />
                </Container>
            </div>
        );
    }
}
