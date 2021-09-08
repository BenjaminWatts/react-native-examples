import { Book } from '../book'
import { act, render } from '@testing-library/react-native'
import { MockedProvider } from '@apollo/client/testing'
import React from 'react'
import { BookDocument } from '../../graphql'


test('canRender', async () => {
    const res = await render(
        <MockedProvider mocks={[
            {
                request: {
                    query: BookDocument
                },
                result: {
                    data: {
                        book: {
                            __typename: 'Book',
                            author: '123',
                            title: 'My Book'
                        }
                    }
                }
            }
        ]}>
            <Book />
        </MockedProvider>
    )
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
    })
    res.getByTestId('author')
})