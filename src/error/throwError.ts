import { GraphQLError } from 'graphql'

export const throwConflict = () => {
    throw new GraphQLError(`Data Conflict.`, {
        extensions: {
            http: {
                status: 409
            },
        },
    },
    )
}

export const throwInvalid = () => {
    throw new GraphQLError(`Invalid Data.`, {
        extensions: {
            http: {
                status: 400
            },
        },
    },
    )
}

export const throwUnauthen = () => {
    throw new GraphQLError(`Unauthorized.`, {
        extensions: {
            http: {
                status: 401
            },
        },
    },
    )
}

export const throwNotFound= () => {
    throw new GraphQLError(`Data Not Found.`, {
        extensions: {
            http: {
                status: 404
            },
        },
    },
    )
}

export const throwInvalidPassword= () => {
    throw new GraphQLError(`Invalid Password.`, {
        extensions: {
            http: {
                status: 404
            },
        },
    },
    )
}