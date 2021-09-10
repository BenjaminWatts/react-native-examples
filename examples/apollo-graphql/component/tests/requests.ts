import { BookDocument } from "../../graphql";

export const getBookSuccess = {
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