import React from 'react';
import { render } from '@testing-library/react';// testing components
import CustomPage from './CustomPage'; // Component to be test


describe(' main page testing', () => {

    it('Should render the component and should match the snapshot', () => {
        const container = render(<CustomPage></CustomPage>);
        expect(container).toMatchSnapshot();
    });

    it('Should render the component and shoul match the snapshot with props', () => {
        let title = 'Helllo Team';
        const container = render(<CustomPage title={title}></CustomPage>);
        const { getByTestId } = container;
        expect(container).toMatchSnapshot();
        expect(getByTestId('title-header').innerHTML).toEqual(title);
    })



});




