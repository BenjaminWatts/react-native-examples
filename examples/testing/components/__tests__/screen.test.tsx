import {Screen} from '../screen'
import {render} from '@testing-library/react-native'
import React from 'react'

test('canRender', async () => {
    const res = await render(<Screen/>)
    res.debug()
})