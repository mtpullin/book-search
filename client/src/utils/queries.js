import  gql  from 'graphql-tag';


export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        bookcount
        savedBooks{
            title
            bookId
            author
            image
            description
            link
        }
    }
}
`