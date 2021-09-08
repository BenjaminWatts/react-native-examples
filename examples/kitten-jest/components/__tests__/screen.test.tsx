import { Screen } from '../screen'
import { render } from '@testing-library/react-native'
import React from 'react'
import { Kitten } from '../../kitten'

test('canRender', async () => {
    const res = await render(<Kitten><Screen /></Kitten>)
    res.debug()
})