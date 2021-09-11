import  gql  from 'graphql-tag';


export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks{
            #_id
            title
            bookId
            authors
            image
            description
            link
        }
    }
}
`