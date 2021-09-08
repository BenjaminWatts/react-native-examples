import { Book } from '../book'
import { act, render } from '@testing-library/react-native'
import { MockedProvider } from '@apollo/client/testing'
import React from 'react'
import * as mocks from './requests'

test('canRender', async () => {
    const res = await render(
        <MockedProvider mocks={[

            mocks.getBookSuccess

        ]}>
            <Book />
        </MockedProvider>
    )
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
    })
    res.getByTestId('author')
})