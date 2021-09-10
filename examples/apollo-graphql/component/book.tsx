import React from 'react'
import { useBookQuery } from '../graphql'
import { Text, View } from 'react-native';

export const Book = () => {
    const { data, loading } = useBookQuery()
    return (
        <View>
            {data && <Text testID='author'>
                {data.book.author}
            </Text>}
            {loading && <Text>Loading</Text>}
        </View>
    )
}